/* ==========================================================
   VK FOODS – ADMIN PANEL SCRIPT
   ========================================================== */

const ADMIN_CONFIG = {
  password: "VKfoods980465",
  storageKey: "vkfoods_menu_v1"
};

const CATEGORY_LABELS = {
  breakfast: "Breakfast & Tiffin",
  rice:      "Rice Items",
  curries:   "Curries & Sides",
  sweets:    "Sweets",
  snacks:    "Snacks",
  beverages: "Beverages"
};

const CATEGORY_COLORS = {
  breakfast: { bg: "#FF9E2C", gradient: "linear-gradient(135deg, #FF9E2C, #F4B942)" },
  rice:      { bg: "#F4A261", gradient: "linear-gradient(135deg, #F4A261, #E8732A)" },
  curries:   { bg: "#26A69A", gradient: "linear-gradient(135deg, #26A69A, #00695C)" },
  sweets:    { bg: "#EC407A", gradient: "linear-gradient(135deg, #EC407A, #AD1457)" },
  snacks:    { bg: "#D4A017", gradient: "linear-gradient(135deg, #D4A017, #A0793B)" },
  beverages: { bg: "#5C6BC0", gradient: "linear-gradient(135deg, #5C6BC0, #283593)" }
};

/* ── STATE ── */
let menuItems = [];
let editingId = null;
let deleteTargetId = null;
let filterCategory = "all";
let searchQuery = "";

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  setupLogin();
});

/* ══════════════════════════════════════
   LOGIN
══════════════════════════════════════ */
function setupLogin() {
  const form = document.getElementById("login-form");
  const togglePw = document.getElementById("toggle-pw");
  const pwInput = document.getElementById("admin-password");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const pw = pwInput.value;
    if (pw === ADMIN_CONFIG.password) {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("admin-panel").classList.remove("hidden");
      initAdminPanel();
    } else {
      document.getElementById("login-error").classList.remove("hidden");
      pwInput.value = "";
      pwInput.focus();
    }
  });

  togglePw.addEventListener("click", () => {
    const isText = pwInput.type === "text";
    pwInput.type = isText ? "password" : "text";
    togglePw.querySelector("i").className = isText ? "fas fa-eye" : "fas fa-eye-slash";
  });
}

/* ══════════════════════════════════════
   ADMIN PANEL INIT
══════════════════════════════════════ */
function initAdminPanel() {
  loadMenuItems();
  renderStats();
  renderTable();
  setupControls();
  setupItemModal();
  setupConfirmModal();
}

function loadMenuItems() {
  const saved = localStorage.getItem(ADMIN_CONFIG.storageKey);
  if (saved) {
    try { menuItems = JSON.parse(saved); return; } catch {}
  }
  menuItems = [...DEFAULT_MENU_ITEMS];
  saveMenuItems();
}

function saveMenuItems() {
  localStorage.setItem(ADMIN_CONFIG.storageKey, JSON.stringify(menuItems));
}

/* ══════════════════════════════════════
   STATS
══════════════════════════════════════ */
function renderStats() {
  const total = menuItems.length;
  const cats = {};
  menuItems.forEach(i => { cats[i.category] = (cats[i.category] || 0) + 1; });
  const topCat = Object.entries(cats).sort((a, b) => b[1] - a[1])[0];

  document.getElementById("stats-row").innerHTML = `
    <div class="stat-card">
      <div class="stat-icon" style="background: linear-gradient(135deg, #E8532A, #8B1A1A)">
        <i class="fas fa-utensils"></i>
      </div>
      <div class="stat-info">
        <strong>${total}</strong>
        <span>Total Items</span>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: linear-gradient(135deg, #D4A017, #A0793B)">
        <i class="fas fa-tags"></i>
      </div>
      <div class="stat-info">
        <strong>${Object.keys(cats).length}</strong>
        <span>Categories</span>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: linear-gradient(135deg, #26A69A, #00695C)">
        <i class="fas fa-star"></i>
      </div>
      <div class="stat-info">
        <strong>${topCat ? CATEGORY_LABELS[topCat[0]] || topCat[0] : '—'}</strong>
        <span>Most Items In</span>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background: linear-gradient(135deg, #EC407A, #AD1457)">
        <i class="fas fa-rupee-sign"></i>
      </div>
      <div class="stat-info">
        <strong>$${Math.max(...menuItems.map(i => i.price)).toLocaleString("en-US")}</strong>
        <span>Highest Price</span>
      </div>
    </div>`;
}

/* ══════════════════════════════════════
   TABLE
══════════════════════════════════════ */
function renderTable() {
  let filtered = menuItems.filter(item => {
    const matchCat = filterCategory === "all" || item.category === filterCategory;
    const matchSearch = !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  const tbody = document.getElementById("items-tbody");
  const empty = document.getElementById("table-empty");

  if (filtered.length === 0) {
    tbody.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  tbody.innerHTML = filtered.map(item => {
    const catLabel = CATEGORY_LABELS[item.category] || item.category;
    return `
      <tr>
        <td>
          <div class="item-cell">
            <div class="item-emoji-cell" style="background:${item.bgGradient || '#FF9E2C'}">
              ${item.emoji || "🍛"}
            </div>
            <div class="item-name-cell">
              <strong>${esc(item.name)}</strong>
              <small>${esc(item.description.slice(0, 55))}${item.description.length > 55 ? '…' : ''}</small>
            </div>
          </div>
        </td>
        <td>
          <span class="category-badge cat-${item.category}">${catLabel}</span>
        </td>
        <td class="price-cell">$${item.price.toLocaleString("en-US")}</td>
        <td class="unit-cell">${esc(item.unit)}</td>
        <td>
          <div class="action-cell">
            <button class="action-btn edit-btn" onclick="openEditModal(${item.id})" title="Edit">
              <i class="fas fa-pen"></i>
            </button>
            <button class="action-btn del-btn" onclick="confirmDelete(${item.id})" title="Delete">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>`;
  }).join("");
}

/* ══════════════════════════════════════
   CONTROLS
══════════════════════════════════════ */
function setupControls() {
  document.getElementById("search-input").addEventListener("input", e => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderTable();
  });

  document.getElementById("filter-category").addEventListener("change", e => {
    filterCategory = e.target.value;
    renderTable();
  });

  document.getElementById("add-item-btn").addEventListener("click", openAddModal);

  document.getElementById("logout-btn").addEventListener("click", () => {
    if (confirm("Logout of admin panel?")) location.reload();
  });

  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("Reset menu to default items? This will remove all your custom changes.")) {
      menuItems = [...DEFAULT_MENU_ITEMS];
      saveMenuItems();
      renderStats();
      renderTable();
      showToast("Menu reset to defaults.", "success");
    }
  });
}

