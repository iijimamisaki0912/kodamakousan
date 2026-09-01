const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let current = 0;
const total = slide.length;


/* =========================
   最初の画像を表示
========================= */

slide[current].classList.add("active");


/* =========================
   スライド切り替え
========================= */

function showSlide(index){

    if(index >= total){
        current = 0;
    }

    else if(index < 0){
        current = total - 1;
    }

    else{
        current = index;
    }


    /* すべての画像を非表示 */

    slide.forEach(item => {

        item.classList.remove("active");

    });


    /* 現在の画像だけ表示 */

    slide[current].classList.add("active");


    /* ドット変更 */

    dots.forEach(dot => {

        dot.classList.remove("active");

    });

    dots[current].classList.add("active");

}


/* =========================
   次へ
========================= */

function nextSlide(){

    showSlide(current + 1);

}


/* =========================
   前へ
========================= */

function prevSlide(){

    showSlide(current - 1);

}


/* =========================
   右矢印
========================= */

next.addEventListener("click", function(){

    nextSlide();

});


/* =========================
   左矢印
========================= */

prev.addEventListener("click", function(){

    prevSlide();

});


/* =========================
   ドット
========================= */

dots.forEach((dot, index) => {

    dot.addEventListener("click", function(){

        showSlide(index);

    });

});


/* =========================
   5秒ごとに自動切り替え
========================= */

setInterval(function(){

    nextSlide();

}, 4000);