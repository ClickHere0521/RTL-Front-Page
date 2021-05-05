$(function () {
  $("#side-menu").metisMenu();
});

// Loads the correct sidebar on window load,
// collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {
  $(window).bind("load resize", function () {
    topOffset = 50;
    width =
      this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width;
    if (width < 768) {
      $("div.navbar-collapse").addClass("collapse");
      topOffset = 100; // 2-row-menu
    } else {
      $("div.navbar-collapse").removeClass("collapse");
    }

    height =
      (this.window.innerHeight > 0
        ? this.window.innerHeight
        : this.screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
      $("#page-wrapper").css("min-height", height + "px");
    }
  });

  var url = window.location;
  var element = $("ul.nav a")
    .filter(function () {
      return this.href == url || url.href.indexOf(this.href) == 0;
    })
    .addClass("active")
    .parent()
    .parent()
    .addClass("in")
    .parent();
  if (element.is("li")) {
    element.addClass("active");
  }
});
var flag = true;

$("#btn1").click(function () {
  $("#btn1").css({ "background-color": "#485272", color: "white" });
  $("#btn2").css({ "background-color": "#bfc5d2", color: "#78849e" });
  $("#content1").css("display", "block");
  $("#content2").css("display", "none");
  $("#content3").css("display", "none");
  flag=true;
});

$("#btn2").click(function () {
  $("#btn2").css({ "background-color": "#485272", color: "white" });
  $("#btn1").css({ "background-color": "#bfc5d2", color: "#78849e" });
  $("#checkbox-2").css("display", "none");
  $("#checkbox-1").css("display", "block");
  $("#content1").css("display", "none");
  $("#content2").css("display", "block");
  $("#content3").css("display", "none");
  flag=false;
});

$("#forgot-name").click(function () {
  $(".cus-input-1").attr("placeholder", "תעודת זהות");
  $(".cus-input-2").attr("placeholder", "תאריך לידה");
  $(".cus-input-3").attr("placeholder", "מספר חשבון");
  $(".btn-confirm-2").css("display", "block");
  $(".checkbox").css("display", "none");
  $(".cus-panel-header-1").css("display", "block");
  $(".cus-panel-header-2").css("display", "none");
  $(".forgot-name").css("display", "none");
  $(".p-2").css("display", "none");
  $(".cus-form-1").css("margin-bottom", "31px");
  $(".cus-form-3").css("margin-bottom", "31px");
});

$(".btn-confirm-2").click(function () {
  $(".cus-input-1").attr("placeholder", "שם משתמש");
  $(".cus-input-2").attr("placeholder", "תעודת זהות");
  $(".cus-input-3").attr("placeholder", "סיסמה");
  $(".btn-confirm-2").css("display", "none");
  $(".checkbox").css("display", "block");
  $(".cus-panel-header-1").css("display", "none");
  $(".cus-panel-header-2").css("display", "block");
  $(".forgot-name").css("display", "block");
  $(".p-2").css("display", "block");
  $(".cus-form-1").css("margin-bottom", "0px");
  $(".cus-form-3").css("margin-bottom", "0px");
});

$(".btn-confirm").click(function () {
  if(flag) {
    $("#checkbox-2").css("display", "block");
    $("#checkbox-1").css("display", "none");
  }
  $("#content3").css("display", "block");
  $("#content1").css("display", "none");
  $("#content2").css("display", "none");
});

$("#das-btn-1").click(function () {
  $("#das-btn-1").css({"background-color": "#1E87F0", "color": "#FFFFFF"});
  $("#das-btn-2").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-3").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-4").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-5").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-spn-1").css({"color": "#FFFFFF"});
  $("#das-btn-spn-2").css({"color": "#515151"});
  $("#das-btn-spn-3").css({"color": "#515151"});
  $("#das-btn-spn-4").css({"color": "#515151"});
  $("#das-btn-spn-5").css({"color": "#515151"});
  $("#das-cnt-1").css({"display": "block"});
  $("#das-cnt-2").css({"display": "none"});
  $("#das-cnt-3").css({"display": "none"});
  $("#das-cnt-4").css({"display": "none"});
  $("#das-cnt-5").css({"display": "none"});
});

$("#das-btn-2").click(function () {
  $("#das-btn-1").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-2").css({"background-color": "#1E87F0", "color": "#FFFFFF"});
  $("#das-btn-3").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-4").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-5").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-spn-1").css({"color": "#515151"});
  $("#das-btn-spn-2").css({"color": "#FFFFFF"});
  $("#das-btn-spn-3").css({"color": "#515151"});
  $("#das-btn-spn-4").css({"color": "#515151"});
  $("#das-btn-spn-5").css({"color": "#515151"});
  $("#das-cnt-1").css({"display": "none"});
  $("#das-cnt-2").css({"display": "block"});
  $("#das-cnt-3").css({"display": "none"});
  $("#das-cnt-4").css({"display": "none"});
  $("#das-cnt-5").css({"display": "none"});
});