/* ══════════════════════════════════════
   ITEM MODAL
══════════════════════════════════════ */
function setupItemModal() {
  document.getElementById("item-modal-close").addEventListener("click", closeItemModal);
  document.getElementById("item-cancel").addEventListener("click", closeItemModal);
  document.getElementById("item-modal-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("item-modal-overlay")) closeItemModal();
  });
  document.getElementById("item-form").addEventListener("submit", handleItemSave);
}

function openAddModal() {
  editingId = null;
  document.getElementById("modal-title").textContent = "Add New Item";
  document.getElementById("item-submit").innerHTML = '<i class="fas fa-plus"></i> Add Item';
  document.getElementById("item-form").reset();
  document.getElementById("item-id").value = "";
  document.getElementById("item-color").value = "#FF6B35";
  openItemModal();
}

function openEditModal(id) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;
  editingId = id;
  document.getElementById("modal-title").textContent = "Edit Item";
  document.getElementById("item-submit").innerHTML = '<i class="fas fa-save"></i> Save Changes';
  document.getElementById("item-id").value = id;
  document.getElementById("item-name").value = item.name;
  document.getElementById("item-category").value = item.category;
  document.getElementById("item-desc").value = item.description;
  document.getElementById("item-price").value = item.price;
  document.getElementById("item-unit").value = item.unit;
  document.getElementById("item-emoji").value = item.emoji || "";
  document.getElementById("item-color").value = item.color || "#FF6B35";
  document.getElementById("item-image").value = item.imageUrl || "";
  openItemModal();
}

function openItemModal() {
  document.getElementById("item-modal-overlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeItemModal() {
  document.getElementById("item-modal-overlay").classList.add("hidden");
  document.body.style.overflow = "";
  editingId = null;
}

function handleItemSave(e) {
  e.preventDefault();
  const name = document.getElementById("item-name").value.trim();
  const category = document.getElementById("item-category").value;
  const desc = document.getElementById("item-desc").value.trim();
  const price = parseFloat(document.getElementById("item-price").value);
  const unit = document.getElementById("item-unit").value.trim() || "per serving";
  const emoji = document.getElementById("item-emoji").value.trim() || "🍛";
  const color = document.getElementById("item-color").value;
  const imageUrl = document.getElementById("item-image").value.trim();

  if (!name || !category || isNaN(price) || price <= 0) {
    showToast("Please fill in all required fields.", "error");
    return;
  }

  const catCol = CATEGORY_COLORS[category] || CATEGORY_COLORS.breakfast;
  const bgGradient = `linear-gradient(135deg, ${color} 0%, ${darkenHex(color, 30)} 100%)`;

  if (editingId !== null) {
    const idx = menuItems.findIndex(m => m.id === editingId);
    if (idx !== -1) {
      menuItems[idx] = { ...menuItems[idx], name, category, description: desc, price, unit, emoji, color, bgGradient, imageUrl: imageUrl || undefined };
    }
    showToast(`"${name}" updated successfully.`, "success");
  } else {
    const newId = Date.now();
    menuItems.push({ id: newId, category, name, description: desc, price, unit, emoji, color, bgGradient, imageUrl: imageUrl || undefined });
    showToast(`"${name}" added to menu.`, "success");
  }

  saveMenuItems();
  renderStats();
  renderTable();
  closeItemModal();
}

/* ══════════════════════════════════════
   CONFIRM / DELETE
══════════════════════════════════════ */
function setupConfirmModal() {
  document.getElementById("confirm-cancel").addEventListener("click", () => {
    document.getElementById("confirm-overlay").classList.add("hidden");
    deleteTargetId = null;
  });
  document.getElementById("confirm-ok").addEventListener("click", () => {
    if (deleteTargetId !== null) {
      const item = menuItems.find(m => m.id === deleteTargetId);
      menuItems = menuItems.filter(m => m.id !== deleteTargetId);
      saveMenuItems();
      renderStats();
      renderTable();
      showToast(`"${item?.name || 'Item'}" deleted.`, "success");
      deleteTargetId = null;
    }
    document.getElementById("confirm-overlay").classList.add("hidden");
  });
}

function confirmDelete(id) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;
  deleteTargetId = id;
  document.getElementById("confirm-msg").textContent = `Delete "${item.name}" from the menu? This cannot be undone.`;
  document.getElementById("confirm-overlay").classList.remove("hidden");
}

/* ══════════════════════════════════════
   UTILITIES
══════════════════════════════════════ */
function showToast(msg, type = "") {
  const toast = document.getElementById("admin-toast");
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 3000);
}

function esc(str) {
  if (typeof str !== "string") return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function darkenHex(hex, amount) {
  hex = hex.replace("#", "");
  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);
  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
