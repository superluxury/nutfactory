
/*
 * Superlux Scripts File
 * Author: Superlux
*/

/*************************************************
DOCUMENT READY JAVASCRIPT (START)
*************************************************/
$(document).ready(function() {


/*************************************************
EVENT LISTENERS
*************************************************/

//Mobile variables
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

//Browser variables
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
if ((is_chrome)&&(is_safari)) {is_safari=false;}
if ((is_chrome)&&(is_opera)) {is_chrome=false;}


//Check to see if it's a mobile device and/or if it's playing in Safari browser
if (isMobile.any()) {
	$("#slx-play").attr("href", "http://www.youtube.com/watch?v=m02aHT61scA");
} else if (is_safari) {
	$("#slx-play").attr("href", "#");
	$("#explain").html("360&deg; video does not work in the Safari.  Please try watching it in Chrome, <br>Firefox,&nbsp;Internet Explorer or Opera.");
} else {
	$('#slx-play').on('click', function(event){
		event.preventDefault();
		$("#player1")[0].src += "?autoplay=1";
		$('.main-video-poster').delay(500).fadeOut();
	});
}

if (isMobile.iOS()) {
	$('#explain').html("You'll need to YouTube app to view the 360&deg; video.  If you dont have it, <a href='https://itunes.apple.com/us/app/youtube-watch-share-videos/id544007664?mt=8' target='_blank'>click here</a> to download.");
} else if (isMobile.Android()) {
	$('#explain').html("You'll need to YouTube app to view the 360&deg; video.  If you dont have it, <a href='https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=en' target='_blank'>click here</a> to download.");
} else if (isMobile.Windows()) {
 	$('#explain').html("You'll need to download some apps to view the 360&deg; video on a Microsoft device.  If you dont have it, download the <a href='https://www.microsoft.com/en-us/store/p/tubecast-for-youtube/9wzdncrdx3fs' target='_blank'>Tubecast</a> app and the <a href='https://www.microsoft.com/store/apps/9nblggh23xvv' target='_blank'>Video 360</a>, or try it on a desktop.");
} else if (isMobile.BlackBerry() || isMobile.Opera()) {
  	$('#explain').text("The 360&deg; video may not work correctly on your device.  Please try it on a desktop.");
}



/*************************************************
FUNCTIONS
*************************************************/

function updateViewportDimensions() {
	var w=window,d=document,h=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||h.clientWidth||g.clientWidth,y=w.innerHeight||h.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();

});