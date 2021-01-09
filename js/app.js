let imgSrc;
$(".small img").click(function () {
  imgSrc = $(this).attr("src");
  $(".parent .content img").fadeOut(500, function () {
    $(this).attr("src", imgSrc);
    $(this).fadeIn();
  });
});
