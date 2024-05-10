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
    castList.push(castMember);
  }

  return {
    getAll: getAll,
    add: add,
  };
})();

// writes charatcer name and age in document
characterRepository.getAll().forEach(function (character) {
  document.write(
    `${character.name}${" (age "}${character.age}${")"}${"<br />"}`
  );
});
