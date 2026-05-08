/* ==========================================================
   VK FOODS – MAIN SCRIPT
   ========================================================== */

/* ── CONFIGURATION ──
   UPDATE whatsappNumber to your WhatsApp number
   Format: country code + number, no spaces or + sign
   Example: India (+91) 98765 43210 → "919876543210"
*/
const CONFIG = {
  whatsappNumber: "15715099511",
  currency: "$",
  storageKey: "vkfoods_menu_v1"
};

/* ── STATE ── */
let menuItems = [];
let cart = [];
let activeCategory = "all";

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  loadMenuItems();
  renderMenu();
  setupNav();
  setupCart();
  setupModal();
  setupCategoryTabs();
  setupScrollAnimations();
  setupWhatsAppDirect();
});

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
function loadMenuItems() {
  const saved = localStorage.getItem(CONFIG.storageKey);
  if (saved) {
    try {
      menuItems = JSON.parse(saved);
    } catch {
      menuItems = [...DEFAULT_MENU_ITEMS];
    }
  } else {
    menuItems = [...DEFAULT_MENU_ITEMS];
  }
}

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
function setupNav() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

/* ══════════════════════════════════════
   MENU RENDERING
══════════════════════════════════════ */
function renderMenu() {
  const grid = document.getElementById("menu-grid");
  const empty = document.getElementById("menu-empty");
  const filtered = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");
  grid.innerHTML = filtered.map(item => buildMenuCard(item)).join("");

  // Attach "add to quote" listeners
  grid.querySelectorAll(".add-to-quote-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id, 10);
      addToCart(id);
      btn.textContent = "✓ Added";
      btn.classList.add("added");
      setTimeout(() => {
        btn.textContent = "+ Add to Quote";
        btn.classList.remove("added");
      }, 1500);
    });
  });
}

function buildMenuCard(item) {
  const inCart = cart.some(c => c.id === item.id);
  const imageContent = item.imageUrl
    ? `<img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="this.style.display='none'"/><span class="emoji-fallback">${item.emoji}</span>`
    : `<span class="emoji-fallback">${item.emoji}</span>`;

  return `
    <div class="menu-card fade-in">
      <div class="card-image" style="background:${item.bgGradient || '#FF9E2C'}">
        ${imageContent}
      </div>
      <div class="card-body">
        <span class="card-category" style="color:${item.color || '#FF6B35'}">${CATEGORY_LABELS[item.category] || item.category}</span>
        <h3 class="card-name">${escapeHtml(item.name)}</h3>
        <p class="card-desc">${escapeHtml(item.description)}</p>
        <div class="card-footer">
          <div>
            <span class="card-price">${CONFIG.currency}${item.price}</span>
            <span class="card-unit"> ${escapeHtml(item.unit)}</span>
          </div>
          <button class="add-to-quote-btn ${inCart ? 'added' : ''}" data-id="${item.id}">
            ${inCart ? '✓ Added' : '+ Add to Quote'}
          </button>
        </div>
      </div>
    </div>`;
}

function setupCategoryTabs() {
  document.getElementById("category-tabs").addEventListener("click", e => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.category;
    renderMenu();
    triggerScrollAnimations();
  });
}

/* ══════════════════════════════════════
   CART
══════════════════════════════════════ */
function setupCart() {
  document.getElementById("cart-toggle").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("request-quote-btn").addEventListener("click", openQuoteModal);
}

function openCart() {
  document.getElementById("cart-sidebar").classList.add("open");
  document.getElementById("cart-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

function addToCart(id) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  showToast(`${item.name} added to quote!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, c) => sum + c.qty, 0);
  document.getElementById("cart-count").textContent = count;

  const itemsEl = document.getElementById("cart-items");
  const emptyEl = document.getElementById("cart-empty");
  const footerEl = document.getElementById("cart-footer");

  if (cart.length === 0) {
    emptyEl.style.display = "";
    footerEl.style.display = "none";
    itemsEl.innerHTML = "";
    itemsEl.appendChild(emptyEl);
    return;
  }

  emptyEl.style.display = "none";
  footerEl.style.display = "";

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji" style="background:${item.bgGradient || '#FF9E2C'}">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${escapeHtml(item.name)}</div>
        <div class="cart-item-price">${CONFIG.currency}${item.price} ${escapeHtml(item.unit)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
        <span class="qty-display">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
        <button class="qty-btn" onclick="removeFromCart(${item.id})" title="Remove">🗑</button>
      </div>
    </div>`).join("");

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  document.getElementById("cart-total-amount").textContent = `${CONFIG.currency}${total.toLocaleString("en-US")}`;
}

/* ══════════════════════════════════════
   QUOTE MODAL
══════════════════════════════════════ */
function setupModal() {
  document.getElementById("modal-close").addEventListener("click", closeQuoteModal);
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("modal-overlay")) closeQuoteModal();
  });
  document.getElementById("quote-form").addEventListener("submit", handleQuoteSubmit);
}

