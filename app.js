async function getProductsData() { // Defineerin asünkroonse funktsiooni nimega getProductsData. 
    const response = await fetch('https://dummyjson.com/products'); // defineerin muutuja nimega response, ootan vastuse API päringusse ja salvestan muutujasse response
    const { products } = await response.json(); // Ootame kuni response muudetakse JSON formaati ning võtame response seest 'key' nimega products ja salvestame samanimelisse muutujasse
    console.log(products); // console logib products data
    return products; // tagastab muutuja products
}

async function showProductList() {
    const product = await getProductsData()
    const productListElement = document.querySelector('.table-body')

    product.forEach((product) => {
        const tableRow = document.createElement('tr')
        const content =`
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.rating}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.discountPercentage}</td>

            </tr>
        `
        tableRow.innerHTML = content;
        productListElement.append(tableRow)
    })
}
showProductList()