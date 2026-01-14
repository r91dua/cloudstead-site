(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Theme toggle (persists)
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  const saved = localStorage.getItem("cloudstead_theme");
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
    if (themeIcon) themeIcon.textContent = saved === "light" ? "☀" : "☾";
  }

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("cloudstead_theme", next);
    if (themeIcon) themeIcon.textContent = next === "light" ? "☀" : "☾";
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  menuBtn?.addEventListener("click", () => {
    const isHidden = mobileNav?.hasAttribute("hidden");
    if (!mobileNav) return;
    if (isHidden) mobileNav.removeAttribute("hidden");
    else mobileNav.setAttribute("hidden", "");
  });

  // Close mobile nav on click
  mobileNav?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => mobileNav.setAttribute("hidden", ""));
  });

  // Fake submit (static)
  const fakeSubmit = document.getElementById("fakeSubmit");
  const formNote = document.getElementById("formNote");
  fakeSubmit?.addEventListener("click", () => {
    if (!formNote) return;
    formNote.textContent =
      "Thanks! This demo form is static. Plug in Netlify Forms, Formspree, or a serverless endpoint to receive messages.";
  });

  // Draft email button
  const emailBtn = document.getElementById("emailBtn");
  emailBtn?.addEventListener("click", (e) => {
    e.preventDefault();

   const adminEmail = "cloudsteadsolutions@gmail.com";

  const subject = encodeURIComponent("Cloudstead Solutions — Discovery Conversation Request");
  const body = encodeURIComponent(
`Hi Cloudstead Solutions team,

I’d like to start a discovery conversation.

Business name:
Primary location (if office-based):
Number of employees (office / remote):
What we need help with (in-office / cloud / monitoring / backups / custom):
Timeline:
Any current issues or constraints:

Best times to contact me:
Preferred contact method:

Thanks,
`
  );

  window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
  });
})();
