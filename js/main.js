// start swiber
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
// end swiber



// start modal image
// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");
var modalImg6 = document.getElementById("img06");
var modalImg7 = document.getElementById("img07");
var modalImg8 = document.getElementById("img08");

var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
var captionText4 = document.getElementById("caption4");
var captionText5 = document.getElementById("caption5");
var captionText6 = document.getElementById("caption6");
var captionText7 = document.getElementById("caption7");
var captionText8 = document.getElementById("caption8");

// start modal (1)
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// end modal (1)


// start modal (2)
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal2.style.display = "none";
};
// end modal (2)


// start modal (3)
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal3.style.display = "none";
};
// end modal (3)


// start modal (4)
img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal4.style.display = "none";
};
// end modal (2)


// start modal (5)
img5.onclick = function () {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal5.style.display = "none";
};
// end modal (5)


// start modal (6)
img6.onclick = function () {
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal6.style.display = "none";
};
// end modal (6)


// start modal (7)
img7.onclick = function () {
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[6];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal7.style.display = "none";
};
// end modal (7)


// start modal (8)
img8.onclick = function () {
  modal8.style.display = "block";
  modalImg8.src = this.src;
  captionText8.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[7];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal8.style.display = "none";
};
// end modal (8)


// end modal image




// let plus = document.getElementsByClassName("plus-plus")
// let minus = document.getElementsByClassName("minus-minus")
// let NUM = document.getElementsByClassName("nums")

// console.log(plus)
// console.log(minus)
// console.log(NUM)

// let countt = 1
// for (let i = 0; i < plus.length; i++){
//   var btnPlus = plus[i]
//   btnPlus.addEventListener("click", function (event) {
//     var btnClicked = event.target
//     console.log(btnClicked)
//     btnClicked.NUM[0].value = countt ++
//   })
// }

// start total price
// let plus = document.querySelectorAll(".plus-plus")
// let minus = document.querySelectorAll(".minus-minus")
// let NUM = document.querySelectorAll(".nums")

// let countInput = +NUM.value;

// for (let i = 0; i < NUM.length; i++){
//   countInput = +NUM[i].value;
// }

// for (let i = 0; i < plus.length; i++){
//   plus[i].onclick = function () {
//     if (countInput < 10) {
//         countInput += 1;
//     }

//     if (countInput <= 10) {
//       NUM[i].setAttribute("value" , "" + countInput) =  countInput
//     } else {
//         console.log("done")
//     }
// }
// }

// for (let i = 0; i < minus.length; i++) {
//   minus[i].onclick = function () {
//     if (countInput > 0) {
//       countInput -= 1;
//     }

//     if (countInput <= 10) {
//       NUM[i].value =  countInput
//     } else {
//       console.log("done")
//     }
//   }
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// // start total price
let plus = document.getElementsByClassName("plus-plus");
let minus = document.getElementsByClassName("minus-minus");
// console.log(plus)
// console.log(minus)

for (let i = 0; i < plus.length; i++) {
  var btnPlus = plus[i];
  btnPlus.addEventListener("click", function (event) {
    var btnClicked = event.target;
    // console.log(btnClicked)
    var input = btnClicked.parentElement.children[1];
    // console.log(input)
    var inputValue = input.value;
    // console.log(inputValue)
    var newValue = parseInt(inputValue) + 1;
    console.log(++inputValue);
    var lastValue = input.setAttribute("value", "" + newValue);
    newValue = lastValue;
  });
}

for (let i = 0; i < minus.length; i++) {
  var btnPlus = minus[i];
  btnPlus.addEventListener("click", function (event) {
    var btnClicked = event.target;
    // console.log(btnClicked)
    var input = btnClicked.parentElement.children[1];
    // console.log(input)
    var inputValue = input.value;
    // console.log(inputValue)
    var newValue = parseInt(inputValue) - 1;
    console.log(++inputValue);
    var lastValue = input.setAttribute("value", "" + newValue);
    newValue = lastValue;
  });
}

// // end total price

function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

function showPreview2(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-2-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

function showPreview3(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-3-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}

function showPreview4(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-4-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}
