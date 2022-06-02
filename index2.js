// Masukin Elemen elemen disini
const video = document.getElementById('outputvid');
const volume = document.getElementById('volume');
const progressBar = document.getElementById('vidprogress-bar');
const fillProgressbar = document.getElementById('filled-progress-bar');
// Masukin Elemen elemen disini

// ini buat tombol play/repeat
$( "#play" ).on( "click", function() {
    video.load();
    $(".pauseplaybutton").hide();
});
// ini buat tombol play/repeat

// ini buat tombol volume
$( "#volume-button" ).on( "click", function() {
    video.muted = !video.muted;
  if (video.muted) {
    $(".speakerimg").attr("src","Mute_Icon.svg");
    volume.value = 0;
  } else {
    $(".speakerimg").attr("src","Speaker_Icon.svg");
    volume.value = 100;
  }
});
// ini buat tombol volume

// ini buat Progress bar nya jalan
video.addEventListener('timeupdate', () =>{
  const percentage = (video.currentTime / video.duration) * 100;
  fillProgressbar.style.width = `${percentage}%`
});
// ini buat Progress bar nya jalan

// ini buat Progress bar nya pindah kalo di klik
progressBar.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = progressTime;
})
// ini buat Progress bar nya pindah kalo di klik

// ini buat munculin pause area
$(".pparea").click(function(){
    if (video.paused || video.ended) {
        video.play();
        $(".pauseplaybutton").hide();
      } else {
        $(".pauseplaybutton").show();
        video.pause();
      }
});
// ini buat munculin pause area

// ini buat close widget
$(".bubble-widget-video video").click(function(){
    $(".outer-widget").hide();
    $(".output-outer-widget").show();
    $(".pauseplaybutton").hide();
    video.load();
    video.play();
});
$(".close-bubble").click(function(){
    $(".outer-widget").hide();
});
$(".close-output").click(function(){
    $(".outer-widget").show();
    $(".output-outer-widget").hide();
    $(".pauseplaybutton").hide();
    video.pause();
});
// ini buat close widget

