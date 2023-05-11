const projects = [
  {
    name: "yaraak",
    images: [
      "src/images/yaraak.PNG",
      "src/images/yaraak2.PNG",
      "src/images/yaraak3.PNG",
      "src/images/yaraak4.PNG",
    ],
  },

  {
    name: "blog",
    images: [
      "src/images/blog.PNG",
      "src/images/blog1.PNG",
      "src/images/blog2.PNG",
      "src/images/blog3.PNG",
    ],
  },

  {
    name: "hotel",
    images: [
      "src/images/hotel.PNG",
      "src/images/hotel1.PNG",
      "src/images/hotel2.PNG",
      "src/images/hotel3.PNG",
    ],
  },

  {
    name: "store",
    images: [
      "src/images/store.PNG",
      "src/images/store1.PNG",
      "src/images/store2.PNG",
      "src/images/store3.PNG",
    ],
  },
];

console.log(projects[3].images[0]);
// Get all the project cards
const hotel = document.querySelector("#hotel");
const blog = document.querySelector("#blog");
const yaraak = document.querySelector("#yaraak");
const store = document.querySelector("#store");

console.log(blog);
console.log(yaraak);

console.log(store);

console.log(hotel);

const modal = document.querySelector(".modal");
const pic = document.querySelectorAll(".pic");
console.log(pic[0]);

yaraak.addEventListener("click", () => {
    modal.style.display = "flex";
  pic[0].setAttribute('src',  projects[0].images[0]);
  pic[1].setAttribute('src', projects[0].images[1]);
  pic[2].setAttribute('src', projects[0].images[2]);
  pic[3].setAttribute('src',projects[0].images[3]);

});

blog.addEventListener("click", () => {
    modal.style.display = "flex";
    pic[0].setAttribute('src',  projects[1].images[0]);
    pic[1].setAttribute('src', projects[1].images[1]);
    pic[2].setAttribute('src', projects[1].images[2]);
    pic[3].setAttribute('src',projects[1].images[3]);


});

hotel.addEventListener("click", () => {
    modal.style.display = "flex";
    pic[0].setAttribute('src',  projects[2].images[0]);
    pic[1].setAttribute('src', projects[2].images[1]);
    pic[2].setAttribute('src', projects[2].images[2]);
    pic[3].setAttribute('src',projects[2].images[3]);
  
});

store.addEventListener("click", () => {
    modal.style.display = "flex";
    pic[0].setAttribute('src',  projects[3].images[0]);
    pic[1].setAttribute('src', projects[3].images[1]);
    pic[2].setAttribute('src', projects[3].images[2]);
    pic[3].setAttribute('src',projects[3].images[3]);
 
});

const closeBtn = document.querySelector("#modal-btn");
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  
});
