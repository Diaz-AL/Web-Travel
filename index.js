window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Automatic Image Slider
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 4000);

// Smooth Scrolling 
const links = document.querySelectorAll('a[href^="#"]');

// Smooth Scrolling Listener
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const section = document.querySelector(this.hash);
    
    window.scrollTo({
      behavior: 'smooth',
      top: section.offsetTop,
      left: 0
    });
  });
});