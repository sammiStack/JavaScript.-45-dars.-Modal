window.addEventListener("DOMContentLoaded", () => {
  // LOADER
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 1500);
  }, 2000);

  // TABS
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    headerParents = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  headerParents.addEventListener("click", (event) => {
    console.log(event);
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // MODAL
  const allModalBtn = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector("[data-close]");

  allModalBtn.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimer);
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  const modalTimer = setTimeout(openModal, 5000);

  function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }
  window.addEventListener("scroll", showMyModalByScroll);
});
