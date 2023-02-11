// You'll use JavaScript array methods to manipulate the data and display the results to the user.
console.log("Hello World");
//array with list of object
const movies = [
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Godfather", genre: "Crime" },
  { title: "The Godfather: Part II", genre: "Crime" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "12 Angry Men", genre: "Drama" },
  { title: "Schindler's List", genre: "Drama" },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Adventure",
  },
  { title: "Pulp Fiction", genre: "Crime" },
  { title: "The Good, the Bad and the Ugly", genre: "Western" },
  { title: "Fight Club", genre: "Drama" },
  { title: "Forrest Gump", genre: "Drama" },
  { title: "Inception", genre: "Action" },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
  },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
  { title: "The Matrix", genre: "Action" },
  { title: "Goodfellas", genre: "Crime" },
  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  { title: "Seven Samurai", genre: "Adventure" },
  { title: "Se7en", genre: "Crime" },
  { title: "City of God", genre: "Crime" },
  { title: "The Silence of the Lambs", genre: "Thriller" },
  { title: "It's a Wonderful Life", genre: "Drama" },
  { title: "Life is Beautiful", genre: "Comedy" },
  { title: "The Usual Suspects", genre: "Crime" },
  { title: "Léon: The Professional", genre: "Action" },
  { title: "Spirited Away", genre: "Animation" },
  { title: "Saving Private Ryan", genre: "Drama" },
  { title: "Interstellar", genre: "Adventure" },
  { title: "The Green Mile", genre: "Drama" },
  { title: "The Prestige", genre: "Drama" },
  { title: "The Intouchables", genre: "Comedy" },
  { title: "The Lion King", genre: "Animation" },
  { title: "The Pianist", genre: "Drama" },
  { title: "The Departed", genre: "Crime" },
  { title: "Whiplash", genre: "Drama" },
  { title: "Gladiator", genre: "Action" },
];
// let movies=[];
// localStorage.setItem

console.log(movies);
const titleInput = document.getElementById("title");
const genreInput = document.getElementById("genre");
const tag = document.getElementById("results");
// const sortByTitle = document.getElementById("sortByTitle");
// const sortByGenre = document.getElementById("sortByGenre");
let searchResults = [];

document.getElementById("search").addEventListener("click", function (event) {
  console.log("Button Clicked");
  tag.innerHTML = "";
  if (titleInput.value) {
    searchResults = searchByTitle(titleInput.value.trim());
    console.log(searchResults);
    // displayResult(result);
  } else if (genreInput.value) {
    searchResults = searchByGenre(titleInput.value.trim());
    console.log(searchResults);
    // displayResult(GenreResult);
  }
  displayResult(searchResults);
});

function searchByTitle(searchTerm) {
  console.log("Search by title");
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
}

function searchByGenre(searchTerm) {
  console.log("Search by genre");
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
}

function displayResult(list) {
  let tag = document.getElementById("results");
  list.map((ele) => {
    let childTag = `<li>${ele.title}${ele.genre}</li>`;
    console.log(childTag);
    tag.innerHTML += childTag; //it uppending
  });
  //   localStorage.setItem('movieListToSave',JSON.stringify(list))
  countByGenre(list);
}

function sortByTitle() {
  console.log("Sorted Title called");
  const sortedMovie = searchResults.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  displayResult(sortedMovie);
}

function sortByGenre() {
  console.log("Sorted Genre called");
  const sortedMovie = searchResults.sort((a, b) =>
    a.genre.localeCompare(b.genre)
  );
  displayResult(sortedMovie);
}

function countByGenre(list) {
  let countObj = {};
  list.map((item) => {
    if (countObj[item.genre]) {
      countObj[item.genre]++;
    } else {
      countObj[item.genre] = 1;
    }

    //alternative 2
    countObject[item.genre] = (countObject[item.genre] | 0) + 1;
  });
  countTag.innerHTML = "";
  for (key in countObject) {
    console.log(key);
    countTag.innerHTML += `<li>${key} : ${countObject[key]}</li>`;
  }
}

function searchBoth(title, genre) {
  return movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase().trim()) &&
      movie.genre.toLowerCase().includes(genre.toLowerCase().trim())
  );
}

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");
const drTitle = document.getElementById("drTitle");
const drGenre = document.getElementById("drGenre");
const drBoth = document.getElementById("drBoth");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
  //console.log("Button Clicked");
  drTitle.addEventListener("click",function (e){
   return sortByTitle();
  })
  drGenre.addEventListener("click",function (e){
   return sortByGenre();
  })
  drBoth.addEventListener("click",function (e){
   return searchBoth();
  })
  
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});
