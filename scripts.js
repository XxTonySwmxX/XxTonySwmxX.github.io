const carousel = document.querySelector('.courses_carousel');
const nextBtn = document.querySelector('#controls_right_courses');
const prevBtn = document.querySelector('#controls_left_courses');
const itemWidth = carousel.querySelector('.horizontal_section').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
  carousel.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
}
function scrollToPrevItem() {
  carousel.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
}

const testimonials = document.querySelector('.testimonials_carousel');
const nextBtnTestim = document.querySelector('#controls_right_testim');
const prevBtnTestim = document.querySelector('#controls_left_testim');
const itemWidthTestim = testimonials.querySelector('.horizontal_section').clientWidth;

nextBtnTestim.addEventListener('click', () => {
  testimonials.scrollBy({ left: itemWidthTestim, top: 0, behavior: 'smooth' });
});
prevBtnTestim.addEventListener('click', () => {
  testimonials.scrollBy({ left: -itemWidthTestim, top: 0, behavior: 'smooth' });
});

const gallery = document.querySelector('.gallery_carousel');
const nextBtnGallery = document.querySelector('#controls_right_gallery');
const prevBtnGallery = document.querySelector('#controls_left_gallery');
const itemWidthGallery = gallery.querySelector('.horizontal_section').clientWidth;

nextBtnGallery.addEventListener('click', () => {
  gallery.scrollBy({ left: itemWidthGallery, top: 0, behavior: 'smooth' });
});
prevBtnGallery.addEventListener('click', () => {
  gallery.scrollBy({ left: -itemWidthGallery, top: 0, behavior: 'smooth' });
});

const nav = document.querySelector('nav');
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('show');
  navUL.classList.toggle('show');
  hamburger.classList.toggle('active');
});


const logo = document.getElementById("logo");
const sectionIntro = document.querySelector(".intro");




const sectionIntroOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionIntroObserver = new IntersectionObserver(function (
  entries,
  sectionIntroObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
      hamburger.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
      hamburger.classList.remove("nav-scrolled");
      nav.classList.remove('show');
      navUL.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
},
  sectionIntroOptions);

sectionIntroObserver.observe(sectionIntro);

const analytics = firebase.analytics();
analytics.setCurrentScreen(window.location.pathname) // sets `screen_name` parameter
analytics.logEvent('screen_view') // log event with `screen_name` parameter attached

// Reference messages collection
var db = firebase.firestore();


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.form-alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.form-alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  db.collection("contact").add({
    name: name,
    email: email,
    message: message
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

