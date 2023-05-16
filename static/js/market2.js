var skins = [
    {
    "name": "Skin 1",
    "price": "$10",
    "image": "skin1.jpg"
    },
    {
    "name": "Skin 2",
    "price": "$15",
    "image": "skin2.jpg"
    },
    {
    "name": "Skin 3",
    "price": "$20",
    "image": "skin3.jpg"
    },
    {
    "name": "Skin 4",
    "price": "$25",
    "image": "skin4.jpg"
    },
    {
    "name": "Skin 5",
    "price": "$30",
    "image": "skin5.jpg"
    },
    {
    "name": "Skin 6",
    "price": "$35",
    "image": "skin6.jpg"
    }
    ];
var skinsContainer = document.getElementById("skins-container");

var currentRow = null;

function createSkins() {
        skinsContainer.innerHTML = "";
        for (var i = 0; i < skins.length; i++) {
            var skin = skins[i];
            var skinBox = document.createElement("div");
            skinBox.className = "skin-box";
            var skinImage = document.createElement("img");
            skinImage.src = skin.image;
            skinImage.alt = skin.name;

            var skinName = document.createElement("h3");
            skinName.textContent = skin.name;

            var skinPrice = document.createElement("p");
            skinPrice.textContent = skin.price;

            var buyButton = document.createElement("button");
            buyButton.className = "buy-button";
            buyButton.textContent = "Buy";

            skinBox.appendChild(skinImage);
            skinBox.appendChild(skinName);
            skinBox.appendChild(skinPrice);
            skinBox.appendChild(buyButton);
            if (i % 3 == 0) {
            currentRow = document.createElement("div");
            currentRow.className = "row";

            skinsContainer.appendChild(currentRow);
            }


            var column = document.createElement("div");
            column.className = "col-md-4";

            column.appendChild(skinBox);

            currentRow.appendChild(column);
            }
}

createSkins();

function sortSkins() {

var priceOrderFilter = document.getElementById("price-order-filter");

var priceOrderValue = priceOrderFilter.value;
if (priceOrderValue) {
    skins.sort(function(a, b) {
        var priceA = parseInt(a.price.replace("$", ""));
        var priceB = parseInt(b.price.replace("$", ""));
        if (priceOrderValue == "asc") {return priceA - priceB;} 
        else if (priceOrderValue == "desc") {return priceB - priceA;}
    });}
createSkins();
}