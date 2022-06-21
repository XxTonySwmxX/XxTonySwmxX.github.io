const openMenuIcon = document.getElementById("openMenu");
const closeMenuIcon = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const scrollTopButton = document.getElementById("scrollTopButton");
const scrollBottomButton = document.getElementById("scrollBottomButton");
const scrollGallery = document.getElementById("scrollGallery");
const navBarOptions = document.querySelectorAll(".navlink");
const contactLink = document.getElementById("contactLInk");
const dropdownDownArrow = document.querySelector(".nav-down-arrow");
const dropdownUpArrow = document.querySelector(".nav-up-arrow");
const dropdown = document.querySelector(".dropdown");
const dropdownOption = document.querySelectorAll(".dropdownOption");
let navBarOptionDelayNumber = 0.4;
let dropDownOpen = false;
const body = document.getElementsByTagName("body");

// setting up the particles
const callParticles = () => {
  window.onload = function () {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

    particlesJS.load(
      "particles-js",
      "assets/particles/particles.json",
      function () {
        console.log("callback - particles.js config loaded");
      }
    );
  };
};

// handle gallery scroll with arrows

const handleGalleryScroll = () => {
  scrollBottomButton.addEventListener("click", () => {
    try {
      scrollGallery.scroll({
        top: 300,
        behavior: "smooth",
      });

      scrollTopButton.classList.add("activeTopScroll");
      scrollBottomButton.classList.remove("activebottomScroll");
    } catch (e) {
      console.log(e);
    }
  });

  scrollTopButton.addEventListener("click", () => {
    try {
      scrollGallery.scroll({
        top: -300,
        behavior: "smooth",
      });

      scrollTopButton.classList.remove("activeTopScroll");
      scrollBottomButton.classList.add("activebottomScroll");
    } catch (e) {
      console.log(e);
    }
  });
};

// hidding navbar menu when clicking ancors

const hiddeMenu = () => {
  // open and close the menu

  openMenuIcon.addEventListener("click", () => {
    openMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";

    navBarOptions.forEach((op) => {
      navBarOptionDelayNumber += 0.1;
      op.classList.add("animated");
      op.style.animationDuration = `${navBarOptionDelayNumber}s`;
    });
    contactLink.classList.add("animated");
    contactLink.style.animationDuration = `${navBarOptionDelayNumber}s`;
    menu.classList.toggle("open");
  });

  closeMenuIcon.addEventListener("click", () => {
    closeMenuIcon.style.display = "none";
    openMenuIcon.style.display = "block";
    menu.classList.toggle("open");
    navBarOptionDelayNumber = 0.8;
    navBarOptions.forEach((op) => {
      op.classList.remove("animated");
      op.style.animationDuration = `${navBarOptionDelayNumber}s`;
    });

    contactLink.classList.remove("animated");
    contactLink.style.animationDuration = `${navBarOptionDelayNumber}s`;

    // hidde dropdown

    dropdown.classList.remove("open");
    dropdownDownArrow.classList.remove("open");

    dropdown.classList.remove("close");
    dropDownOpen = false;
  });

//   document.addEventListener("click", (e) => {
//     if (!dropdown.contains(e.target)) {
//       // hidde dropdown
//       alert("outside");
//       dropdown.classList.remove("open");
//       dropdownDownArrow.classList.remove("open");

//       dropdown.classList.remove("close");
//       dropDownOpen = false;
//     }
//   });

  //
  // close menu when clicking the ancors
  navBarOptions.forEach((op) => {
    op.addEventListener("click", () => {
      closeMenuIcon.style.display = "none";
      openMenuIcon.style.display = "block";
      menu.classList.toggle("open");
    });
  });
  // close menu when clicking the contact button

  contactLink.addEventListener("click", () => {
    closeMenuIcon.style.display = "none";
    openMenuIcon.style.display = "block";
    menu.classList.toggle("open");
  });
};

const openDropDown = () => {
  dropdownDownArrow.addEventListener("click", () => {
    if (screen.width < 940) {
      if (dropDownOpen) {
        dropdown.classList.add("close");
        dropdownDownArrow.classList.toggle("open");

        setTimeout(() => {
          dropdown.classList.remove("close");
          dropdownOption.forEach((option) => {
            option.classList.remove("open");
          });

          dropdown.classList.toggle("open");
        }, 500);
      } else {
        dropdownOption.forEach((option) => {
          option.classList.add("open");
        });
        dropdownDownArrow.classList.toggle("open");
        dropdown.classList.toggle("open");
      }
    } else {
      dropdownOption.forEach((option) => {
        option.classList.add("open");
      });
      dropdownDownArrow.classList.toggle("open");
      dropdown.classList.toggle("open");
    }

    dropDownOpen = !dropDownOpen;
  });
};

const main = () => {
  openDropDown();
  hiddeMenu();

  if ((scrollBottomButton, scrollTopButton)) {
    handleGalleryScroll();
  }
  callParticles();
};

main();