function openQuoteModal() {
  if (cart.length === 0) {
    showToast("Please add items to your quote first.", "error");
    return;
  }
  closeCart();
  renderSelectedSummary();
  document.getElementById("modal-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuoteModal() {
  document.getElementById("modal-overlay").classList.remove("active");
  document.body.style.overflow = "";
}

function renderSelectedSummary() {
  const el = document.getElementById("selected-summary");
  if (cart.length === 0) { el.classList.remove("visible"); return; }
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  el.classList.add("visible");
  el.innerHTML = `
    <h4>Selected Items</h4>
    ${cart.map(c => `
      <div class="summary-item">
        <span>${c.emoji} ${c.name} × ${c.qty}</span>
        <span>${CONFIG.currency}${(c.price * c.qty).toLocaleString("en-US")}</span>
      </div>`).join("")}
    <div class="summary-item" style="font-weight:600;border-top:1px solid #ddd;margin-top:6px;padding-top:6px">
      <span>Estimated Total</span>
      <span>${CONFIG.currency}${total.toLocaleString("en-US")}</span>
    </div>`;
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("customer-name").value.trim();
  const phone = document.getElementById("customer-phone").value.trim();

  if (!name) { showToast("Please enter your name.", "error"); return; }
  if (!phone) { showToast("Please enter your phone number.", "error"); return; }

  const eventDate = document.getElementById("event-date").value;
  const guestCount = document.getElementById("guest-count").value;
  const eventType = document.getElementById("event-type").value;
  const notes = document.getElementById("notes").value.trim();

  const message = buildWhatsAppMessage({ name, phone, eventDate, guestCount, eventType, notes });
  openWhatsApp(message);
  closeQuoteModal();
  showToast("Opening WhatsApp...", "success");
  e.target.reset();
}

function buildWhatsAppMessage({ name, phone, eventDate, guestCount, eventType, notes }) {
  const lines = [
    "🍛 *VK Foods – Quote Request*",
    "━━━━━━━━━━━━━━━━━━━━",
    `👤 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`
  ];
  if (eventType) lines.push(`🎉 *Event Type:* ${eventType}`);
  if (eventDate) lines.push(`📅 *Event Date:* ${formatDate(eventDate)}`);
  if (guestCount) lines.push(`👥 *No. of Guests:* ${guestCount}`);
  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push("📋 *Requested Items:*");
  cart.forEach(c => {
    lines.push(`  • ${c.emoji} ${c.name} × ${c.qty} — ${CONFIG.currency}${(c.price * c.qty).toLocaleString("en-US")} (${c.unit})`);
  });
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push(`💰 *Estimated Total:* ${CONFIG.currency}${total.toLocaleString("en-US")}`);
  if (notes) {
    lines.push("");
    lines.push(`📝 *Notes:* ${notes}`);
  }
  lines.push("");
  lines.push("_Sent via VK Foods website_");
  return lines.join("\n");
}

function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`, "_blank");
}

/* ══════════════════════════════════════
   WHATSAPP DIRECT (contact section)
══════════════════════════════════════ */
function setupWhatsAppDirect() {
  document.getElementById("whatsapp-direct").addEventListener("click", e => {
    e.preventDefault();
    const msg = "Hello VK Foods! 🍛 I'd like to enquire about your catering services.";
    openWhatsApp(msg);
  });
}

/* ══════════════════════════════════════
   SCROLL ANIMATIONS
══════════════════════════════════════ */
function setupScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.08 });

  document.querySelectorAll(".fade-in, .feature-card, .menu-card, .contact-card").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

function triggerScrollAnimations() {
  // After re-render, re-observe new cards
  setTimeout(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.05 });
    document.querySelectorAll(".menu-card:not(.visible)").forEach(el => observer.observe(el));
  }, 50);
}

/* ══════════════════════════════════════
   UTILITIES
══════════════════════════════════════ */
function showToast(msg, type = "") {
  let toast = document.getElementById("vk-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "vk-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type}`;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
