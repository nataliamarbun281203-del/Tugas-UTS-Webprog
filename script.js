/* ============================================================
   MIE AYAM YAMIN — script.js
============================================================ */

/* ── DATA ── */
const menuData = {
  mie: [
    {
      emoji: "🍜",
      name: "Mie Ayam Yamin Original",
      desc: "Mie tarik segar, ayam berbumbu khas, saus yamin rahasia, bakso kecil, daun bawang & bawang goreng.",
      price: "Rp 15.000",
      popular: true,
    },
    {
      emoji: "🍜",
      name: "Mie Ayam Spesial",
      desc: "Porsi double ayam, tambahan ceker empuk, telur rebus, dan sambal ekstra pedas nikmat.",
      price: "Rp 20.000",
      popular: true,
    },
    {
      emoji: "🍜",
      name: "Mie Ayam Jumbo",
      desc: "Porsi XL untuk yang benar-benar lapar. Mie ganda, ayam berlimpah, kuah panas gurih.",
      price: "Rp 25.000",
      popular: false,
    },
    {
      emoji: "🍲",
      name: "Mie Ayam Kuah Kaldu",
      desc: "Untuk pecinta kuah — mie dengan siraman kaldu ayam kental rempah yang menghangatkan.",
      price: "Rp 17.000",
      popular: false,
    },
    {
      emoji: "🍜",
      name: "Mie Ayam Pangsit",
      desc: "Mie ayam yamin komplit dengan pangsit goreng renyah dan pangsit kuah yang lembut.",
      price: "Rp 18.000",
      popular: true,
    },
    {
      emoji: "🌶️",
      name: "Mie Ayam Pedas Level 5",
      desc: "Tantangan sejati — mie ayam yamin dengan sambal level 5 yang bikin nagih dan berkeringat.",
      price: "Rp 16.000",
      popular: false,
    },
  ],
  minuman: [
    {
      emoji: "🧋",
      name: "Es Teh Manis",
      desc: "Teh hitam premium diseduh panas, disajikan dingin dengan es batu segar. Klasik dan sempurna.",
      price: "Rp 5.000",
      popular: true,
    },
    {
      emoji: "🥤",
      name: "Es Jeruk Peras",
      desc: "Jeruk manis segar diperas langsung di depan Anda. Menyegarkan setelah semangkuk mie panas.",
      price: "Rp 7.000",
      popular: false,
    },
    {
      emoji: "🍵",
      name: "Teh Tarik Hangat",
      desc: "Teh susu hangat dikocok hingga berbusa. Cocok untuk teman sarapan mie ayam pagi hari.",
      price: "Rp 8.000",
      popular: false,
    },
    {
      emoji: "🥛",
      name: "Es Susu Cokelat",
      desc: "Susu segar + cokelat bubuk premium + es batu. Favorit anak-anak dan yang muda di hati.",
      price: "Rp 10.000",
      popular: false,
    },
    {
      emoji: "🫙",
      name: "Air Mineral",
      desc: "Air mineral botol 600ml untuk menemani makan Anda.",
      price: "Rp 4.000",
      popular: false,
    },
    {
      emoji: "🍹",
      name: "Es Cincau Hijau",
      desc: "Cincau hijau segar dalam es gula merah — minuman tradisional yang menyegarkan dan menyehatkan.",
      price: "Rp 7.000",
      popular: true,
    },
  ],
  tambahan: [
    {
      emoji: "🥟",
      name: "Pangsit Goreng (5 pcs)",
      desc: "Pangsit isi daging ayam cincang berbumbu, digoreng hingga kulit renyah keemasan sempurna.",
      price: "Rp 8.000",
      popular: true,
    },
    {
      emoji: "🍢",
      name: "Bakso Sapi (3 pcs)",
      desc: "Bakso sapi kenyal dengan isi daging padat. Tambahan sempurna untuk mie ayam Anda.",
      price: "Rp 7.000",
      popular: false,
    },
    {
      emoji: "🍳",
      name: "Telur Rebus",
      desc: "Telur ayam kampung direbus sempurna — kuning matang, putih lembut, pelengkap protein.",
      price: "Rp 3.000",
      popular: false,
    },
    {
      emoji: "🦵",
      name: "Ceker Ayam (2 pcs)",
      desc: "Ceker ayam kampung dimasak empuk dalam bumbu kecap bawang yang meresap sempurna.",
      price: "Rp 5.000",
      popular: true,
    },
    {
      emoji: "🌶️",
      name: "Sambal Extra",
      desc: "Sambal merah atau hijau khas kami — tingkat kepedasan bisa disesuaikan sesuai selera.",
      price: "Rp 2.000",
      popular: false,
    },
    {
      emoji: "🧅",
      name: "Bawang Goreng",
      desc: "Bawang merah goreng renyah buatan sendiri. Topping wajib untuk menambah cita rasa autentik.",
      price: "Rp 2.000",
      popular: false,
    },
  ],
};

