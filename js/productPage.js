const title = document.getElementById("title");

document.addEventListener('DOMContentLoaded', () => { // Corrigido para 'DOMContentLoaded'
    // Recupera os dados do localStorage
    const produtoData = localStorage.getItem('productData'); // Use 'productData' aqui

    if (produtoData) {
        const data = JSON.parse(produtoData);

        const produtoElement = document.getElementById('produto');

        const produtoDiv = document.createElement("div");
        
        // Cria elementos para exibir os dados do produto
        const nome = document.createElement('h1');
        nome.innerHTML = data.name;
        
        const descricao = document.createElement('p');
        descricao.innerHTML = data.description;
        
        const imagem = document.createElement('img');
        imagem.src = data.image;
        imagem.classList.add("img-fluid");
        imagem.classList.add("h-75");
        imagem.classList.add("w-50");
        imagem.classList.add("align-self-center");

        // Adiciona os elementos ao div produto
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(descricao);
        produtoDiv.appendChild(imagem);

        produtoElement.appendChild(produtoDiv);
    } else {
        console.error('Nenhum dado encontrado no localStorage');
    }
});