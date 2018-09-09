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

imget.addEventListener('mouseover', function(e) {
    sanget.play();
})

imget.addEventListener('mouseout', function(e) {
    sanget.pause();
})



var imgto = document.getElementById("kvadratto");
var sangto = new Audio('../sound/scream.mp3');

imgto.addEventListener('mouseover', function(e) {
    sangto.play();
})

imgto.addEventListener('mouseout', function(e) {
    sangto.pause();
})





var imgtre = document.getElementById("kvadrattre");
var sangtre = new Audio('../sound/christmas.mp3');

imgtre.addEventListener('mouseover', function(e) {
    sangtre.play();
})

imgtre.addEventListener('mouseout', function(e) {
    sangtre.pause();
})





var imgfire = document.getElementById("kvadratfire");
var sangfire = new Audio('../sound/theend.mp3');

imgfire.addEventListener('mouseover', function(e) {
    sangfire.play();
})

imgfire.addEventListener('mouseout', function(e) {
    sangfire.pause();
})




