const urlParams = new URLSearchParams(window.location.search);
// const subcat = urlParams.get("title");
const url = "https://keasem2-6806.restdb.io/rest/plant?max=4";

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
        // console.log(data);
        showNavSpecies(data);
    })

function showNavSpecies(data) {
    console.log(data);
    data.forEach(showSpecies);
}

function showSpecies(obj) {
    console.log(obj);
    const template = document.querySelector(".navlist").content;
    const clone = template.cloneNode(true);
    clone.querySelector("span").textContent = obj.Species;
    // clone.querySelector("img.firstimage").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    const parent = document.querySelector("main");
    parent.appendChild(clone);
}