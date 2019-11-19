$(document).ready(function() {
  $("#contentTopPart").hide();

  $("#closeButton").click(function() {
    $("#sidebar-row").hide();
    $("#contentTopPart").show();
    $("#contentBody").addClass("col-xl-12");
  });

  $("#contentTopPart").click(function() {
    $("#sidebar-row").show();
    $("#contentTopPart").hide();
    $("#contentBody").removeClass("col-xl-12");
  });

  $(".menuitem-nav-link").click(function() {
    $(".menuitem-nav-link").removeClass("active");
    $(this).addClass("active");
  });

  getResolution();
});

var header = document.getElementById("contentTopPart");
var sticky = header.offsetTop;

window.onscroll = function() {
  // console.log($("header").height());
  if (window.pageYOffset > $("header").height()) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

window.onresize = getResolution;


function getResolution() {
  // console.log(window.innerWidth);
  if (window.innerWidth < 1200) {
    document.getElementById("sidebar-row").classList.add("sidebar-row-tablet");
    document.getElementById("sidebar-row").style.height = $("#contentBody").height()+"px";
    console.log($("#contentBody").height());
    // document.getElementById("sidebar-row-ul").classList.add("sidebar-row-ul-tablet");
    // document.getElementById("sidebar-row").classList.remove("bg-light");
  } else {
    document.getElementById("sidebar-row").classList.remove("sidebar-row-tablet");
    // document.getElementById("sidebar-row").classList.remove("sidebar-row-ul-tablet");
  }
}
