// Footer year (works on index.html and blog.html)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================
   Active nav link on scroll (index only)
   ========================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
  if (!navLinks.length) return;
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
}
window.addEventListener("scroll", setActiveLink);
setActiveLink();

/* =========================
   BLOG LISTING (index + blog.html)
   ========================= */
const blogPosts = [
  {
    id: 1,
    title: "Trustworthy AI: Building Artificial Intelligence We Can Rely On",
    date: "2026-02-10",
    readTime: "8 min read",
    tags: ["Responsible AI", "Machine Learning", "Ethics"],
    excerpt: "Key insights from Trustworthy AI and how I apply fairness, transparency, accountability, and human-centered design in my projects.",
    url: "blog/trustworthy-ai.html"
  }
];

// Derived tags
const allTags = ["All", ...Array.from(new Set(blogPosts.flatMap(p => p.tags))).sort()];

const blogGrid = document.getElementById("blogGrid");
const blogFilters = document.getElementById("blogFilters");

let activeTag = "All";

function renderFilters() {
  if (!blogFilters) return;
  blogFilters.innerHTML = "";

  allTags.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = `filter-btn ${tag === activeTag ? "active" : ""}`;
    btn.textContent = tag;
    btn.addEventListener("click", () => {
      activeTag = tag;
      renderFilters();
      renderPosts();
    });
    blogFilters.appendChild(btn);
  });
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function renderPosts() {
  if (!blogGrid) return;

  const filtered = activeTag === "All"
    ? blogPosts
    : blogPosts.filter(p => p.tags.includes(activeTag));

  blogGrid.innerHTML = "";

  filtered.forEach(post => {
    const card = document.createElement("article");
    card.className = "blog-card";

    card.innerHTML = `
      <div class="blog-meta">
        <span><i class="fa-regular fa-calendar"></i> ${formatDate(post.date)}</span>
        <span>${post.readTime}</span>
      </div>

      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-excerpt">${post.excerpt}</p>

      <div class="blog-footer">
        <a class="read-link" href="${post.url}">
          Read <i class="fa-solid fa-arrow-right"></i>
        </a>
        <div class="blog-badges">
          ${post.tags.slice(0, 2).map(t => `<span class="blog-badge">${t}</span>`).join("")}
        </div>
      </div>
    `;

    blogGrid.appendChild(card);
  });
}

renderFilters();
renderPosts();

document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Emerging Data Scientist",
    "Machine Learning Enthusiast",
    "Responsible AI Advocate"
  ];

  const el = document.getElementById("rotating-text");
  if (!el) return;

  let i = 0;
  el.classList.add("is-in");

  const rotate = () => {
    el.classList.remove("is-in");
    el.classList.add("is-out");

    setTimeout(() => {
      i = (i + 1) % roles.length;
      el.textContent = roles[i];
      el.classList.remove("is-out");
      el.classList.add("is-in");
    }, 340);
  };

  // your timing (kept): 4000ms
  setInterval(rotate, 4000);
});


