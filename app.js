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

// ini buat close widget
function closeBubble(){
  $(".outer-widget").hide();
}

$(".close-output").click(function(){
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/Opening.m4v');
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
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/Opening.m4v');
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

// Question nya
$(".q-1 .qc-1").click(function(){
  $( "#outputvid" ).removeClass( "openingvid" );
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/1.Erp Adalah.m4v');
  $(".back").show();
  $(".q-1").hide();
  $(".q-2").show();
  video.play();
});

$(".q-1 .qc-2").click(function(){
  $( "#outputvid" ).removeClass( "openingvid" );
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/2-Erp-Itu-Cocok-Untuk-Perusahaan-Seperti-Apa.m4v');
  $(".back").show();
  $(".q-1").hide();
  $(".q-2").show();
  video.play();
});

$(".q-1 .qc-3").click(function(){
  $( "#outputvid" ).removeClass( "openingvid" );
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/3-Introduction-To-Hashmicro-Product.m4v');
  $(".back").show();
  $(".q-1").hide();
  $(".q-2").show();
  video.play();
});


$(".q-1 .qc-4").click(function(){
  $( "#outputvid" ).removeClass( "openingvid" );
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/4-Keunggulan-Hashmicro.m4v');
  $(".back").show();
  $(".q-1").hide();
  $(".q-2").show();
  video.play();
});

$(".q-1 .qc-5").click(function(){
  $( "#outputvid" ).removeClass( "openingvid" );
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/5-Proses-Implementasi.m4v');
  $(".back").show();
  $(".q-1").hide();
  $(".q-2").show();
  video.play();
});

$(".q-1 .qc-6").click(function(){
  $( "#outputvid" ).removeClass( "openingvid" );
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/6-Apakah-Demo-Nya-Gratis.m4v');
  $(".back").show();
  $(".q-1").hide();
  $(".q-2").show();
  video.play();
});

$(".q-2 .qc-1").click(function(){
  $( "#outputvid" ).addClass( "openingvid" );
  video.setAttribute('src', 'https://eva-hr.com/other/videos/480/compress/Opening.m4v');
  $(".outer-widget").show();
  $(".output-outer-widget").hide();
  $(".pauseplaybutton").hide();
  video.pause();
  $(".q-2").hide();
  $(".q-1").show();
  $(".back").hide();
});

// Question nya
