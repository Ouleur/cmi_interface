/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Main js
 */

!function(e){"use strict";var t=function(){this.$body=e("body"),this.$wrapper=e("#wrapper"),this.$btnFullScreen=e("#btn-fullscreen"),this.$leftMenuButton=e(".button-menu-mobile"),this.$menuItem=e(".has_sub > a")};t.prototype.initSlimscroll=function(){e(".slimscrollleft").slimscroll({height:"auto",position:"right",size:"10px",color:"#9ea5ab"})},t.prototype.initLeftMenuCollapse=function(){var e=this;this.$leftMenuButton.on("click",function(t){t.preventDefault(),e.$body.toggleClass("fixed-left-void"),e.$wrapper.toggleClass("enlarged")})},t.prototype.initComponents=function(){e('[data-toggle="tooltip"]').tooltip(),e('[data-toggle="popover"]').popover()},t.prototype.initFullScreen=function(){var e=this;e.$btnFullScreen.on("click",function(e){e.preventDefault(),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)})},t.prototype.initMenu=function(){function t(){e(".has_sub").each(function(){var t=e(this);t.hasClass("nav-active")&&t.find("> ul").slideUp(300,function(){t.removeClass("nav-active")})})}function n(){var t=e(document).height();t>e(".body-content").height()&&e(".body-content").height(t)}var o=this;o.$menuItem.on("click",function(){var i=e(this).parent(),l=i.find("> ul");return o.$body.hasClass("sidebar-collapsed")||(l.is(":visible")?l.slideUp(300,function(){i.removeClass("nav-active"),e(".body-content").css({height:""}),n()}):(t(),i.addClass("nav-active"),l.slideDown(300,function(){n()}))),!1})},t.prototype.activateMenuItem=function(){e("#sidebar-menu a").each(function(){this.href==window.location.href&&(e(this).addClass("active"),e(this).parent().addClass("active"),e(this).parent().parent().prev().addClass("active"),e(this).parent().parent().parent().addClass("active"),e(this).parent().parent().prev().click())})},t.prototype.Preloader=function(){e(window).load(function(){e("#status").fadeOut(),e("#preloader").delay(350).fadeOut("slow"),e("body").delay(350).css({overflow:"visible"})})},t.prototype.ToggleSearch=function(){e(".toggle-search").on("click",function(){var t,n=e(this).data("target");n&&(t=e(n),t.toggleClass("open"))})},t.prototype.init=function(){this.initSlimscroll(),this.initLeftMenuCollapse(),this.initComponents(),this.initFullScreen(),this.initMenu(),this.activateMenuItem(),this.Preloader(),this.ToggleSearch()},e.MainApp=new t,e.MainApp.Constructor=t}(window.jQuery),function(e){"use strict";e.MainApp.init()}(window.jQuery);



var param = window.location.search.substring(1).split('&');

var page=param[0].split('=')[1] ;
var module=param[1].split('=')[1];
var sub_mod = ""

//Poue les visites

if (page.indexOf("Acc") >= 0) {
	page = "visiteAccueil";
}else if (page.indexOf("Inf") >= 0) {
	page = "visiteInfirmier";

}else if (page.indexOf("Med") >= 0){
	page = "visiteMedecin";

}


if (module=="dashboard") {
	page = "dashboard";
}


if (param.length >2) {
	sub_mod=param[2].split('=')[1]; 
	// Pour agent
	if (sub_mod=="patient") {
		if (page!="type_patient") {
			page = "agent";
		}
	}
	// alert('../../modules/'+module+'/'+sub_mod+'/controllers/'+page+'.js')
	$.getScript('modules/'+module+'/'+sub_mod+'/controllers/'+page+'.js', function()
	{
	    // script is now loaded and executed.
	    // put your dependent JS here.
	});
} else {
	// alert('../../modules/'+module+'/controllers/'+page+'.js')
	$.getScript('modules/'+module+'/controllers/'+page+'.js', function()
	{
	    // script is now loaded and executed.
	    // put your dependent JS here.
	});
}