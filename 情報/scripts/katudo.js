const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const hour = ("0" + date.getHours()).slice(-2);
const minute = ("0" + date.getMinutes()).slice(-2);
const second = ("0" + date.getSeconds()).slice(-2);

document.getElementById("date").textContent = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;


/* keyvisual */
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;
slides[currentSlide].classList.add("active");

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);

/* images */
const thumbs = document.querySelectorAll('.thumb');
const bigimg = document.getElementById('bigimg');
const caption = document.getElementById('caption');

thumbs.forEach(function(item, index) {
item.onclick = function() {
bigimg.src = this.dataset.image;
caption.textContent = this.dataset.caption;
}
});



const thumbs1 = document.querySelectorAll('.thumb1');
const bigimg1 = document.getElementById('bigimg1');
const caption1 = document.getElementById('caption1');

thumbs1.forEach(function(item, index) {
item.onclick = function() {
bigimg1.src = this.dataset.image;
caption1.textContent = this.dataset.caption1;
}
});



const thumbs2 = document.querySelectorAll('.thumb2');
const bigimg2 = document.getElementById('bigimg2');
const caption2 = document.getElementById('caption2');

thumbs2.forEach(function(item, index) {
item.onclick = function() {
bigimg2.src = this.dataset.image;
caption2.textContent = this.dataset.caption2;
}
});


const thumbs3 = document.querySelectorAll('.thumb3');
const bigimg3 = document.getElementById('bigimg3');
const caption3 = document.getElementById('caption3');

thumbs3.forEach(function(item, index) {
item.onclick = function() {
bigimg3.src = this.dataset.image;
caption3.textContent = this.dataset.caption3;
}
});