const ulasanData = [
  {
    stars: 5,
    text: "Sudah langganan hampir 3 tahun. Rasanya konsisten enak dari dulu sampai sekarang. Saus yaminnya itu yang bikin beda dari mie ayam lain — gurih manis pas banget!",
    name: "Budi Santoso",
    via: "via Google Maps",
    avatar: "😊",
  },
  {
    stars: 5,
    text: "Porsinya gede banget untuk harganya yang murah. Ayamnya banyak dan empuk, baksonya kenyal. Pangsit gorengnya kriuk! Wajib coba kalau lagi di Bekasi Timur.",
    name: "Siti Rahayu",
    via: "via GoFood",
    avatar: "🥰",
  },
  {
    stars: 5,
    text: "Sarapan favorit keluarga kami setiap Minggu pagi. Anak-anak suka banget, suami juga. Tempatnya bersih, pelayanannya ramah, dan masaknya cepat.",
    name: "Dewi Kusuma",
    via: "via GrabFood",
    avatar: "👩",
  },
  {
    stars: 5,
    text: "Mie ayam terenak di Bekasi versi saya. Kuah kaldunya kental dan wangi sekali. Sudah beberapa kali pesan via ojek online, selalu sampai panas dan enak.",
    name: "Rizki Pratama",
    via: "via Google Maps",
    avatar: "👨",
  },
  {
    stars: 5,
    text: "Harga Rp 15.000 tapi rasa kayak restoran mahal. Level pedasnya bisa request dan pak penjualnya sabar banget. Ini mie ayam terbaik Bekasi Timur!",
    name: "Aisyah Nurul",
    via: "via ShopeeFood",
    avatar: "👩‍🦱",
  },
  {
    stars: 5,
    text: "Tempatnya di pinggir jalan tapi soal rasa jangan tanya! Mie tarik segar, ayam bumbunya meresap, dan saus yaminnya bikin nagih. Nonstop balik lagi!",
    name: "Hendra Gunawan",
    via: "via Google Maps",
    avatar: "🧔",
  },
];

/* ── LOADER ── */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  }, 1800);
});

/* ── NAVBAR ── */
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("is-solid", window.scrollY > 60);
});

function toggleMenu(open) {
  navMenu.classList.toggle("open", open);
  navToggle.classList.toggle("open", open);
  navOverlay.classList.toggle("show", open);
  document.body.style.overflow = open ? "hidden" : "";
}

navToggle.addEventListener("click", () =>
  toggleMenu(!navMenu.classList.contains("open")),
);
navOverlay.addEventListener("click", () => toggleMenu(false));
navMenu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

