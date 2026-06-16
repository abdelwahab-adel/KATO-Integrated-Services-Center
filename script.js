/* ===================== DATA ===================== */
const products = [
  { id: '1', name: 'خلاط كهربائي متعدد', price: 45, oldPrice: 65, category: 'أدوات منزلية', image: '5.webp', desc: 'خلاط قوي لتحضير العصائر والشوربات، شفرات حادة من الستانلس ستيل، ضمان سنة كاملة.', isNew: false, rating: 4.5, isBest: true, stock: 12 },
  { id: '2', name: 'ثلاجة سامسونج 600 لتر', price: 1850, oldPrice: 2200, category: 'أجهزة كهربائية', image: '2.webp', desc: 'ثلاجة سامسونج متطورة مع تقنية التبريد المزدوج، سعة كبيرة وتصميم عصري يناسب كل مطبخ.', isNew: true, rating: 4.8, isBest: true, stock: 5 },
  { id: '3', name: 'غسالة ملابس أوتوماتيك', price: 1250, oldPrice: 1500, category: 'أجهزة كهربائية', image: '3.webp', desc: 'غسالة ملابس أوتوماتيك بالكامل، برامج غسيل متعددة، هادئة وموفرة للمياه والكهرباء.', isNew: false, rating: 4.7, isBest: false, stock: 8 },
  { id: '4', name: 'طقم قدور جرانيت 10 قطع', price: 75, oldPrice: 110, category: 'أدوات منزلية', image: '4.webp', desc: 'طقم قدور طبخ عالي الجودة، غير لاصق، سهل التنظيف، وتوزيع حراري متساوي.', isNew: false, rating: 4.3, isBest: true, stock: 20 },
  { id: '6', name: 'شاشة ذكية 55 بوصة 4K', price: 1450, oldPrice: 1800, category: 'إلكترونيات', image: '6.webp', desc: 'تلفزيون ذكي بدقة 4K، يدعم نتفليكس ويوتيوب، ألوان زاهية وتجربة مشاهدة غامرة.', isNew: true, rating: 4.6, isBest: true, stock: 6 },
  { id: '7', name: 'مجموعة منظفات منزلية', price: 15, oldPrice: 25, category: 'سلع استهلاكية', image: '7.jpg', desc: 'مجموعة شاملة من المنظفات عالية الجودة للمنزل، فعالة وآمنة على جميع الأسطح.', isNew: true, rating: 4.9, isBest: false, stock: 50 },
  { id: '8', name: 'طقم أريكة مودرن', price: 190, oldPrice: 260, category: 'أثاث', image: '8.webp', desc: 'أريكة مريحة بتصميم عصري، قماش عالي الجودة وألوان تناسب جميع الأذواق.', isNew: false, rating: 4.6, isBest: true, stock: 9 },
  { id: '9', name: 'سماعة رأس هيدفون cardoO', price: 50, oldPrice: 80, category: 'إلكترونيات', image: '9.webp', desc: 'اشعر بكل نبضة مع محركات صوت 40 مم، إلغاء ضوضاء نشط حتى -35dB، بطارية 30 ساعة.', isNew: false, rating: 4.5, isBest: true, stock: 15 },
  { id: '10', name: 'طقم أنتريه مودرن 3 قطع - أبيض RA-LR35', price: 280, oldPrice: 350, category: 'أثاث', image: '10.webp', desc: 'طقم أنتريه متكامل يتكوّن من كنبتين وكرسي بتصميم عصري يجمع بين الراحة والأناقة. يوفر مساحة جلوس واسعة ومريحة.', isNew: false, rating: 4.7, isBest: true, stock: 4 },
  { id: '11', name: 'أنتريه مودرن 3 قطع - أوف وايت × برتقالي RA-LR24', price: 230, oldPrice: 310, category: 'أثاث', image: '11.jpg', desc: 'أنتريه مودرن 3 قطع يجمع بين الأناقة والراحة بتصميم عصري مميز. يأتي بألوان أوف وايت × برتقالي.', isNew: true, rating: 4.8, isBest: false, stock: 3 },
  { id: '12', name: 'مكيف هواء إل جي 2 طن إنفرتر', price: 1505, oldPrice: 2000, category: 'أجهزة كهربائية', image: '1.webp', desc: 'مكيف هواء سبليت إل جي بقوة 2 طن، موفر للطاقة مع تقنية الإنفرتر، مثالي للأجواء الحارة في السعودية.', isNew: false, rating: 4.7, isBest: true, stock: 7 }
];

