const cart = [];

document.addEventListener('DOMContentLoaded', () => { 
    const produtoData = localStorage.getItem('productData');

    if (produtoData) {

        const data = JSON.parse(produtoData);

        document.title = 'Produto - ' + data.name;

        const produtoElement = document.getElementById('produto');

        const produtoDiv = document.createElement("div");
        produtoDiv.style.display = "flex";
        
        const imagem = document.createElement('img');
        imagem.src = data.image;
        imagem.classList.add("img-fluid", "align-self-center");
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
            button.addEventListener('click', (e) => {
                e.preventDefault();
                if(localStorage.getItem("activeUser") != null) {
                    let cartData = JSON.parse(localStorage.getItem("cartData"));
                    let currP = null;
                    
                    if(cartData != null) {
                        cartData.forEach((item) => {
                            cart.push(item);
    
                            if(item.id === data.id) {
                                currP = item;
                                item.quantity += 1;
                            }
                        });
                    }

                    if(cartData === null || cartData.length === 0 || !currP) {
                        cart.push({
                            id: data.id,
                            name: data["name"],
                            price: data["price"],
                            image: data["image"],
                            description: ["description"],
                            quantity: 1
                        });
                    } 

                    localStorage.setItem("cartData", JSON.stringify(cart));

                    window.location.href = 'cart.html';
                } else{
                    window.alert('Usuário deve estar logado para adicionar um item ao carrinho.');
                    window.location.href = 'login.html'
                }
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
            const user = JSON.parse(localStorage.getItem('activeUser'));
            
            if (user != null) {
                window.location.href = 'cart.html';
            } else {
                window.alert('Usuario deve estar logado para comprar um item.');
            }
        });

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