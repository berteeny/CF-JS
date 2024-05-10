let characterRepository = (function () {
  let castList = [
    {
      name: "George",
      age: 31,
      types: ["bald", "unemployed"],
    },
    {
      name: "Elaine",
      age: 27,
      types: ["loud", "curly"],
    },
    {
      name: "Jerry",
      age: 35,
      types: ["funny", "single"],
    },
    {
      name: "Kramer",
      age: 39,
      types: ["tall", "twitchy"],
    },
  ];

  function getAll() {
    return castList;
  }

  function add(castMember) {
    if (typeof castMember !== "object") {
      return "Not an Object";
    } else {
      castList.push(castMember);
    }
  }

  function addListItem(character) {
    let castList = document.querySelector(".cast-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = character.name;
    button.classList.add("btn");
    listItem.appendChild(button);
    castList.appendChild(listItem);
    addHandler(button, character); //add event handler to button
  }

  //listen for clicks on button and call showDetails function for character who's button was clicked
  function addHandler(button, character) {
    button.addEventListener("click", function () {
      showDetails(character);
    });
  }

  function showDetails(character) {
    console.log(character);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

characterRepository.getAll().forEach(function (character) {
  characterRepository.addListItem(character);
});
