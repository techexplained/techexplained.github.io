$(document).ready(function() {
  $("#contentTopPart").hide();

  $("#closeButton").click(function() {
    $("#sidebar-row").hide();
    $("#contentTopPart").show();
    $("#contentBody").addClass("col-md-12");
  });

  $("#contentTopPart").click(function() {
    $("#sidebar-row").show();
    $("#contentTopPart").hide();
    $("#contentBody").removeClass("col-md-12");
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
  if (window.innerWidth < 800) {
    document.getElementById("sidebar-row").classList.add("sidebar-row-tablet");
    var totalHeight = $(".contentMiddlePart").height() + $(".contentTopPart").height();
    document.getElementById("sidebar-row").style.height = totalHeight +"px";
    var rowHeight = $(".contentMiddlePart").height();
    if ($(window).height() > rowHeight) {
      document.getElementById("myFooter").style.position = "absolute";
    }
    else {
      document.getElementById("myFooter").style.position = "relative";
    }
  } else {
    document.getElementById("sidebar-row").classList.remove("sidebar-row-tablet");
  }
}
