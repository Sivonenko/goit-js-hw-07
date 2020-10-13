"use strict";
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector("#gallery");

const galleryPhoto = images.map((image) => {
  const galleryList = document.createElement("li");
  galleryList.classList.add("gallery-item");
  const createImage = document.createElement("img");
  createImage.src = image.url;
  createImage.alt = image.alt;
  galleryList.append(createImage);
  return galleryList;
});

galleryRef.append(...galleryPhoto);