const WA_NUM = "201068300432";

/* ===================== COUPONS ===================== */
const COUPONS = {
  'WELCOME10': { type: 'percent', value: 10, label: 'خصم ترحيبي 10%' },
  'RAYYAN20': { type: 'percent', value: 20, label: 'خصم 20%' },
  'SAVE50':    { type: 'fixed', value: 50, label: 'خصم ثابت 50 ر.س' }
};

/* ===================== STATE ===================== */
let cart = JSON.parse(localStorage.getItem('ry_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('ry_wl') || '[]');
let selectedCat = 'الكل';
let searchQ = '';
let sortVal = 'default';
let currentProduct = null;
let currentQty = 1;
let appliedCoupon = null;
let view = 'all'; // 'all' | 'wishlist'

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  // Render skeletons first for perceived performance
  renderProducts(true);
  renderCart();
  updateWLBadge();
  renderBestSellers();
  renderDeals();
  setupEvents();
  startCountdown();
  startDealsCounter();
  startNotifications();
  initScrollEffects();
  initCounters();
});

/* ===================== HELPERS ===================== */
const fmt = (n) => Number(n).toLocaleString('ar-SA');
const disc = (p) => p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
const inWL = (id) => wishlist.includes(id);
const findP = (id) => products.find(x => x.id === id);

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '<i class="fas fa-star"></i>';
    else if (rating >= i - 0.5) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star"></i>';
  }
  return html;
}

