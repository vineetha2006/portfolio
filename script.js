
/* =========================
   SMOOTH SCROLL FOR NAV LINKS
========================= */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/* =========================
   HIGHLIGHT ACTIVE NAV LINK
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


/* =========================
   SIMPLE CONTACT FORM MESSAGE
========================= */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");

    form.reset();
  });
}


/* =========================
   SCROLL TO CONTACT BUTTON (OPTIONAL)
========================= */
function scrollToContact() {
  const contactSection = document.querySelector("#contact");
  contactSection.scrollIntoView({
    behavior: "smooth"
  });
}