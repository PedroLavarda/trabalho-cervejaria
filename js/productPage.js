const title = document.getElementById("title");

document.addEventListener('DOMContentLoaded', () => { // Corrigido para 'DOMContentLoaded'
    // Recupera os dados do localStorage
    const produtoData = localStorage.getItem('productData'); // Use 'productData' aqui

    if (produtoData) {
        const data = JSON.parse(produtoData);

        const produtoElement = document.getElementById('produto');

        const produtoDiv = document.createElement("div");
        produtoDiv.style.display = "flex";
        
        // Cria elementos para exibir os dados do produto
        const imagem = document.createElement('img');
        imagem.src = data.image;
        imagem.classList.add("img-fluid");
        imagem.classList.add("h-150%");
        imagem.classList.add("w-150%");
        imagem.classList.add("align-self-center");
        imagem.style.marginLeft = "5rem";
        imagem.style.marginRight = "5rem";

        const textoDiv = document.createElement("div");
        textoDiv.style.marginRight = "5rem";

        const nome = document.createElement('h1');
        nome.innerHTML = data.name;
        nome.classList.add("h2");

        const preco = document.createElement('p');
        preco.innerHTML = "R$ "+data.price;
        preco.classList.add("h4");
        preco.style.marginTop = "2rem";
        
        const descricao = document.createElement('p');
        descricao.innerHTML = data.description;
        descricao.classList.add("text-secondary");
        descricao.style.marginTop = "2rem";

        const botoesDiv = document.createElement("div");
        botoesDiv.style.textAlign = "right";

        const button = document.createElement("button");
            button.textContent = "Adicionar ao carrinho";
            button.style.marginTop = "3rem";
            button.style.marginRight = "1rem";
            button.style.width = "15rem";
            button.style.height = "2rem";
            button.style.border = "none";
            button.style.borderRadius = "0.2rem";
            button.style.backgroundColor = "black";
            button.style.color = "white";
            button.style.alignSelf = "center";
            button.addEventListener('click', () => {
                window.location.href = 'carrinho.html';
            });

        const buttonComprar = document.createElement("button");
        buttonComprar.textContent = "Comprar agora";
        buttonComprar.style.marginTop = "3rem";
        buttonComprar.style.width = "15rem";
        buttonComprar.style.height = "2rem";
        buttonComprar.style.border = "none";
        buttonComprar.style.borderRadius = "0.2rem";
        buttonComprar.classList.add("btn-primary");
        buttonComprar.style.color = "white";
        buttonComprar.style.alignSelf = "center";
        buttonComprar.addEventListener('click', () => {
            window.location.href = 'carrinho.html';
        });

        // Adiciona os elementos ao div produto
        produtoDiv.appendChild(imagem);
        textoDiv.appendChild(nome);
        textoDiv.appendChild(preco);
        textoDiv.appendChild(descricao);
        botoesDiv.appendChild(button);
        botoesDiv.appendChild(buttonComprar);
        textoDiv.appendChild(botoesDiv);
        produtoDiv.appendChild(textoDiv);

        produtoElement.appendChild(produtoDiv);
    } else {
        console.error('Nenhum dado encontrado no localStorage');
    }
});