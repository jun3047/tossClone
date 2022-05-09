window.addEventListener("scroll", function () {
  if (window.pageYOffset == 0) {
    document.querySelector("nav").style.boxShadow = null;
    console.debug("top");
  } else {
    document.querySelector("nav").style.boxShadow =
      "0 2px 4px 0 rgba(0,0,0,.2)";
    console.debug("shadow");
  }
});