$("#das-btn-3").click(function () {
  $("#das-btn-1").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-2").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-3").css({"background-color": "#1E87F0", "color": "#FFFFFF"});
  $("#das-btn-4").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-5").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-spn-1").css({"color": "#515151"});
  $("#das-btn-spn-2").css({"color": "#515151"});
  $("#das-btn-spn-3").css({"color": "#FFFFFF"});
  $("#das-btn-spn-4").css({"color": "#515151"});
  $("#das-btn-spn-5").css({"color": "#515151"});
  $("#das-cnt-1").css({"display": "none"});
  $("#das-cnt-2").css({"display": "none"});
  $("#das-cnt-3").css({"display": "block"});
  $("#das-cnt-4").css({"display": "none"});
  $("#das-cnt-5").css({"display": "none"});
});

$("#das-btn-4").click(function () {
  $("#das-btn-1").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-2").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-3").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-4").css({"background-color": "#1E87F0", "color": "#FFFFFF"});
  $("#das-btn-5").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-spn-1").css({"color": "#515151"});
  $("#das-btn-spn-2").css({"color": "#515151"});
  $("#das-btn-spn-3").css({"color": "#515151"});
  $("#das-btn-spn-4").css({"color": "#FFFFFF"});
  $("#das-btn-spn-5").css({"color": "#515151"});
  $("#das-cnt-1").css({"display": "none"});
  $("#das-cnt-2").css({"display": "none"});
  $("#das-cnt-3").css({"display": "none"});
  $("#das-cnt-4").css({"display": "block"});
  $("#das-cnt-5").css({"display": "none"});
});

$("#das-btn-5").click(function () {
  $("#das-btn-1").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-2").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-3").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-4").css({"background-color": "#FFFFFF", "color": "#1E87F0"});
  $("#das-btn-5").css({"background-color": "#1E87F0", "color": "#FFFFFF"});
  $("#das-btn-spn-1").css({"color": "#515151"});
  $("#das-btn-spn-2").css({"color": "#515151"});
  $("#das-btn-spn-3").css({"color": "#515151"});
  $("#das-btn-spn-4").css({"color": "#515151"});
  $("#das-btn-spn-5").css({"color": "#FFFFFF"});
  $("#das-cnt-1").css({"display": "none"});
  $("#das-cnt-2").css({"display": "none"});
  $("#das-cnt-3").css({"display": "none"});
  $("#das-cnt-4").css({"display": "none"});
  $("#das-cnt-5").css({"display": "block"});
});
$('.crm-btn-dismiss').click(function () {
  $(".crm-modal").css({"display": "none"});
  $("#crm-modal-back").css({"display": "none"});
});
$('.crm-btn-submit').click(function () {
  $(".crm-modal").css({"display": "none"});
  $("#crm-modal-back").css({"display": "none"});
});
$("#crm-sms").click(function () {
  $(".crm-modal").css({"display": "block"});
  $("#crm-modal-back").css({"display": "block"});
  $(".crm-side-modal-container").css({"display": "none"});
  $(".crm-side-modal-container4").css({"display": "none"});
  $(".crm-side-modal-container2").css({"display": "block"});
  $(".crm-side-modal-container3").css({"display": "none"});
})
$("#crm-apt").click(function () {
  $(".crm-modal").css({"display": "block"});
  $("#crm-modal-back").css({"display": "block"});
  $(".crm-side-modal-container").css({"display": "none"});
  $(".crm-side-modal-container2").css({"display": "none"});
  $(".crm-side-modal-container3").css({"display": "block"});
  $(".crm-side-modal-container4").css({"display": "none"});
})
$(".crm-hover-modal").mouseover(function () {
  $(".crm-hover-modal-container").css({"background-color": "white", "border-radius": "10px", "box-shadow": "0px 1px 5px rgb(0 0 0 / 30%)"});
  $(".crm-hover-modal-inputs").css({"opacity": "1"});
});
$(".crm-hover-modal").mouseout(function () {
  $(".crm-hover-modal-container").css({"background-color": "transparent", "border-radius": "0", "box-shadow": "0px 1px 5px rgb(0 0 0 / 0%)"});
  $(".crm-hover-modal-inputs").css({"opacity": "0"});
});
$('.crm-btn-add').click(function () {
  $(".crm-modal").css({"display": "block"});
  $("#crm-modal-back").css({"display": "block"});
  $(".crm-side-modal-container").css({"display": "block"});
  $(".crm-side-modal-container2").css({"display": "none"});
  $(".crm-side-modal-container3").css({"display": "none"});
  $(".crm-side-modal-container4").css({"display": "none"});
});

