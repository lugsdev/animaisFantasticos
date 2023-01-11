function animaisFantasticos() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
animaisFantasticos();

function faq() {
  const faqLista = document.querySelectorAll(".js-faq dt");
  if (faqLista.length) {
    faqLista[0].nextElementSibling.classList.add("ativo");

    function activeAccordion(event) {
      this.nextElementSibling.classList.toggle("ativo");
    }

    faqLista.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
faq();

function scrollSmooth() {
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
scrollSmooth();

function scrollAnimation() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowSize = window.innerHeight * 0.65;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowSizeAnima = sectionTop - windowSize < 0;
        if (windowSizeAnima) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
scrollAnimation();
