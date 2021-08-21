(function () {
  var current = location.pathname;
  $("#navbar ul li a").each(function () {
    var $this = $(this);

    if ($this.attr("href") === current) {
      $this.addClass("active");
    }
  });
})();
