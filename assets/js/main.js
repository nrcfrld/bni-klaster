$(document).ready(function () {
  $(window).scroll(function () {
    let scrollPosition = $(document).scrollTop();
    const scrollTopButton = $("#go-to-top");

    if (scrollPosition > 500) {
      $("#logo img").addClass("h-24px");
      scrollTopButton.fadeIn();
    } else {
      $("#logo img").removeClass("h-24px");
      scrollTopButton.fadeOut();
    }
  });

  $("#go-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
