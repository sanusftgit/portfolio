 window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
    AOS.init();
  });
  var typed = new Typed('.typed-text', {
    strings: ["Web-Developer", "UI/UX Designer", "Tech-Student"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });