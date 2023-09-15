const searchContainer = document.querySelector("#search-container");
const searchInput = searchContainer.querySelector("#search-input");
const searchButton = searchContainer.querySelector("#search-btn");
const showAlwers = document.querySelector("#show-alwers");
const containerResult = document.querySelector("#container-result");
const mastHelpSearchResult = containerResult.querySelectorAll(
  ".mast-help-search-result"
);
const tagSearch = containerResult.querySelectorAll("span");

// Работа с запросом imput
searchContainer.addEventListener("submit", anwersunction);

function anwersunction(event) {
  event.preventDefault();
  mastHelpSearchResult.forEach((el) => {
    let pSearch = el.querySelector("#search-tag");
    console.log(pSearch);
    if (pSearch.innerText.toLowerCase().search(searchInput.value.toLowerCase()) > -1) {
      el.style.display = "block";
      console.log("Работает");
    } else {
      el.style.display = "none";
    }
  });

  searchInput.value = "";
  searchInput.focus();
}
// Работаем с тегами
tagSearch.forEach((elementTagSearch) => {
  elementTagSearch.addEventListener("click", function (event) {
    tagSearch.forEach((tagResult) => {
      if (tagResult.innerText == event.target.innerText) {
        mastHelpSearchResult.forEach((elementMastHelpSearchResult) => {
          let constructTag = event.target.innerText;
          for (let clildTag of elementMastHelpSearchResult.children) {            
            if (clildTag.textContent == constructTag) {
                return elementMastHelpSearchResult.style.display = 'block';
            } else {
                elementMastHelpSearchResult.style.display = 'none';
            }
          }
        });
      }
    });
  });
});
