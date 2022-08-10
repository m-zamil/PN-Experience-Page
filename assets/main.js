window.onload = function () {
  $(document).ready(function () {
    $(".carousel-1").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      center: true,
      stagePadding: 0,
      center: true,
      responsive: {
        0: {
          items: 1.2,
          stagePadding: 20,
        },
        960: {
          items: 3,
          margin: 30,
        },
      },
    });
  });
};
