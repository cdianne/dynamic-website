const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleProductList(data);
    });

function handleProductList(data) {
    data.forEach(showProduct);
}


function showProduct(product) {
    console.log(product);
    //grab template
    const template = document.querySelector("#categoryTemplate").content;
    //clone template
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("a").textContent = product.brandname;
    copy
        .querySelector("a")
        .setAttribute(
            "href",
            `productlist.html?product&brandname=${product.brandname}`
        );

    //grab parent
    const parent = document.querySelector("main");
    //append child
    parent.appendChild(copy);
}