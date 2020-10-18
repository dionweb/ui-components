var testimonialIndex = 1;
showTestimonials(testimonialIndex);

function plusTestimonials(n) {
    showTestimonials((testimonialIndex += n));
}

function currentTestimonial(n) {
    showTestimonials((testimonialIndex = n));
}

function showTestimonials(n) {
    var i;
    var testimonials = document.getElementsByClassName("testimonial");
    var dots = document.getElementsByClassName("dot");

    if (n > testimonials.length) {
        testimonialIndex = 1;
    }

    if (n < 1) {
        testimonialIndex = testimonials.length;
    }

    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    testimonials[testimonialIndex - 1].style.display = "block";
    dots[testimonialIndex - 1].className += " active";
}