// Preloader
$("#status").fadeOut();
$("#preloader").delay(350).fadeOut("slow");
$("body").delay(350).css({ overflow: "visible" });

// Sticky navbar
$(window).on("scroll", function () {
  $(window).scrollTop() >= 50
    ? $(".sticky").addClass("stickyadd")
    : $(".sticky").removeClass("stickyadd");
});

// Smooth scroll for nav links
$(".navbar-nav a, .scroll_down a").on("click", function (e) {
  var t = $(this);
  var target = t.attr("href");
  if (target && target.charAt(0) === "#" && $(target).length) {
    $("html, body").stop().animate({ scrollTop: $(target).offset().top - 60 }, 1200, "easeInOutExpo");
    e.preventDefault();
  }
});

// Active nav highlight on scroll
var sections = $("section[id]");
$(window).on("scroll.nav", function () {
  var scrollPos = $(this).scrollTop() + 80;
  sections.each(function () {
    var id = $(this).attr("id");
    var top = $(this).offset().top;
    var bottom = top + $(this).outerHeight();
    if (scrollPos >= top && scrollPos < bottom) {
      $(".navbar-nav .nav-item").removeClass("active");
      $(".navbar-nav a[href='#" + id + "']").closest(".nav-item").addClass("active");
    }
  });
});

// Counter animation (fires once when #counter scrolls into view)
var counterFired = false;
$(window).on("scroll.counter", function () {
  if (counterFired) return;
  if (!$("#counter").length) return;
  var counterTop = $("#counter").offset().top - window.innerHeight + 100;
  if ($(window).scrollTop() > counterTop) {
    $(".stat-value[data-count]").each(function () {
      var $el = $(this);
      var target = parseInt($el.attr("data-count"), 10);
      $({ val: 0 }).animate({ val: target }, {
        duration: 2000,
        easing: "swing",
        step: function () { $el.text(Math.floor(this.val)); },
        complete: function () { $el.text(target); }
      });
    });
    counterFired = true;
  }
});

// Owl Carousel
$("#owl-demo").owlCarousel({
  autoPlay: 7000,
  stopOnHover: true,
  navigation: false,
  paginationSpeed: 1000,
  singleItem: true,
  autoHeight: true
});

// Back to top button
$(window).on("scroll.top", function () {
  $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut();
});
$(".back_top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});