// Category Content Bottom click Event Code Area Start in the Here

var clk = document.querySelector(".click");
clk.addEventListener("click", function () {
    var catconbottom = document.querySelector(".category-content-bottom");
    if (catconbottom.style.display === "none") {
        catconbottom.style.display = "block";
    } else {
        catconbottom.style.display = "none";
    }
});

// Category Content Bottom click Event Code Area End of the Here

// ----------------------------------------------------------------------------------------

// Slider Code Area Start in the Here
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: '<i class="fas fa-arrow-right"></i>',
    nextArrow: ' <i class="fas fa-arrow-left"></i>',
});

// Slider Code Area End of the Here
// ----------------------------------------------------------------------------------------

// discount-end code Area Start in the here

var countFutureDate = new Date("May 02, 2023 15:37:25").getTime();
var x = setInterval(function () {
    var today = new Date().getTime();
    var distance = countFutureDate - today;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".min").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "This product discount the end.";
    }
}, 1000);

// discount-end code Area End of the here

// ----------------------------------------------------------------------------------------

var countFutureDate2 = new Date("May 02, 2022 15:37:25").getTime();
var x = setInterval(function () {
    var today = new Date().getTime();
    var distance = countFutureDate2 - today;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".days2").innerHTML = days;
    document.querySelector(".hours2").innerHTML = hours;
    document.querySelector(".min2").innerHTML = minutes;
    document.querySelector(".sec2").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "This product discount the end.";
    }
}, 1000);


// ----------------------------------------------------------------------------------------

//  .end-price-left code area Start in the here 

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// .end-price-left code area end of the here 

// ----------------------------------------------------------------------------------------



