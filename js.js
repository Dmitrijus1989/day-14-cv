
var bar1 = new ProgressBar.Line(progressBar1, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});
var bar2 = new ProgressBar.Line(progressBar2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});
var bar3 = new ProgressBar.Line(progressBar3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});
var bar4 = new ProgressBar.Line(progressBar4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});
var bar5 = new ProgressBar.Line(progressBar5, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});
var bar6 = new ProgressBar.Line(progressBar6, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

function progressBar() {
bar1.animate(0.70);
bar2.animate(0.85);
bar3.animate(0.9);
bar4.animate(0.8);
bar5.animate(0.75);
bar6.animate(0.5);
};



// open model
function openModal() {
  document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// var modelDisplayStatus = false;
// if (document.getElementById('myModal').style.display = ) {
//
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = slides[slideIndex-1].alt;
}
document.getElementById('myModal').addEventListener('click', function(e){
  console.log(e);
  if (e.target === document.getElementById('myModal')){
    closeModal(); // Clicked outside the box
  } else if (document.getElementById('mySlidesId').contains(e.target)) {
    plusSlides(1); // Clicked in box
  }
});

//open model