/* ===================== RENDER PRODUCT CARD ===================== */
function productCardHTML(p) {
  const d = disc(p);
  const w = inWL(p.id);
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="img/${p.image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect width=%22200%22 height=%22200%22 fill=%22%23F3F4F6%22/><text x=%2250%25%22 y=%2250%25%22 font-size=%2214%22 fill=%22%236B7280%22 text-anchor=%22middle%22 dy=%22.3em%22>${p.name}</text></svg>'">
        <div class="product-badges">
          ${d ? `<span class="pb pb-sale">-${d}%</span>` : ''}
          ${p.isNew ? `<span class="pb pb-new">جديد</span>` : ''}
          ${p.isBest && !p.isNew ? `<span class="pb pb-best">الأكثر مبيعاً</span>` : ''}
        </div>
        <button class="wishlist-btn-card ${w ? 'active' : ''}" onclick="event.stopPropagation();toggleWL('${p.id}',this)" aria-label="إضافة للمفضلة">
          <i class="${w ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <div class="product-actions-hover">
          <button class="pah-btn pah-btn-wa" onclick="event.stopPropagation();buyWA('${p.id}')" title="اطلب الآن">
            <i class="fab fa-whatsapp"></i> <span>اطلب</span>
          </button>
          <button class="pah-btn pah-btn-view" onclick="event.stopPropagation();openQuickView('${p.id}')" title="عرض سريع">
            <i class="far fa-eye"></i>
          </button>
          <button class="pah-btn pah-btn-cart" onclick="event.stopPropagation();addToCart('${p.id}')" title="أضف للسلة">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-cat-label">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="stars">${renderStars(p.rating)}<span>(${p.rating})</span></div>
        <div class="price-row">
          <span class="price-main">${fmt(p.price)}</span>
          <span class="price-unit">ر.س</span>
          ${p.oldPrice ? `<span class="price-old">${fmt(p.oldPrice)}</span>` : ''}
          ${d ? `<span class="discount-tag">-${d}%</span>` : ''}
        </div>
      </div>
    </div>`;
}

function skeletonCardHTML() {
  return `<div class="product-card skeleton"><div class="product-img-wrap"></div><div class="product-body"><div></div><h3></h3><div></div><div></div></div></div>`;
}

/* ===================== RENDER PRODUCTS ===================== */
function renderProducts(skeleton = false) {
  const grid = document.getElementById('products-grid');
  let list;
  if (view === 'wishlist') {
    list = products.filter(p => wishlist.includes(p.id));
  } else {
    list = products.filter(p => {
      const q = searchQ.trim();
      const qMatch = !q || p.name.includes(q) || p.category.includes(q) || p.desc.includes(q);
      const catMatch = selectedCat === 'الكل' || p.category === selectedCat;
      return qMatch && catMatch;
    });
    if (sortVal === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortVal === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortVal === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
    else if (sortVal === 'discount') list.sort((a, b) => disc(b) - disc(a));
  }

  if (skeleton) {
    grid.innerHTML = Array(8).fill(0).map(skeletonCardHTML).join('');
    setTimeout(() => renderProducts(false), 280);
    return;
  }

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-${view === 'wishlist' ? 'heart' : 'search'}"></i>
        <h3>${view === 'wishlist' ? 'لا توجد منتجات في المفضلة' : 'لا توجد نتائج'}</h3>
        <p>${view === 'wishlist' ? 'اضغط على القلب في أي منتج لإضافته' : 'حاول تغيير معايير البحث أو الفلترة'}</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(productCardHTML).join('');

  // Card click opens modal
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openModal(card.dataset.id);
    });
  });

  // Update title
  const title = document.getElementById('products-title');
  const sub = document.getElementById('products-sub');
  if (view === 'wishlist') {
    title.textContent = 'المفضلة';
    sub.textContent = 'المنتجات التي حفظتها للعودة إليها لاحقاً';
  } else if (selectedCat === 'الكل') {
    title.textContent = 'أحدث المنتجات';
    sub.textContent = 'مجموعة مختارة بعناية لتناسب ذوقكم';
  } else {
    title.textContent = `منتجات ${selectedCat}`;
    sub.textContent = `تصفح أفضل منتجات ${selectedCat}`;
  }
}

/* ===================== BEST SELLERS ===================== */
function renderBestSellers() {
  const grid = document.getElementById('bestsellers-grid');
  if (!grid) return;
  const list = products.filter(p => p.isBest).slice(0, 4);
  grid.innerHTML = list.map(productCardHTML).join('');
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openModal(card.dataset.id);
    });
  });
}

/* ===================== FEATURED DEALS ===================== */
function renderDeals() {
  const grid = document.getElementById('deals-grid');
  if (!grid) return;
  const list = products.filter(p => p.oldPrice && disc(p) >= 15).sort((a, b) => disc(b) - disc(a)).slice(0, 4);
  grid.innerHTML = list.map(p => {
    const d = disc(p);
    const stockPct = Math.max(8, 100 - (p.stock * 5));
    return `
      <div class="deal-card reveal">
        <div class="deal-card-img">
          <img src="img/${p.image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect width=%22200%22 height=%22200%22 fill=%22%23F3F4F6%22/></svg>'">
          <div class="deal-badge">خصم ${d}%</div>
        </div>
        <div class="deal-body">
          <div class="deal-cat">${p.category}</div>
          <div class="deal-name">${p.name}</div>
          <div class="stars" style="margin-bottom:6px">${renderStars(p.rating)}<span>(${p.rating})</span></div>
          <div class="deal-progress"><div class="deal-progress-bar" style="width:${stockPct}%"></div></div>
          <div class="deal-stock">متبقي <strong>${p.stock} قطع</strong> فقط</div>
          <div class="deal-price-row">
            <span class="deal-price">${fmt(p.price)}</span>
            <span class="price-unit">ر.س</span>
            <span class="deal-old">${fmt(p.oldPrice)} ر.س</span>
          </div>
          <button class="deal-cta" onclick="addToCart('${p.id}');openCartDrawer()">
            <i class="fas fa-shopping-bag"></i> أضف إلى السلة
          </button>
        </div>
      </div>`;
  }).join('');
  // Reveal observer for new cards
  setTimeout(() => {
    document.querySelectorAll('.deal-card.reveal').forEach(el => revealObserver.observe(el));
  }, 100);
}

/* ===================== MODAL ===================== */
function openModal(id) {
  const p = findP(id);
  if (!p) return;
  currentProduct = p;
  currentQty = 1;
  document.getElementById('modal-img').src = 'img/' + p.image;
  document.getElementById('modal-img').onerror = function () { this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23F3F4F6"/><text x="50%" y="50%" font-size="14" fill="%236B7280" text-anchor="middle" dy=".3em">' + p.name + '</text></svg>'; };
  document.getElementById('modal-cat').textContent = p.category;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-rating-text').textContent = `(${p.rating} / 5)`;
  const d = disc(p);
  document.getElementById('modal-price').innerHTML = `${fmt(p.price)} <span>ر.س</span>${p.oldPrice ? ` <s>${fmt(p.oldPrice)} ر.س</s>` : ''}${d ? ` <em>وفّر ${d}%</em>` : ''}`;
  document.getElementById('modal-qty').textContent = '1';
  const db = document.getElementById('modal-discount-badge');
  if (d) { db.style.display = 'block'; db.textContent = `-${d}%`; } else { db.style.display = 'none'; }
  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
  currentProduct = null;
}

function changeModalQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  document.getElementById('modal-qty').textContent = currentQty;
  if (currentProduct) {
    const d = disc(currentProduct);
    document.getElementById('modal-price').innerHTML = `${fmt(currentProduct.price * currentQty)} <span>ر.س</span>${currentProduct.oldPrice ? ` <s>${fmt(currentProduct.oldPrice * currentQty)} ر.س</s>` : ''}${d ? ` <em>وفّر ${d}%</em>` : ''}`;
  }
}

/* ===================== QUICK VIEW ===================== */
function openQuickView(id) {
  const p = findP(id);
  if (!p) return;
  currentProduct = p;
  document.getElementById('qv-img').src = 'img/' + p.image;
  document.getElementById('qv-img').onerror = function () { this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23F3F4F6"/><text x="50%" y="50%" font-size="14" fill="%236B7280" text-anchor="middle" dy=".3em">' + p.name + '</text></svg>'; };
  document.getElementById('qv-cat').textContent = p.category;
  document.getElementById('qv-name').textContent = p.name;
  const d = disc(p);
  document.getElementById('qv-price').innerHTML = `${fmt(p.price)} <span>ر.س</span>${p.oldPrice ? ` <s>${fmt(p.oldPrice)} ر.س</s>` : ''}${d ? ` <em>وفّر ${d}%</em>` : ''}`;
  document.getElementById('qv-desc').textContent = p.desc;
  document.getElementById('qv-cart').onclick = () => { addToCart(p.id); closeQuick(); openCartDrawer(); };
  document.getElementById('qv-wa').onclick = () => { buyWA(p.id); closeQuick(); };
  document.getElementById('quick-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuick() {
  document.getElementById('quick-modal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ===================== CART ===================== */
function addToCart(id, qty = 1) {
  const p = findP(id);
  if (!p) return;
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ ...p, qty });
  saveCart();
  renderCart();
  showToast(`تمت إضافة "${p.name}" إلى السلة`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); renderCart(); }
}

function saveCart() {
  localStorage.setItem('ry_cart', JSON.stringify(cart));
}

function computeTotals() {
  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const totalItems = cart.reduce((s, x) => s + x.qty, 0);
  let discount = 0;
  if (appliedCoupon) {
    const c = COUPONS[appliedCoupon];
    if (c.type === 'percent') discount = subtotal * (c.value / 100);
    else if (c.type === 'fixed') discount = c.value;
    discount = Math.min(discount, subtotal);
  }
  const shipping = subtotal >= 200 || subtotal === 0 ? 0 : 20;
  const total = Math.max(0, subtotal - discount + shipping);
  return { subtotal, totalItems, discount, shipping, total };
}

function renderCart() {
  const { subtotal, totalItems, discount, shipping, total } = computeTotals();
  document.getElementById('cart-count').textContent = totalItems;
  document.getElementById('cart-head-count').textContent = totalItems + ' منتج';
  document.getElementById('cart-subtotal').textContent = fmt(subtotal) + ' ر.س';
  document.getElementById('cart-shipping').textContent = shipping === 0 ? 'مجاني' : fmt(shipping) + ' ر.س';
  document.getElementById('cart-total').textContent = fmt(total) + ' ر.س';

  if (discount > 0) {
    document.getElementById('cart-discount-row').style.display = 'flex';
    document.getElementById('cart-discount').textContent = '-' + fmt(discount) + ' ر.س';
  } else {
    document.getElementById('cart-discount-row').style.display = 'none';
  }

  const container = document.getElementById('cart-items');
  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon"><i class="fas fa-shopping-bag"></i></div>
        <h4>سلة التسوق فارغة</h4>
        <p>لم تقم بإضافة أي منتجات بعد. تصفح أقسامنا وابدأ التسوق!</p>
        <button class="cart-empty-btn" onclick="closeCartDrawer();scrollToSec('products')">تسوق الآن</button>
      </div>`;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <img src="img/${item.image}" alt="${item.name}" class="cart-item-img" referrerpolicy="no-referrer" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23F3F4F6%22/></svg>'">
      <div class="cart-item-body">
        <h4>${item.name}</h4>
        <div class="cart-item-price">${fmt(item.price * item.qty)} ر.س</div>
        <div class="qty-row">
          <button class="qty-btn" onclick="changeQty('${item.id}',-1)" aria-label="إنقاص">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}',1)" aria-label="زيادة">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart('${item.id}')" aria-label="حذف"><i class="fas fa-trash"></i></button>
    </div>`).join('');
}

function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ===================== WISHLIST ===================== */
function toggleWL(id, btn) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    if (btn) { btn.classList.remove('active'); btn.querySelector('i').className = 'far fa-heart'; }
    if (view === 'wishlist') renderProducts();
  } else {
    wishlist.push(id);
    if (btn) { btn.classList.add('active'); btn.querySelector('i').className = 'fas fa-heart'; }
    showToast('تمت الإضافة إلى المفضلة ♥', 'success');
  }
  localStorage.setItem('ry_wl', JSON.stringify(wishlist));
  updateWLBadge();
}

function updateWLBadge() {
  const badge = document.getElementById('wl-count');
  badge.textContent = wishlist.length;
  badge.style.display = wishlist.length ? 'flex' : 'none';
}

function openWishlistView() {
  view = 'wishlist';
  selectedCat = 'الكل';
  document.getElementById('search-inp').value = '';
  searchQ = '';
  document.querySelectorAll('.cat-card').forEach(p => p.classList.toggle('active', p.dataset.cat === 'الكل'));
  renderProducts();
  scrollToSec('products');
}

/* ===================== COUPON ===================== */
function applyCoupon(code) {
  const msg = document.getElementById('coupon-msg');
  if (!code) {
    msg.className = 'coupon-msg err';
    msg.textContent = 'الرجاء إدخال كود الخصم';
    return;
  }
  const c = COUPONS[code.toUpperCase().trim()];
  if (!c) {
    msg.className = 'coupon-msg err';
    msg.textContent = 'كود الخصم غير صالح';
    appliedCoupon = null;
    return;
  }
  appliedCoupon = code.toUpperCase().trim();
  msg.className = 'coupon-msg ok';
  msg.textContent = `✓ ${c.label} تم تطبيقه`;
  renderCart();
}

/* ===================== CHECKOUT (WhatsApp) ===================== */
function checkoutWA() {
  if (!cart.length) { showToast('السلة فارغة!', 'error'); return; }
  const { subtotal, discount, shipping, total } = computeTotals();
  const orderId = 'RAY-' + Date.now().toString().slice(-6);
  const date = new Date().toLocaleDateString('ar-SA');
  const items = cart.map((it, i) => `${i + 1}. ${it.name}\n   الكمية: ${it.qty} | السعر: ${fmt(it.price * it.qty)} ر.س`).join('\n\n');

  let msg = `🛍️ *طلب جديد من متجر الريان*%0A`;
  msg += `━━━━━━━━━━━━━━━━━━━%0A`;
  msg += `📋 *رقم الطلب:* ${orderId}%0A`;
  msg += `📅 *التاريخ:* ${date}%0A`;
  msg += `━━━━━━━━━━━━━━━━━━━%0A%0A`;
  msg += `*تفاصيل المنتجات:*%0A${items}%0A%0A`;
  msg += `━━━━━━━━━━━━━━━━━━━%0A`;
  msg += `*ملخص الطلب:*%0A`;
  msg += `• المجموع الفرعي: ${fmt(subtotal)} ر.س%0A`;
  if (discount > 0) msg += `• الخصم (${appliedCoupon}): -${fmt(discount)} ر.س%0A`;
  if (shipping > 0) msg += `• الشحن: ${fmt(shipping)} ر.س%0A`; else msg += `• الشحن: مجاني ✓%0A`;
  msg += `• *الإجمالي: ${fmt(total)} ر.س*%0A%0A`;
  msg += `━━━━━━━━━━━━━━━━━━━%0A`;
  msg += `أرجو تأكيد الطلب وإبلاغي بتفاصيل الدفع والتوصيل. شكراً لكم 🌟`;

  window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank');
}

function buyWA(id) {
  const p = findP(id);
  if (!p) return;
  const d = disc(p);
  let msg = `🛒 *طلب شراء من متجر الريان*%0A%0A`;
  msg += `*المنتج:* ${p.name}%0A`;
  msg += `*الفئة:* ${p.category}%0A`;
  msg += `*السعر:* ${fmt(p.price)} ر.س%0A`;
  if (d) msg += `*الخصم:* ${d}% (بدلاً من ${fmt(p.oldPrice)} ر.س)%0A`;
  msg += `%0Aأرغب في شراء هذا المنتج. الرجاء تأكيد الطلب وتزويدي بتفاصيل الدفع.`;
  window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank');
}

/* ===================== TOAST ===================== */
let toastTimer;
function showToast(text, type = 'success') {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.style.cssText = 'position:fixed;top:90px;left:50%;transform:translateX(-50%) translateY(-30px);background:var(--primary);color:white;padding:14px 24px;border-radius:50px;font-weight:700;font-size:14px;z-index:9999;box-shadow:var(--shadow-lg);opacity:0;transition:all 0.3s var(--ease);display:flex;align-items:center;gap:10px;';
    document.body.appendChild(t);
  }
  t.innerHTML = `<i class="fas fa-${type === 'success' ? 'circle-check' : 'circle-exclamation'}" style="color:var(--accent)"></i> ${text}`;
  requestAnimationFrame(() => { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(-30px)'; }, 2500);
}

/* ===================== EVENTS ===================== */
function setupEvents() {
  // Search
  const searchInp = document.getElementById('search-inp');
  const searchClear = document.getElementById('search-clear');
  searchInp.addEventListener('input', e => {
    searchQ = e.target.value;
    searchClear.classList.toggle('visible', !!searchQ);
    renderProducts();
  });
  searchClear.addEventListener('click', () => {
    searchInp.value = '';
    searchQ = '';
    searchClear.classList.remove('visible');
    renderProducts();
    searchInp.focus();
  });

  // Sort
  document.getElementById('sort-select').addEventListener('change', e => {
    sortVal = e.target.value;
    renderProducts();
  });

  // Categories
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      view = 'all';
      document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedCat = card.dataset.cat;
      renderProducts();
      scrollToSec('products');
    });
  });

  // Cart
  document.getElementById('cart-toggle').addEventListener('click', openCartDrawer);
  document.getElementById('close-cart').addEventListener('click', closeCartDrawer);
  document.getElementById('overlay').addEventListener('click', () => {
    closeCartDrawer();
    closeModal();
    closeQuick();
  });
  document.getElementById('checkout-btn').addEventListener('click', checkoutWA);

  // Modal
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
  document.getElementById('modal-wa-btn').addEventListener('click', () => {
    if (!currentProduct) return;
    const ids = [{ id: currentProduct.id, qty: currentQty, price: currentProduct.price, name: currentProduct.name }];
    const { subtotal, discount, shipping, total } = computeTotals();
    const orderId = 'RAY-' + Date.now().toString().slice(-6);
    let msg = `🛒 *طلب شراء من متجر الريان*%0A%0A`;
    msg += `*المنتج:* ${currentProduct.name}%0A`;
    msg += `*الكمية:* ${currentQty}%0A`;
    msg += `*السعر الإجمالي:* ${fmt(currentProduct.price * currentQty)} ر.س%0A`;
    if (currentProduct.oldPrice) msg += `*السعر الأصلي:* ${fmt(currentProduct.oldPrice * currentQty)} ر.س (خصم ${disc(currentProduct)}%)%0A`;
    msg += `*رقم الطلب:* ${orderId}%0A%0A`;
    msg += `أرغب في شراء هذا المنتج. الرجاء تأكيد الطلب وتزويدي بتفاصيل الدفع والتوصيل.`;
    window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank');
  });
  document.getElementById('modal-cart-btn').addEventListener('click', () => {
    if (currentProduct) { addToCart(currentProduct.id, currentQty); closeModal(); openCartDrawer(); }
  });

  // Quick view
  document.getElementById('close-quick').addEventListener('click', closeQuick);
  document.getElementById('quick-modal').addEventListener('click', e => { if (e.target === e.currentTarget) closeQuick(); });

  // Mobile nav
  document.getElementById('mobile-nav-btn').addEventListener('click', () => {
    document.getElementById('mobile-nav').classList.add('open');
    document.getElementById('overlay').classList.add('active');
  });
  document.getElementById('close-mobile-nav').addEventListener('click', closeMobileNav);
  document.getElementById('overlay').addEventListener('click', closeMobileNav);

  // Coupon
  document.getElementById('coupon-apply').addEventListener('click', () => {
    applyCoupon(document.getElementById('coupon-input').value);
  });
  document.getElementById('coupon-input').addEventListener('keypress', e => {
    if (e.key === 'Enter') { e.preventDefault(); applyCoupon(e.target.value); }
  });
  document.querySelectorAll('.coupon-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.getElementById('coupon-input').value = chip.dataset.code;
      applyCoupon(chip.dataset.code);
    });
  });

  // Esc key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      closeQuick();
      closeCartDrawer();
      closeMobileNav();
    }
  });
}

function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

/* ===================== SCROLL EFFECTS ===================== */
let revealObserver;
function initScrollEffects() {
  const header = document.getElementById('main-header');
  const backTop = document.getElementById('back-top');
  const progress = document.getElementById('scroll-progress');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    header.classList.toggle('scrolled', sy > 30);
    backTop.classList.toggle('show', sy > 400);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (sy / docH * 100) + '%';
    lastScroll = sy;
  }, { passive: true });

  // Reveal observer
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ===================== COUNTER ANIMATION ===================== */
function initCounters() {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter);
  const suffix = el.textContent.includes('%') ? '%' : (target >= 100 ? '+' : '+');
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.floor(eased * target);
    el.textContent = '+' + val.toLocaleString('ar-SA') + (el.dataset.counter === '98' ? '%' : '');
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = (target >= 98 ? '' : '+') + target.toLocaleString('ar-SA') + (el.dataset.counter === '98' ? '%' : '+');
  }
  requestAnimationFrame(step);
}

/* ===================== COUNTDOWN ===================== */
function startCountdown() {
  let s = 5 * 3600 + 22 * 60 + 48;
  const tick = () => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(sec).padStart(2, '0');
    if (s > 0) { s--; setTimeout(tick, 1000); }
    else s = 24 * 3600;
  };
  tick();
}

function startDealsCounter() {
  const el = document.getElementById('deals-timer');
  if (!el) return;
  let s = 12 * 3600 + 45 * 60 + 30;
  const tick = () => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    el.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    if (s > 0) { s--; setTimeout(tick, 1000); } else s = 12 * 3600;
  };
  tick();
}

/* ===================== SOCIAL PROOF ===================== */
function startNotifications() {
  const names = ['أحمد', 'سارة', 'فهد', 'منيرة', 'خالد', 'نورة', 'عبدالله', 'رنا', 'محمد', 'هند', 'يوسف', 'ريم'];
  const cities = ['الرياض', 'جدة', 'الدمام', 'مكة', 'المدينة', 'الخبر', 'أبها', 'تبوك', 'بريدة'];
  const prods = products.map(p => p.name);
  const show = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const prod = prods[Math.floor(Math.random() * prods.length)];
    document.getElementById('notif-text').textContent = `${name} من ${city} اشترى للتو`;
    document.getElementById('notif-product').textContent = prod;
    const notif = document.getElementById('notification');
    notif.classList.add('show');
    setTimeout(() => { notif.classList.remove('show'); setTimeout(show, Math.random() * 10000 + 8000); }, 4500);
  };
  setTimeout(show, 6000);
}

/* ===================== GLOBAL HELPERS ===================== */
window.scrollToSec = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.resetApp = () => {
  searchQ = '';
  selectedCat = 'الكل';
  view = 'all';
  sortVal = 'default';
  document.getElementById('search-inp').value = '';
  document.getElementById('search-clear').classList.remove('visible');
  document.getElementById('sort-select').value = 'default';
  document.querySelectorAll('.cat-card').forEach(p => p.classList.toggle('active', p.dataset.cat === 'الكل'));
  renderProducts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addToCart = addToCart;
window.buyWA = buyWA;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.toggleWL = toggleWL;
window.openModal = openModal;
window.openQuickView = openQuickView;
window.closeQuick = closeQuick;
window.closeCartDrawer = closeCartDrawer;
window.openCartDrawer = openCartDrawer;
window.changeModalQty = changeModalQty;
window.closeMobileNav = closeMobileNav;
window.applyCoupon = applyCoupon;
