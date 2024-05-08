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

for (let i = 0; i < castList.length; i++) {
  let castAge = castList[i].age;
  let castName = castList[i].name;

  if (castList[i].age < 30) {
    document.write(
      castName + " (age " + castAge + ")" + " -Wow, still just a baby! <br />" // separates characters under age 30
    );
  } else {
    document.write(castName + " (age " + castAge + ")" + "<br />"); // all characters over age 30
  }
}
