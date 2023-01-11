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
