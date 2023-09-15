const navCategory = document.querySelectorAll("#nav-category");
const navSubcategory = document.querySelectorAll("#nav-subcategory");
const liNavSubcategory = document.querySelectorAll("#nav-subcategory li");
const liNavCategory = document.querySelectorAll("#nav-category li");
let oldTarget = false;
navCategory.forEach((elnavCategory) => {
  elnavCategory.addEventListener("click", function (e) {




    // let parentCategory = e.target.parentNode;
    // for (let childrenUl of parentCategory.children) {      
    //   if (oldTarget == e.target.innerHTML) {
    //     liNavCategory.forEach(eliNavCategory => {
    //         eliNavCategory.style.display = "none";            
    //     });
    //   } else {
    //     childrenUl.style.display = "block";
    //   }
    // }
    // oldTarget = e.target.textContent;



    console.log(e.target.style.display);
    let parentCategory = e.target.parentNode;
    liNavCategory.forEach(eliNavCategory => {
    for (let childrenUl of parentCategory.children) {      
      if (!e.target.classList.contains('subcategory')) {

            eliNavCategory.style.display = "none";            

      } 

    //   eliNavCategory.style.display = "block"; 
        childrenUl.style.display = "block";
    }
});
  });
});




