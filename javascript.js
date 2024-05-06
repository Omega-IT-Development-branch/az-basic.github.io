//Функция для табов главная страница
function openSearch(evt, searchName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("search-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("search-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(searchName).style.display = "block";
    evt.currentTarget.className += " active";
}
//Свайпер ЖК
var swiper = new Swiper(".jk-Swiper", {
    slidesPerView: 3,
    spaceBetween: 36,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Свайпер с компаниями
var swiper = new Swiper(".jk-Swiper", {
    slidesPerView: 3,
    spaceBetween: 36,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});