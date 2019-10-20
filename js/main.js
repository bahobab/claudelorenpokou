let slideIndex = 0;
let timer;

const myCharacters = {
  blackHowl: [
    {
      img: "./assets/design/character/black_howl/banner.png",
      caption: "Banner"
    }, {
      img: "./assets/design/character/black_howl/Dash.jpg",
      caption: "Banner"
    }, {
      img: "./assets/design/character/black_howl/Feats.jpg",
      caption: "Banner"
    }, {
      img: "./assets/design/character/black_howl/Guiliane 2.jpg",
      caption: "Banner"
    }, {
      img: "./assets/design/character/black_howl/Guiliane.jpg",
      caption: "Banner"
    }, {
      img: "./assets/design/character/black_howl/Neko.jpg",
      caption: "Banner"
    }, {
      img: "./assets/design/character/black_howl/Rezo.jpg",
      caption: "Banner"
    }
  ],

  gabby: [
    {
      img: "./assets/design/character/gabby/Gabby-02.png",
      caption: ""
    }, {
      img: "./assets/design/character/gabby/Gabby-03.png",
      caption: ""
    }, {
      img: "./assets/design/character/gabby/Gabby-04.png",
      caption: ""
    }
  ],

  oskar: [
    {
      img: "./assets/design/character/oskar/oskar 2.png",
      caption: ""
    }, {
      img: "./assets/design/character/oskar/oskar.png",
      caption: ""
    }
  ],

  wiwe: [
    {
      img: "./assets/design/character/wiweperso/wiwperso-01.png",
      caption: ""
    }, {
      img: "./assets/design/character/wiweperso/wiwperso-02.png",
      caption: ""
    }, {
      img: "./assets/design/character/wiweperso/wiwperso-03.png",
      caption: ""
    }, {
      img: "./assets/design/character/wiweperso/wiwperso-04.png",
      caption: ""
    }, {
      img: "./assets/design/character/wiweperso/wiwperso-06.png",
      caption: ""
    }
  ],

  autres: [
    {
      img: "./assets/design/character/autres/katie.png",
      caption: ""
    }, {
      img: "./assets/design/character/autres/leider.png",
      caption: ""
    }, {
      img: "./assets/design/character/autres/major.png",
      caption: ""
    }
  ]
};

const sliderContainer = document.createElement("div");
sliderContainer
  .classList
  .add(".slide-container");
sliderContainer.style.display = "flex";
sliderContainer.style.justifyContent = "center";
sliderContainer.style.height = 100 + "%";
const indicator = document.createElement("div");
indicator
  .classList
  .add(".indicator");

const output = document.querySelector(".output");
const show = document.querySelector(".show");
const close = document.querySelectorAll(".close");
let images;
document
  .querySelectorAll(".popup img")
  .forEach(function (ele) {
    ele.addEventListener("click", popImage);
  });

function popImage(evt) {
  images = [...myCharacters[this.dataset.images]];
  console.log(">>", images);
  // const output.querySelector('img').setAttribute('src', this.src);
  show
    .classList
    .remove("hide");
  document
    .querySelector(".overlay")
    .style
    .top = window.scrollY + "px";
  document
    .querySelector(".overlay")
    .style
    .left = 0;
  document
    .querySelector(".output")
    .style
    .top = window.scrollY + 10 + "px";
  document
    .querySelector(".output")
    .style
    .left = 10 + "px";

  output.appendChild(sliderContainer);
  output.appendChild(indicator);

  buildSlider(images);
}

close
  .forEach(function (ele) {
    ele
      .addEventListener("click", function (evt) {
        show
          .classList
          .add("hide");
        images = null;
        while (sliderContainer.firstChild) {
          sliderContainer.removeChild(sliderContainer.firstChild);
        }
        clearTimeout(timer);
      });
  });

// ******************* slider *******************************

function buildSlider(images) {
  console.log(images);
  images.forEach(function (image, index) {
    let slide = document.createElement("div");
    slide.setAttribute("class", "my-slide fade");
    let img = document.createElement("img");
    img.setAttribute("src", images[index].img);
    // img.style.maxHeight = 100+'%'; img.style.position = 'absolute'; img.style.top
    // = 0; img.style.left = 0; img.style.width = '100%'; img.style.height =
    // 'auto';

    let caption = document.createElement("div");
    caption
      .classList
      .add("caption");
    caption.innerText = images[index].caption;

    slide.appendChild(img);
    slide.appendChild(caption);

    // const myslider = document.querySelector('.slide-container')
    // myslider.appendChild(slide);
    sliderContainer.appendChild(slide);

    // console.log(myslider);

    let span = document.createElement("span");
    span
      .classList
      .add("dot");
    span.addEventListener("click", function (evt) {
      // console.log(evt.target);
      moveSlide(index);
    });
    // document.querySelector('.indicator').appendChild(span);
    indicator.appendChild(span);
  });
  playSlides();
}

function playSlides() {
  // console.log('Playing slides...');
  const slides = document.querySelectorAll(".my-slide");
  const dots = document.querySelectorAll(".dot");
  const active = document.querySelector(".active");

  if (active != null) 
    active.classList.remove("active");
  
  // console.log('slides', slides); console.log('dots',dots);
  // console.log('active',active);

  if (slideIndex + 1 > slides.length) 
    slideIndex = 0;
  
  slides
    .forEach(function (slide) {
      slide.style.display = "none";
    });

  slides[slideIndex].style.display = "flex"; // show the image we clicked on
  slides[slideIndex].style.justifyContent = "center";
  slides[slideIndex].style.height = 100 + "%";
  dots[slideIndex]
    .classList
    .add("active"); // set current dot to active
  slideIndex++;
  playSlides;
  timer = setTimeout(playSlides, 3000);
}

function moveSlide(num) {
  // console.log(num);
  slideIndex = num;
  clearTimeout(timer);
  playSlides();
}

const viewHidePlanches = document.querySelector(".view-hide");
viewHidePlanches.addEventListener("click", evt => {
  document
    .querySelector(".planches")
    .classList
    .toggle("hide-planches");
  const viewPlanches = document.querySelector(".collegien figure>img");
  viewPlanches
    .classList
    .toggle("hide-thumb");

  if (viewPlanches.classList.contains("hide-thumb")) {
    viewHidePlanches.textContent = "Cacher les planches";
    viewHidePlanches.style.color = "red";
  } else {
    viewHidePlanches.textContent = "Voir toutes les planches >";
    viewHidePlanches.style.color = "white";
  }
});