$(window).on('load', function () {
  var $afterload = $('#afterload');
  
  $afterload.replaceWith( '<div class="outer-widget">'+ $afterload.html() +'</div>');
});

// Masukin Elemen elemen disini
const video = document.getElementById('outputvid');
const volume = document.getElementById('volume');
const progressBar = document.getElementById('vidprogress-bar');
const fillProgressbar = document.getElementById('filled-progress-bar');
const currentTimeElement = document.querySelector(".current");
const durationTimeElement = document.querySelector(".duration");
// Masukin Elemen elemen disini

// Untuk loading
video.onwaiting = (event) => {
  $(".loading").show();
};
video.onplaying = (event) => {
  $(".loading").hide();
};
// Untuk loading

// ini buat tombol play/repeat
$( "#play" ).on( "click", function() {
    video.load();
    $(".pauseplaybutton").hide();
    video.play();
});
// ini buat tombol play/repeat

// ini buat tombol volume
$( "#volume-button" ).on( "click", function() {
    video.muted = !video.muted;
  if (video.muted) {
    $(".speakerimg").attr("src","Assets/Mute_Icon.svg");
    volume.value = 0;
  } else {
    $(".speakerimg").attr("src","Assets/Speaker_Icon.svg");
    volume.value = 100;
  }
});
// ini buat tombol volume

// Ini buat timer dan duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime /60);
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
  let durationMinutes = Math.floor(parseFloat(video.duration / 60));
  let durationSeconds = Math.floor(parseFloat(video.duration - durationMinutes * 60));

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`
}

video.addEventListener('timeupdate', currentTime);
// Ini buat timer dan duration

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


// ini buat click bubble
function klikBubble(){
  $(".outer-widget").hide();
  $(".output-outer-widget").show();
  $(".pauseplaybutton").hide();
  video.load();
  video.play();
};
// ini buat click bubble

// ini untuk ngambil link source video opening
const opening = document.querySelector('.openingvid');
let linkvidOpening = opening.getAttribute('src');
// ini untuk ngambil link source video opening

// ini buat close widget
function closeBubble(){
  $(".outer-widget").hide();
}

$(".close-output").click(function(){
  video.setAttribute('src', linkvidOpening);
  $(".outer-widget").show();
  $(".output-outer-widget").hide();
  $(".pauseplaybutton").hide();
  video.pause();
  $(".q-2").hide();
  $(".q-1").show();
  $(".back").hide();
});
// ini buat close widget

// ini buat click bubble
$(".back").click(function(){
  $( "#outputvid" ).addClass( "openingvid" );
  video.setAttribute('src', linkvidOpening);
  $(".q-2").hide();
  $(".q-1").show();
  $(".back").hide();
  video.play();
});
// ini buat click bubble

// ini buat delay question muncul di awal
video.addEventListener('timeupdate', () =>{
  if ($("#outputvid").hasClass("openingvid")) {
    if (video.currentTime >= 4){
      $(".q-1").show();
    }
    if (video.currentTime >= 4.5){
      $(".q-1").css('opacity', '1');
    }
  }
});
// ini buat delay question muncul di awal

// ini untuk ngambil elemen question
let numb = document.querySelector(".q-1 .question-frame").children.length;
console.log(numb);

let questionCard = [];
let qc = [];
for (i = 1; i <= numb;i++){
  qc[i] = ".qc-"+i;
  questionCard[i] = document.querySelector(qc[i]);
}
// ini untuk ngambil elemen question

// ini untuk ngambil attribute link video setiap question
let linkvid = [];
for (i = 1; i <= numb;i++){
  linkvid[i] = questionCard[i].getAttribute('sumbervid');
}
// ini untuk attribute link video setiap question

// Question nya
function fungsiquestion(no){
  video.setAttribute('src', linkvid[no]);
  $( "#outputvid" ).removeClass( "openingvid" );
  $(".back").show();
  $(".q-1").hide();
  $(".q-2").show();
  video.play();
}
// Question nya
