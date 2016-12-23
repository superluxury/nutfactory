
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
	$("#slx-play").attr("href", "https://www.youtube.com/watch?v=Uh5NB11LP2Y");
} else if (is_safari) {
	$("#slx-play").attr("href", "#");
	$("#explain").html("Oh! It looks like you're using Safari! <br>360 and Safari don't get along. <br>It's like Bette Davis and Joan Crawford. Try a friendlier browser like Chrome, <br>Firefox, Opera or even Internet Explorer <br>(I know, we were surprised too!).");
} else {
	$('#slx-play').on('click', function(event){
		event.preventDefault();
		$("#player1")[0].src += "?autoplay=1";
		$('.main-video-poster').delay(500).fadeOut();
	});
}

if (isMobile.iOS()) {
	$('#explain').html("You must be a person about town, <br>checking this on your phone on the go. <br>You'll need the YouTube app to see this awesome 360&deg; video. If you don't already have it, we made it easy for ya'. <br>Just <a href='https://itunes.apple.com/us/app/youtube-watch-share-videos/id544007664?mt=8' target='_blank'>click here</a>.");
} else if (isMobile.Android()) {
	$('#explain').html("You must be a person about town, <br>checking this on your phone on the go. <br>You'll need the YouTube app to see this awesome 360&deg; video. If you don't already have it, we made it easy for ya'. <br>Just <a href='https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=en' target='_blank'>click here</a>.");
} else if (isMobile.Windows()) {
 	$('#explain').html("Exclamation! You're a freethinker with your Windows Phone! <br>But you'll need to download some apps to view this awesome 360 video on a Microsoft device. <br>Use the <a href='https://www.microsoft.com/en-us/store/p/tubecast-for-youtube/9wzdncrdx3fs' target='_blank'>Tubecast</a> and <a href='https://www.microsoft.com/store/apps/9nblggh23xvv' target='_blank'>Video 360</a> apps or your computer.");
} else if (isMobile.BlackBerry() || isMobile.Opera()) {
  	$('#explain').text("Gasp! You’re either on a Blackberry or an Opera Phone! <br>Sadly, 360 and your phone don't get along. <br>Like Bette Davis and Joan Crawford. <br>Instead, try this video on your computer ASAP.");
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