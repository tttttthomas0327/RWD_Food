$(document).ready(function () {
    $('.burger').click(function (event) {
        event.preventDefault();
        $('.menu-list').toggleClass("menu-list-open");
      });
})