/* ===============================
   1. 53件の記事データをここに並べる
   =============================== */
const articleData = [
  // 例: { img: "images/01.jpg", url: "https://note.com/user1/n/n123...", alt: "記事タイトル1" },
  // ---- ここから ----
  { img: "images/01.jpg", url: "https://note.com/youruser/n/xxxxxxxx01", alt: "記事01" },
  { img: "images/02.jpg", url: "https://note.com/youruser/n/xxxxxxxx02", alt: "記事02" },
  { img: "images/03.jpg", url: "https://note.com/youruser/n/xxxxxxxx03", alt: "記事03" },
  // …
  // 省略せずに 53 件ぶん並べてください
  { img: "images/53.jpg", url: "https://note.com/youruser/n/xxxxxxxx53", alt: "記事53" }
  // ---- ここまで ----
];

/* ===============================
   2. スライド要素を動的に生成
   =============================== */
const wrapper = document.querySelector(".swiper-wrapper");

articleData.forEach(item => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  slide.innerHTML = `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer">
      <img src="${item.img}" alt="${item.alt}">
    </a>
  `;
  wrapper.appendChild(slide);
});

/* ===============================
   3. Swiper 初期化
   =============================== */
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,          // 3秒ごとに自動再生
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    // 横幅 600px 以上で2枚、900px 以上で3枚表示
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 }
  }
});
