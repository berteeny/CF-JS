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

// writes character's name + age in document
castList.forEach(function (character) {
  document.write(
    `${character.name}${" (age "}${character.age}${")"}${"<br />"}`
  );
});
