"use strict";

var listFooter = $("footer ul li");
var phoneContent = $(".phone-content");
var phoneTextTitle = $(".phone-text-title");
var phoneTextSlide = $(".phone-text-slide");
var content = [
  "public/img/screen-1.png",
  "public/img/screen-2.png",
  "public/img/screen-3.png",
  "public/img/screen-4.png",
  "public/img/screen-5.png"
];

var textContent = [
  '<h1 class="reset-m">1</h1><p>Pilih restoran dan menu sesuai kategori yang tersedia.</p>',
  '<h1 class="reset-m">2</h1><p>Atau masukkan nama restoran / menu yang diinginkan.</p>',
  '<h1 class="reset-m">3</h1><p>Pilih makanan dan masukkan jumlah pesanan.</p>',
  '<h1 class="reset-m">4</h1><p>Masukkan alamat pengiriman dan pilih metode pembayaran lalu klik “order”.</p>',
  '<h1 class="reset-m">5</h1><p>Pesanan segera diantar ke alamat pengiriman.</p>'
];

var i = 0;
var itext = 0;


phoneTextSlide.find("#prev").on("click", function() {
  if (i > 0 && itext > 0) {
    i = (i - 1) % content.length;
    $(phoneContent).find("img").fadeOut(function(){
      $(this).attr("src", content[i]).fadeIn();
    });

    itext = (itext - 1) % textContent.length;
    $(phoneTextSlide).find("ul li").fadeOut(function() {
      $(this).html(textContent[itext]).fadeIn();
    });
  }
});

phoneTextSlide.find("#next").on("click", function() {
  i = (i + 1) % content.length;
  $(phoneContent).find("img").fadeOut(function(){
    $(this).attr("src", content[i]).fadeIn();
  });

  itext = (itext + 1) % textContent.length;
  $(phoneTextSlide).find("ul li").fadeOut(function() {
    $(this).html(textContent[itext]).fadeIn();
  });
});

if ($(window).width() < 992 ) {
  listFooter.find("#gojek").click(function(){
    $(".list-gojek-collapse").slideToggle();
    $("#gojek").find("i").toggleClass("down-arrow");
    $("#gojek").find("i").toggleClass("up-arrow");
  });

  listFooter.find("#golife").click(function(){
    $(".list-golife-collapse").slideToggle();
    $("#golife").find("i").toggleClass("down-arrow");
    $("#golife").find("i").toggleClass("up-arrow");
  });

  listFooter.find("#gopay").click(function(){
    $(".list-gopay-collapse").slideToggle();
    $("#gopay").find("i").toggleClass("down-arrow");
    $("#gopay").find("i").toggleClass("up-arrow");
  });
} else {
  listFooter.find("#list-gojek-collapse").removeClass(".list-gojek-collapse");
}