/* ── HERO PARTICLES ── */
(function spawnParticles() {
  const container = document.getElementById("heroParticles");
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = 6 + Math.random() * 20;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${10 + Math.random() * 16}s;
      animation-delay:${Math.random() * 10}s;
      opacity:${0.05 + Math.random() * 0.15};
    `;
    container.appendChild(p);
  }
})();

/* ── COUNTER ANIMATION ── */
function animateCounter(el) {
  const target = parseFloat(el.dataset.to);
  const suffix = el.dataset.suffix || "";
  const duration = 1800;
  const start = performance.now();
  const isDecimal = String(target).includes(".");

  function step(now) {
    const elapsed = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - elapsed, 3);
    const val = target * ease;
    el.textContent = isDecimal
      ? val.toFixed(1)
      : Math.floor(val).toLocaleString("id-ID");
    if (elapsed < 1) requestAnimationFrame(step);
    else
      el.textContent = isDecimal
        ? target.toFixed(1)
        : target.toLocaleString("id-ID");
  }
  requestAnimationFrame(step);
  // append suffix to parent b element's next sibling isn't great;
  // suffix already rendered in HTML span next to .counter
}

/* ── INTERSECTION OBSERVER ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add("is-visible"), +delay);
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll("[data-reveal]")
  .forEach((el) => revealObserver.observe(el));

// Counters
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 },
);

document
  .querySelectorAll(".counter")
  .forEach((el) => counterObserver.observe(el));

/* ── MENU TABS ── */
const menuGrid = document.getElementById("menuGrid");
let currentTab = "mie";

function renderMenu(tab) {
  const items = menuData[tab];
  menuGrid.innerHTML = "";
  items.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `
      <div class="menu-card-top">
        <span class="menu-card-emoji">${item.emoji}</span>
        ${item.popular ? '<span class="menu-popular">⭐ Terlaris</span>' : ""}
      </div>
      <div class="menu-card-name">${item.name}</div>
      <div class="menu-card-desc">${item.desc}</div>
      <div class="menu-card-footer">
        <span class="menu-card-price">${item.price}</span>
        <button class="menu-card-order" onclick="orderItem('${item.name}', '${item.price}')">+ Pesan</button>
      </div>
    `;
    menuGrid.appendChild(card);
    // Staggered reveal
    setTimeout(() => card.classList.add("show"), 60 + i * 70);
  });
}

window.orderItem = function (name, price) {
  const msg = encodeURIComponent(
    `Halo, saya mau pesan: *${name}* (${price}). Mohon konfirmasinya, terima kasih!`,
  );
  window.open(`https://wa.me/6287877062868?text=${msg}`, "_blank");
};

document.querySelectorAll(".mtab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".mtab").forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    this.classList.add("active");
    this.setAttribute("aria-selected", "true");
    currentTab = this.dataset.tab;
    renderMenu(currentTab);
  });
});

renderMenu("mie");

/* ── ULASAN SLIDER ── */
const track = document.getElementById("ulasanTrack");
const dotsContainer = document.getElementById("sliderDots");
let slideIndex = 0;
let slidesPerView = getSlidesPerView();
let autoSlide;

function getSlidesPerView() {
  return window.innerWidth < 560 ? 1 : window.innerWidth < 900 ? 2 : 3;
}

