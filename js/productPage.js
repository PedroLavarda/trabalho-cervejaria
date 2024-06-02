const title = document.getElementById("title");

document.addEventListener('DOMContentLoaded', () => { // Corrigido para 'DOMContentLoaded'
    // Recupera os dados do localStorage
    const produtoData = localStorage.getItem('productData'); // Use 'productData' aqui
    if (produtoData) {
        const data = JSON.parse(produtoData);
        const produtoDiv = document.getElementById('produto');
        
        // Cria elementos para exibir os dados do produto
        const nome = document.createElement('h1');
        nome.textContent = data.produto.name;
        
        const descricao = document.createElement('p');
        descricao.textContent = data.produto.w;
        
        const imagem = document.createElement('img');
        imagem.src = data.produto.image;
        imagem.classList.add("img-fluid", "h-75", "w-50", "align-self-center");
        imagem.alt = data.produto.name;

        // Adiciona os elementos ao div produto
        produtoDiv.appendChild(nome);
        produtoDiv.appendChild(descricao);
        produtoDiv.appendChild(imagem);

        // Exibe o JSON formatado (opcional)
        const jsonData = document.createElement('pre');
        jsonData.textContent = JSON.stringify(data, null, 2);
        produtoDiv.appendChild(jsonData);
    } else {
        console.error('Nenhum dado encontrado no localStorage');
    }
});