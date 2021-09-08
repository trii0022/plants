const urlParams = new URLSearchParams(window.location.search);
const species = urlParams.get("species");

const url = "https://keasem2-6806.restdb.io/rest/plant?species="; +species

const key = {
  headers: {
    "x-apikey": "61361b1443cedb6d1f97ed4f",
  },
};
fetch(url,key)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleData(data);
    })

function handleData(data) {
    // console.log(data);
    data.forEach(showData);
}


function showData(plant) {

    console.log(plant);
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h1.listh1").textContent = plant.name;
    clone.querySelector(".link").setAttribute("href", "plant.html?id=" + plant.id);
    clone.querySelector("img").src = plant.image;
    const mainEl = document.querySelector("main");
    // const mainEl = document.querySelector("body");
    mainEl.appendChild(clone);
  }