const urlParams = new URLSearchParams(window.location.search);
const species = urlParams.get("species");
// https://keasem2-6806.restdb.io/rest/plant?q={"species": "SUCCULENTS"}
// const url = "https://keasem2-6806.restdb.io/rest/plant?species="; +species;

const url = `https://keasem2-6806.restdb.io/rest/plant?q={"species": "${species}"}`;
console.log(url);

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
    console.log(data);
    data.forEach(showData);
}


function showData(obj) {
    console.log(obj);
    console.log("yo");
    const template = document.querySelector(".speciestemp").content;
    const clone = template.cloneNode(true);
    clone.querySelector(".speciesh1").textContent = obj.species;
    // clone.querySelector("img").src = obj.image;
    const mainEl = document.querySelector("main");
    // const mainEl = document.querySelector("body");
    mainEl.appendChild(clone);
  }