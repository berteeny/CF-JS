//prettier-ignore
let pokemonRepository=function(){let t=[];function e(){return t}function n(e){if("object"!=typeof e)return"Not an Object";t.push(e)}function o(t){pokemonRepository.loadDetails(t).then(function(){var e;let n;console.log(t),n="Height: "+(e=t).height+"<br />Weight: "+e.weight,document.querySelector(".modal-title").innerHTML=e.name,document.querySelector(".modal-body").innerHTML=n,document.querySelector(".pokeImg").setAttribute("src",e.imageUrl)})}return window.addEventListener("keydown",t=>{let e=document.querySelector("#modal-container");"Escape"===t.key&&e.classList.contains("visible")&&document.querySelector("#modal-container").classList.remove("visible")}),{getAll:e,add:n,addListItem:function t(e){let n=document.querySelector(".poke-list"),i=document.createElement("li");i.classList.add("list-group-item");let r=document.createElement("button");r.innerText=e.name,r.classList.add("btn"),r.classList.add("btn-primary"),r.setAttribute("data-target","#modal-container"),r.setAttribute("data-toggle","modal"),i.appendChild(r),n.appendChild(i),function t(e,n){e.addEventListener("click",function(){o(n)})}(r,e)},loadList:function t(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return console.log(t),t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:function t(e){return fetch(e.detailsUrl).then(function(t){return t.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types,e.weight=t.weight}).catch(function(t){console.error(t)})},showDetails:o}}();
//prettier-ignore
pokemonRepository.loadList().then(function () {pokemonRepository.getAll().forEach(function (t) {pokemonRepository.addListItem(t);});});
