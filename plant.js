const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://keasem2-6806.restdb.io/rest/plant/" +id;

const key = {
    headers: {
        "x-apikey": "61361b1443cedb6d1f97ed4f",
    },
};

console.log("hello?");

fetch(url, key)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        showPlant(data);
        console.log(data);
    })

function showPlant(obj) {
    console.log(obj);
    document.querySelector("h1").textContent = obj.name;
    document.querySelector(".latinname span").textContent = obj.latinname;
    document.querySelector(".species span").textContent = obj.species;
    document.querySelector(".description span").textContent = obj.description;
    document.querySelector(".watering span").textContent = obj.watering;
    document.querySelector(".productimg").src = obj.watering;
    document.querySelector("img").src = obj.image;
    document.querySelector("img").alt = obj.name;

    if (obj.flowers) {
        document.querySelector(".flowers span").textContent = "Yes";
    }
    else {        document.querySelector(".flowers span").textContent = "No";
}
if (obj.directsunlight) {
        document.querySelector(".directsunlight span").textContent = "Yes";
    }
    else {        document.querySelector(".directsunlight span").textContent = "No";
}}
