//BLOCK Newsleter Popup
jQuery(document).ready(function($) {
	$(window).load(function () {
      	var check_cookie = getCookie("ss_newsletter_custom_popup");
      	if (check_cookie != '') {
          	$('#container-module-newletter').hide();
          	return;
      	}
      	else {
          $('#container-module-newletter').show();
          $('body').addClass('hidden-scorll');
          $('.ss_newsletter_custom_popup').addClass('popup_bg');
          $('input[name=\'hidden-popup\']').on('change', function(){
              if ($(this).is(':checked')) {
                  checkCookie();
              } else {
                  unsetCookie("ss_newsletter_custom_popup");
              }
          });
          function unsetCookie( name ) {
              document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          }
          $('.popup-close').click(function(){
              var this_close = $('.popup-close');
              $('body').removeClass('hidden-scorll');
              $('#container-module-newletter').hide();
          });
        }
	});
});

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	console.log(d.getTime());
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}
function checkCookie() {
	var check_cookie = getCookie("ss_newsletter_custom_popup");
	if(check_cookie == ""){
		setCookie("ss_newsletter_custom_popup", "Newletter Popup", 1 );
	}
}