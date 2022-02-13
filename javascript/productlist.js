let start = 0;

function getData() {
    const url = "https://kea-alt-del.dk/t7/api/products?limit=6&start" + start;


    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            handleProductlist(data);

        });
}

function handleProductlist(data) {
    //console.log(data);
    data.forEach(showProduct);
}
document.querySelector(".loadNext").addEventListener("click", function () {
    start = start + 6;
    getData();
})

/*<article class="smallProduct">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
          alt="Sahara Team India Fanwear Round Neck Jersey" />
        <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
        <p class="subtle">Tshirts | Nike</p>
        <p class="price"><span>Prev.</span> DKK 1595,-</p>
        <div class="discounted">
          <p>Now DKK 1560,-</p>
          <p>-34%</p>
        </div>
        <a href="product.html">Read More</a>
      </article> */
function showProduct(product) {
    console.log(product);
    //grab the template
    const template = document.querySelector("#smallProductTemplate").content;
    //clone it
    const copy = template.cloneNode(true);
    //change content
    copy.querySelector("a").setAttribute('href', `product.html?id=${product.id}`);
    copy.querySelector(".subtle").textContent = ` ${product.articletype} | ${product.brandname}`;
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".smallProduct img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector(".price").textContent = product.price;
    copy.querySelector("p:nth-child(2)").textContent = `- ${product.discount} %`;
    if (product.soldout) {
        copy.querySelector("article").classList.add("soldOut");
    }
    if (product.discount) {
        copy.querySelector("article").classList.add("onSale");
        /*<div class="discounted">
        <p>Now DKK 1560,-</p>
        <p>-34%</p>
        </div> */
        copy.querySelector(".discounted p").textContent = Math.floor(product.price - (product.price * (product.discount / 100)));

    }

    //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);




}