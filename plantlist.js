const urlParams = new URLSearchParams(window.location.search);
const species = urlParams.get("species");

const url = "https://keasem2-6806.restdb.io/rest/plant?species="; +species

const options = {
  headers: {
    "x-apikey": "61361b1443cedb6d1f97ed4f",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(plants) {
  plants.forEach((plant) => {
    console.log(plant);
    //make template
    //grab it
    const template = document.querySelector("template").content;
    //clone it
    const clone = template.cloneNode(true);
    //populate with data
    clone.querySelector("h1.listh1").textContent = plant.name;
    clone.querySelector(".link").setAttribute("href", "plant.html?id=" + plant.id);
    clone.querySelector("img").src = plant.image;
    // clone.querySelector("h1.name-species").textContent = plant.species;

    // clone.querySelector("h3.cname").textContent = plant.commonname;
    // clone.querySelector("h3.ds").textContent = plant.directsunlight;
    // clone.querySelector("h3.flowers").textContent = plant.flowers;
    // clone.querySelector("h3.lname").textContent = plant.latinname;
    // clone.querySelector("h3.pname").textContent = plant.plantname;
    // clone.querySelector("h3.wf").textContent = plant.wateringfrequency;
    //append it to DOM
    const mainEl = document.querySelector("main");
    // const mainEl = document.querySelector("body");
    mainEl.appendChild(clone);
  });
}
