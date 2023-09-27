function limparInput() {
    document.getElementById("pesquisa").value = "";
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

 // Get all the images
    const images = document.querySelectorAll('.image');
    // Add a zoom effect to each image
    images.forEach(image => {
      image.addEventListener('mouseover', () => {
        image.classList.add('zoom');
      });
      image.addEventListener('mouseout', () => {
        image.classList.remove('zoom');
      });
    });
    function openMenu() {
      document.getElementById("myMenu").style.display = "block";
    }
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
      console.log('Button clicked!');
    });
 