//photo slideshow
const newImgList = [
    "image_hp/koiwa.png",
    "image_hp/rain.png",
    "image_hp/dream of N.jpg",
    "image_hp/akan.png",
];

function slide_time() {
    let num = Math.floor(Math.random() * newImgList.length)
    const slideImg = document.getElementById("slide-img")
    slideImg.setAttribute("src", newImgList[num])
}
setInterval(slide_time, 3000)




//ボタン
const scroll_to_top_btn = document.querySelector("#scroll-to-top-btn");

// ↓ この関数を、ボタンクリック時に実行したい
function scroll_to_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}

//スクロール時のイベントを追加
window.addEventListener("scroll", scroll_event);

function scroll_event() {
    if (window.pageYOffset > 200) { /* もしページ下の方に行ったら */
        // ボタンを表示
        const scroll_to_top_btn = document.querySelector("#scroll-to-top-btn");
        scroll_to_top_btn.style.opacity = "1";
    } 
    else if (window.pageYOffset < 200) { /* もしまだページ下の方ではなかったら */
        // ボタンを非表示
        const scroll_to_top_btn = document.querySelector("#scroll-to-top-btn");
        scroll_to_top_btn.style.opacity = "0" ;
    }
};