const urlParams = new URLSearchParams(window.location.search);
// const subcat = urlParams.get("title");
const url = "https://keasem2-6806.restdb.io/rest/plant?max=1";
// var flowers = obj.flowers (true);

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
        showPlant(data);
    })

function showPlant(data) {
    console.log(data);
    data.forEach(showInfo);
}

function showInfo(obj) {
    console.log(obj);
    const template = document.querySelector(".plantcard").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = obj.name;
    clone.querySelector(".latinname").textContent = obj.latinname;
    clone.querySelector(".species").textContent = obj.species;
    clone.querySelector(".description").textContent = obj.description;
    clone.querySelector(".watering span").textContent = obj.watering;
    clone.querySelector(".productimg").src = obj.watering;
    clone.querySelector("img").src = obj.image;
    clone.querySelector("img").alt = obj.name;

//     if (flowers) {
//         clone.querySelector("flowers span").textContent = "Yes";
//     }
//     else {        clone.querySelector("flowers span").textContent = "No";
// }

    const parent = document.querySelector("main");
    parent.appendChild(clone);
}