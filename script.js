let url = ""

function requisicao(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then((json) => appendData(json))

        .catch(function (err) {
            console.log('error: ' + err);
        });

}

function appendData(arquivo) {
    let mainContainer = document.getElementById("card");
    const { products, nextPage } = arquivo
    for (let i = 0; i < products.length; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.innerHTML += `<img src = ${products[i].image} alt="imagem do produto">`;
        cardDiv.innerHTML += `<p class="nome-produto"> ${products[i].name}</p>`;
        cardDiv.innerHTML += `<p class="description-produto">${products[i].description}</p>`;
        cardDiv.innerHTML += `<p class="valor-inicial">De: R$${products[i].oldPrice},00</p>`;
        cardDiv.innerHTML += `<p class="valor-promocional">Por: R$${products[i].price},00</p>`;
        cardDiv.innerHTML += `<p class="valor-parcelado">ou 2x de R$${products[i].price / 2}</p>`;
        cardDiv.innerHTML += `<p><button>Comprar</button></p>`
        mainContainer.appendChild(cardDiv);
    }
    url = `//${nextPage}`
    console.log(url)
}

function proximaPagina() {
    requisicao(url)
}