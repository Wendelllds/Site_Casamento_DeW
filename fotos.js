var slideIndex = 0;
    var interval;

    showSlide(slideIndex);

    // Inicia o carrossel automaticamente após 10 segundos
    interval = setInterval(nextSlide, 3000);

    function nextSlide() {
      showSlide(slideIndex += 1);
    }

    function prevSlide() {
      showSlide(slideIndex -= 1);
    }

    function showSlide(n) {
      var slides = document.getElementsByClassName("carousel-item");
      if (n >= slides.length) {slideIndex = 0;}
      if (n < 0) {slideIndex = slides.length - 1;}
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "block";
    }