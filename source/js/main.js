'use strict';

// Меню
var menuNav = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var body = document.querySelector('.body');
var navLink = document.querySelectorAll('.nav__link');

function changeMenuPosition() {
  menuNav.classList.toggle('nav--close');
  menuNav.classList.toggle('nav--open');
}

if (menuNav && navToggle) {
  menuNav.classList.remove('nav--nojs');

  navToggle.addEventListener('click', function () {
    changeMenuPosition();
    body.classList.toggle('body__js');
  });

  navLink.forEach(function (item) {
    item.addEventListener('click', function () {
      changeMenuPosition();
      body.classList.remove('body__js');
    });
  });

  changeMenuPosition();
}
