async function getTrashBinList() { // Defineerin asünkroonse funktsiooni nimega getProductsData. 
    const response = await fetch('http://localhost:3000/kastid'); // defineerin muutuja nimega response, ootan vastuse API päringusse ja salvestan muutujasse response
    const data = await response.json(); // Ootame kuni response muudetakse JSON formaati ning võtame response seest 'key' nimega products ja salvestame samanimelisse muutujasse
    console.log(data); // console logib products data
    return data; // tagastab muutuja products
}

async function showTrashBinList() {
    const data = await getTrashBinList()
    const TrashBinListElement = document.querySelector('.table-body')

    data.forEach((item) => {
        const tableRow = document.createElement('tr')
        const content =`
            <tr>
                <td>${item.name}</td>
                <td>${item.color}</td>
            </tr>
        `
        tableRow.innerHTML = content;
        TrashBinListElement.append(tableRow)
    })
}
showTrashBinList()