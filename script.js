function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("mySidenav").style.visibility = "visible";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var Index = 1;
show(Index);

function plus(m) {
    show(Index += m);
}

function current(m) {
    show(Index = m);
}

function show(m) {
    var j;
    var slidesMain = document.getElementsByClassName("slideshowSlides");
    var dotsMain = document.getElementsByClassName("dotSlider");
    if (m > slidesMain.length) { Index = 1 }
    if (m < 1) { Index = slidesMain.length }
    for (j = 0; j < slidesMain.length; j++) {
        slidesMain[j].style.display = "none";
    }
    for (j = 0; j < dotsMain.length; j++) {
        dotsMain[j].className = dotsMain[j].className.replace(" active", "");
    }
    slidesMain[Index - 1].style.display = "block";
    dotsMain[Index - 1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dot = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].className += " active";
    captionText.innerHTML = dot[slideIndex - 1].alt;
}