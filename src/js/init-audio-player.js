jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        volumeimagewidth:24,
        barbackgroundimage:"",
        imagewidth:300,
        showtime:false,
        titleinbarwidth:80,
        showprogress:true,
        random:true,
        titleformat:"%TITLE%",
        height:300,
        prevnextimage:"images/pre-next.png",
        showinfo:true,
        imageheight:180,
        skin:"LightBox",
        loopimage:"images/play-mode.png",
        loopimagewidth:24,
        volumebarheight:80,
        prevnextimageheight:48,
        infoformat:"By %ARTIST% %ALBUM%<br />%INFO%",
        stopotherplayers:true,
        showstop:false,
        preloadaudio:true,
        showvolumebar:true,
        width:300,
        showtitleinbar:false,
        showloop:true,
        volumeimage:"images/volume.png",
        playpauseimagewidth:48,
        loopimageheight:24,
        tracklistitemformat:"%ID%. %TITLE% <span style='float:right;'>%DURATION%</span>",
        prevnextimagewidth:48,
        tracklistarrowimage:"tracklistarrow-16-16-1.png",
        playpauseimageheight:48,
        showbackgroundimage:false,
        progresswidthmode:"auto",
        stopimage:"stop-48-48-0.png",
        showvolume:true,
        playpauseimage:"images/play-pause.png",
        showprevnext:true,
        backgroundimage:"",
        volumebarpadding:8,
        progressheight:8,
        showtracklistbackgroundimage:false,
        progresswidth:296,
        showtitle:true,
        defaultvolume:-1,
        tracklistarrowimageheight:16,
        heightmode:"fixed",
        titleinbarformat:"%TITLE%",
        showtracklist:false,
        stopimageheight:48,
        volumeimageheight:24,
        stopimagewidth:48,
        noncontinous:false,
        tracklistbackgroundimage:"",
        showbarbackgroundimage:false,
        showimage:true,
        tracklistwidth:300,
        tracklistarrowimagewidth:16,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:true,
        loop:1,
        tracklistitem:10
    });
    jQuery("#amazingaudioplayer-1").find('> div:last').hide()
});