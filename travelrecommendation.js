let searchbtn = document.getElementById("searchbtn");
let clearbtn = document.getElementById("clearbtn");
let result = document.getElementById("resultContainer");
let mydiv = document.getElementById("dropdown");
let close = document.getElementById("close-btn");
let query = document.getElementById("searchinput");

const clearsearch = () => {
  query.value = "";
  mydiv.style.display = "none";
  console.log("Clearing");
};

clearbtn.addEventListener("click", clearsearch);

const showResult = (name, img, info) => {
  if (mydiv.style.display === "none" || mydiv.style.display === "") {
    mydiv.style.display = "block";
  } else {
    mydiv.style.display = "none";
  }
  result.innerHTML = `
    <h2 class="title">${name}</h2>
    <img class="search-img" src=${img} alt="destination image">
    <p class="description">${info}</p>
  `;
};

const closeDropdown = () => {
  mydiv.style.display = "none";
  query.value = "";
};

close.addEventListener("click", closeDropdown);

const searchError = () => {
  if (mydiv.style.display === "none" || mydiv.style.display === "") {
    mydiv.style.display = "block";
  } else {
    mydiv.style.display = "none";
  }

  result.innerHTML = `<p class="notfound">Sorry we can't find your search</p>`;
};

const search = () => {
  let searchQuery = query.value.toLowerCase();
  let notfound = true;

  // Search through countries, cities, temples, and beaches
  data.countries.forEach((country) => {
    country.cities.forEach((city) => {
      if (city.name.toLowerCase().includes(searchQuery)) {
        showResult(city.name, city.imageUrl, city.description);
        notfound = false;
      }
    });
  });

  data.temples.forEach((temple) => {
    if (temple.name.toLowerCase().includes(searchQuery)) {
      showResult(temple.name, temple.imageUrl, temple.description);
      notfound = false;
    }
  });

  data.beaches.forEach((beach) => {
    if (beach.name.toLowerCase().includes(searchQuery)) {
      showResult(beach.name, beach.imageUrl, beach.description);
      notfound = false;
    }
  });

  if (notfound) {
    searchError();
  }
};

searchbtn.addEventListener("click", search);