let i, products = document.getElementsByClassName('product'); // get all products

for (i = 0; i < products.length; i++) {
    products[i].onclick = function() {
        showInfo(this.id)
    }; // add onclick Event to all products
}

function showInfo(id) {
    let x, infos = document.getElementsByClassName('info'); // get all infos
    for (x = 0; x < infos.length; x++) {
        (infos[x].id === 'info-' + id) ? infos[x].className = 'info': infos[x].className = 'info hidden'; // Show info for clicked product only
    }
}

window.onload = async () => {
    try {
        const response = await fetch('/products.json');
        const data = await response.json();

        localStorage.setItem("products", JSON.stringify(data))
    } catch (e) {
        console.log('Erro: ' + e);
    }
}