function buildSlider() {
  track.innerHTML = "";
  dotsContainer.innerHTML = "";
  ulasanData.forEach((r) => {
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-stars">${"★".repeat(r.stars)}</div>
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <div class="review-avatar">${r.avatar}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-via">${r.via}</div>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  const totalDots = ulasanData.length - slidesPerView + 1;
  for (let i = 0; i < Math.max(totalDots, 1); i++) {
    const dot = document.createElement("div");
    dot.className = "sdot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  goToSlide(0);
}

function getCardWidth() {
  const card = track.querySelector(".review-card");
  return card ? card.offsetWidth + 24 : 364;
}

function goToSlide(idx) {
  const max = ulasanData.length - slidesPerView;
  slideIndex = Math.max(0, Math.min(idx, max));
  track.style.transform = `translateX(-${slideIndex * getCardWidth()}px)`;
  document
    .querySelectorAll(".sdot")
    .forEach((d, i) => d.classList.toggle("active", i === slideIndex));
}

document.getElementById("sliderPrev").addEventListener("click", () => {
  goToSlide(
    slideIndex - 1 < 0 ? ulasanData.length - slidesPerView : slideIndex - 1,
  );
  resetAuto();
});
document.getElementById("sliderNext").addEventListener("click", () => {
  goToSlide(
    slideIndex + 1 > ulasanData.length - slidesPerView ? 0 : slideIndex + 1,
  );
  resetAuto();
});

function startAuto() {
  autoSlide = setInterval(() => {
    goToSlide(
      slideIndex + 1 > ulasanData.length - slidesPerView ? 0 : slideIndex + 1,
    );
  }, 4500);
}
function resetAuto() {
  clearInterval(autoSlide);
  startAuto();
}

buildSlider();
startAuto();

window.addEventListener("resize", () => {
  const newSpv = getSlidesPerView();
  if (newSpv !== slidesPerView) {
    slidesPerView = newSpv;
    buildSlider();
    resetAuto();
  }
});

// Touch / Swipe
let touchStartX = 0;
track.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.touches[0].clientX;
  },
  { passive: true },
);
track.addEventListener("touchend", (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? goToSlide(slideIndex + 1) : goToSlide(slideIndex - 1);
    resetAuto();
  }
});

/* ── PROMO TIMER ── */
function updateTimer() {
  const now = new Date();
  // Promo ends at 14:00 today; if past, count to tomorrow's 14:00
  let end = new Date(now);
  end.setHours(14, 0, 0, 0);
  if (now >= end) {
    end.setDate(end.getDate() + 1);
    end.setHours(10, 0, 0, 0); // next day promo starts
  }
  const diff = Math.max(0, end - now);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById("tHour").textContent = String(h).padStart(2, "0");
  document.getElementById("tMin").textContent = String(m).padStart(2, "0");
  document.getElementById("tSec").textContent = String(s).padStart(2, "0");
}
updateTimer();
setInterval(updateTimer, 1000);

/* ── STORE OPEN/CLOSE STATUS ── */
function updateStatus() {
  const badge = document.getElementById("statusBadge");
  if (!badge) return;
  const now = new Date();
  const h = now.getHours();
  const day = now.getDay(); // 0=Sun, 6=Sat
  let close = 21;
  if (day === 6) close = 22;
  if (day === 0) close = 20;
  const isOpen = h >= 7 && h < close;
  badge.className = "status-badge " + (isOpen ? "open" : "closed");
  badge.textContent = isOpen ? "🟢 Sedang Buka Sekarang" : "🔴 Sedang Tutup";
}
updateStatus();

/* ── SMOOTH NAV ACTIVE STATE ── */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = "";
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.style.color = "var(--amber)";
          }
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((s) => sectionObserver.observe(s));

/* ── ORDER TOAST ── */
(function setupToast() {
  const toast = document.createElement("div");
  toast.id = "toast";
  toast.style.cssText = `
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(80px);
    background: #1C0F00; color: #FFF9F2;
    padding: 13px 24px; border-radius: 50px;
    font-size: 0.85rem; font-weight: 500;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    z-index: 9998; pointer-events: none;
    transition: transform 0.35s ease, opacity 0.35s ease;
    opacity: 0; white-space: nowrap;
    border: 1.5px solid rgba(212,117,30,0.4);
  `;
  document.body.appendChild(toast);

  window.showToast = function (msg) {
    toast.textContent = msg;
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";
    }, 3000);
  };
})();

/* ── KEYBOARD ACCESSIBILITY ── */
document.querySelectorAll(".menu-card-order").forEach((btn) => {
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") btn.click();
  });
});

console.log(
  "%c🍜 Mie Ayam Yamin — Bekasi Timur",
  "color:#D4751E;font-size:18px;font-weight:bold;",
);
console.log(
  "%cDibuat dengan ❤️ dan semangkuk mie yamin terbaik!",
  "color:#F0B429;font-size:12px;",
);
