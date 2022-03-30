import footer from'./components/footer.js';
    document.getElementById("footer").innerHTML=footer();
var bathProducts = [
    {"name":"Freedom Reusable Menstrual Cup and Wash Pre Childbirth - Small (Under 30 Years)","price":"599","ratings":"","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Freedom-M-2_520x.jpg?v=1633670121"},{"name":" Freedom Cleansing Foaming Wash, Lactic Acid and Tea Tree Oil - 120 ml, Lactic Acid and Tea Tree Oil - 120 ml","price":"399","ratings":"","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Freedom-Wash-2_375x.jpg?v=1634026623"},{"name":" Freedom Reusable Menstrual Cup and Wash Post Childbirth - Large (Above 30 Years)","price":"399","image":"https://cdn.shopify.com/s/files/1/1375/4957/products/Freedom-L-1_375x.jpg?v=1633670250"}]
    var bathDiv = document.getElementById("bathDiv");

function appendProduct(bathProducts) {
    bathDiv.innerHTML = null;
    bathProducts.forEach(function (elem) {
        let image = document.createElement("img");
        image.src = elem.image;

        let name = document.createElement("p");
        name.innerText = elem.name;

        let price = document.createElement("p");
        price.innerText = "₹" + elem.price;

        // let ratings = document.createElement("p");
        // ratings.innerText = elem.ratings;

        let cartbtn = document.createElement("button");
        cartbtn.innerText = "Add to cart";
        cartbtn.setAttribute("id", "cartbtn");

        let box = document.createElement("div");
        box.append(image, name, price,  cartbtn);
        bathDiv.append(box);
    })
}
appendProduct(bathProducts);

document.querySelector("#sorter").addEventListener("click", sortByPrice);
function sortByPrice() {
    bathProducts.map(function (elem) {
        var sorting = document.querySelector("#sorter").value;
        console.log(sorting);
        if (sorting == "l2h") {
            bathProducts.sort(function (a, b) { return a.price - b.price })
            appendProduct(bathProducts)
        }
        else if (sorting == "h2l") {
            bathProducts.sort(function (a, b) { return b.price - a.price })
            appendProduct(bathProducts)
        }
        else if (sorting == "rl2h") {
            bathProducts.sort(function (a, b) { return a.ratings - b.ratings })
            appendProduct(bathProducts)
        }
        else if (sorting == "rh2l") {
            bathProducts.sort(function (a, b) { return b.ratings - a.ratings })
            appendProduct(bathProducts)
        }
        else if (sorting == "a2z") {
            function SortArray(x, y) {
                if (x.name < y.name) { return -1; }
                if (x.name > y.name) { return 1; }
                return 0;
            }
            var s = bathProducts.sort(SortArray)
            appendProduct(s)
        }
        else if (sorting == "z2a") {
            function SortArray(x, y) {
                if (x.name > y.name) { return -1; }
                if (x.name < y.name) { return 1; }
                return 0;
            }
            var s = bathProducts.sort(SortArray)
            appendProduct(s)
        }
    })
}