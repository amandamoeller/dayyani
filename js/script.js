window.onload = function() { 
  var vids = document.getElementById("video2");

    vids.addEventListener( `mouseover`, function(e) { 
        console.log('mus over lissom');
      vids.play();
    })
    vids.addEventListener( `mouseout`, function(e) {
      vids.pause()
    })
  }

  unmute.addEventListener('click', function() {
    video2.muted = false;
  });



var imget = document.getElementById("kvadratet");
var sanget = new Audio('../sound/rummetfyldt.mp3');

imget.addEventListener("mouseover", playMusic, false);
imget.addEventListener("mouseout", stopMusic, false);

function playMusic() {
    sanget.play();
}

function stopMusic () {
    sanget.pause();
}

