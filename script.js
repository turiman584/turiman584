const products = [
    {
        name: "Kemeja modern",
        price: "Rp 175.000",
        image: "images/baju1.jpg"
    },
    {
        name: "Kaos bahan premium",
        price: "Rp 85.000",
        image: "images/baju2.jpg"
    },
    {
        name: "Hoodie tebal berkualitas",
        price: "Rp 197.000",
        image: "images/baju3.jpg"
    }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productCard = `
        <div class="col-md-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary" onclick="buyProduct('${product.name}')">Beli Sekarang</button>
                </div>
            </div>
        </div>
    `;
    productList.innerHTML += productCard;
});

function buyProduct(productName) {
    alert(`Anda telah membeli ${productName}! Terima kasih atas pembelian Anda.`);
}