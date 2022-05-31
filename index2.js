// Select elements here
const video = document.getElementById('outputvid');
const volume = document.getElementById('volume');

$( "#play" ).on( "click", function() {
    video.load();
});

$( "#volume-button" ).on( "click", function() {
    video.muted = !video.muted;
  if (video.muted) {
    $(".speakerimg").attr("src","muted-icon.svg");
    volume.value = 0;
  } else {
    $(".speakerimg").attr("src","Speaker_Icon.svg");
    volume.value = 100;
  }
});

$(".pparea").click(function(){
    if (video.paused || video.ended) {
        video.play();
        $(".pauseplaybutton").hide();
      } else {
        $(".pauseplaybutton").show();
        video.pause();
      }
});
$(".bubble-widget-video video").click(function(){
    $(".outer-widget").hide();
    $(".output-outer-widget").show();
    video.load();
    video.play();
});
$(".close-bubble").click(function(){
    $(".outer-widget").hide();
});
$(".close-output").click(function(){
    $(".outer-widget").show();
    $(".output-outer-widget").hide();
    video.pause();
});