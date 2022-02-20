const url = "https://kea-alt-del.dk/t7/api/products"
fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        handleBrandlist(data);

    });


function handleBrandlist(data) {
    //console.log(data);
    data.forEach(showBrand);
}


function showBrand(product) {
    console.log(product);
    //grab the template
    const template = document.querySelector("#letterGroupTemplate").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("a").setAttribute('href', `product.html?id=${product.id}`);
    copy.querySelector("li.brandname").textContent = product.brandname;
}