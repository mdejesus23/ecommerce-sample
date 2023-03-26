function filterItems(category) {
    const allItems = document.querySelectorAll(".product-container");

    if (category == "all") category = "product-container";

    allItems.forEach(element => {
        removeClass(element, "show-item");

        const arrOfClassNames = element.className.split(" ");

        if (arrOfClassNames.indexOf(category) > -1) {
            // console.log(element.className.length)
            addClass(element, "show-item")
        }
    });
}

filterItems("all");

function removeClass(element, showClassName) {
   const arrOfClassNames = element.className.split(" ");

    if (arrOfClassNames.indexOf(showClassName) > -1) {
        arrOfClassNames.splice(arrOfClassNames.indexOf(showClassName), 1)
    }

    element.className = arrOfClassNames.join(" ");
}

function addClass(element, showClassName) {
   const arrOfClassNames = element.className.split(" ");

   if (arrOfClassNames.indexOf(showClassName) == -1) {
        element.className += " " + showClassName;
   }

}