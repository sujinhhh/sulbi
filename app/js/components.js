// components =================================
// Nav
document.querySelector(
  "header"
).innerHTML = `<div class="overlay has-fade"></div>
<nav class="container--pall flex flex-jc-sb flex-ai-c ">
  <a href="/" class="header__logo">
    <img src="images/logo.svg" alt="Easybank" />
  </a>
  <a href="#" id="btnHamberger" class="header__toggle hide-for-desktop">
    <span></span>
    <span></span>
    <span></span>
  </a>
  <div class="header__links hide-for-mobile font-md">
    <a href="#" class="home">Home</a>
    <a href="about.html" class="about">About</a>
    <a href="project.html" class="contact">Project</a>
    <a href="event.html" class="blog">Promtion/Event</a>
    <a href="#">Careers</a>
  </div>
  <a href="#" class="button header__cta hide-for-mobile"
    >Request Invite</a
  >
</nav>
<div class="header__menu has-fade">
  <a href="#" class="home font-lg">Home</a>
  <a href="about.html" class="about">About</a>
  <a href="project.html" class="contact">Project</a>
  <a href="event.html">Promtion/Event</a>
  <a href="">Contact</a>
</div>`;

// Footer

document.querySelector("footer").innerHTML = `<div class="footer container">

  <a class="footer__logo" href="#">
    <img src="/images/logo-footer.svg" alt="" />
  </a>
  <div class="footer__social">
    <a href="#"><img src="/images/icon-facebook.svg" alt="" /></a>
    <a href="#"><img src="/images/icon-youtube.svg" alt="" /></a>
    <a href="#"><img src="/images/icon-twitter.svg" alt="" /></a>
    <a href="#"><img src="/images/icon-instagram.svg" alt="" /></a>
    <a href="#"><img src="/images/icon-pinterest.svg" alt="" /></a>
  </div>

  <div class="footer__links col1">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Project</a>
  </div>
  <div class="footer__links col2">
    <a href="">Contact</a>
    <a href="">Blog</a>
    <a href="">Privacy Policy</a>
  </div>
  <div class="footer__cta">
    <a href="#" class="button">문의하기</a>
  </div>
  <div class="footer__copyright">
    &copy;Busan Guko Sulbi. All Rights Reserved.
  </div> </div>`;
