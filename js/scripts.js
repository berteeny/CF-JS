let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if (typeof pokemon !== "object") {
      return "Not an Object";
    } else {
      pokemonList.push(pokemon);
    }
  }

  function addListItem(pokemon) {
    let pokeList = document.querySelector(".poke-list");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    //button
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.setAttribute("data-target", "#modal-container");
    button.setAttribute("data-toggle", "modal");

    listItem.appendChild(button);
    pokeList.appendChild(listItem);
    addHandler(button, pokemon); //add event handler to button
  }

  //listen for clicks on button and call showDetails function for pokemon whose button was clicked
  function addHandler(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        item.weight = details.weight;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
      // showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
      openDetails(pokemon);
    });
  }

  function openDetails(pokemon) {
    let pokeDetails =
      "Height: " + pokemon.height + "<br />" + "Weight: " + pokemon.weight;

    // add name into modal heading
    let modalTitle = document.querySelector(".modal-title");
    modalTitle.innerHTML = pokemon.name;

    //add details (H & W)
    let modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = pokeDetails;

    //add image
    let pokeImg = document.querySelector(".pokeImg");
    pokeImg.setAttribute("src", pokemon.imageUrl);
  }

  function closeModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("visible");
  }

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("visible")) {
      closeModal();
    }
  });

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
