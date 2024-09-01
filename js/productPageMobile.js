const cart = [];

document.addEventListener('DOMContentLoaded', () => { 
    const produtoData = localStorage.getItem('productData');

    if(window.innerWidth < 1024) {
        if (produtoData) {

            const main = document.getElementById('main');
            main.classList.remove("mt-5", "pt-5");

            const data = JSON.parse(produtoData);

            document.title = 'Produto - ' + data.name;

            const produtoElement = document.getElementById('produto');

            const produtoDiv = document.createElement("div");
            produtoDiv.style.display = "block";

            const imgDiv = document.createElement("div");
            imgDiv.style.width = "70vw";
            imgDiv.style.height = "15rem";
            
            const imagem = document.createElement('img');
            imagem.src = data.image;
            imagem.classList.add("img-fluid", "align-self-center", "ps-5", "ms-5");
            imagem.style.width = "120%";
            imagem.style.height = "15rem";
            imagem.style.marginLeft = "5rem";
            imagem.style.marginRight = "4rem";

            imgDiv.appendChild(imagem);

            const textoDiv = document.createElement("div");
            textoDiv.id = "textoDiv";
            textoDiv.style.marginRight = "5rem";
            textoDiv.style.padding = "5px";

            const nome = document.createElement('h1');
            nome.innerHTML = data.name;
            nome.classList.add("h2");
            nome.style.marginTop = "10px";

            const preco = document.createElement('p');
            preco.innerHTML = "R$ "+data.price + " à vista";
            preco.classList.add("h4");
            preco.style.marginTop = "1rem";

            const parcela = document.createElement('span');
            parcela.textContent = "ou 4x de R$ "+data.price/4+"*";
            parcela.classList.add("text-muted", "h6")
            
            const descDiv = document.createElement("div");
            descDiv.classList.add("justify-content-center", "w-100");
            descDiv.id = "descricao-item";

            const descricao = document.createElement('p');
            descricao.innerHTML = data.description;
            descricao.classList.add("text-secondary");
            descricao.style.marginTop = "0.5rem";
            descricao.style.width = "98vw";

            descDiv.appendChild(descricao);

            const botaoDiv = document.createElement("div");
            botaoDiv.style.textAlign = "center";
            botaoDiv.style.width = "100vw";

            const botaoDivComprar = document.createElement("div");
            botaoDivComprar.style.textAlign = "center";
            botaoDivComprar.style.width = "100vw";

            const button = document.createElement("button");
                button.textContent = "Adicionar ao carrinho";
                button.style.marginTop = "2rem";
                button.style.marginRight = "1rem";
                button.style.width = "20rem";
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
            buttonComprar.style.marginTop = "1rem";
            buttonComprar.style.marginRight = "1rem";
            buttonComprar.style.width = "20rem";
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

            produtoDiv.appendChild(imgDiv);
            textoDiv.appendChild(nome);
            textoDiv.appendChild(preco);
            textoDiv.appendChild(parcela);
            textoDiv.appendChild(descDiv);
            botaoDiv.appendChild(button);
            botaoDivComprar.appendChild(buttonComprar);
            textoDiv.appendChild(botaoDiv);
            textoDiv.appendChild(botaoDivComprar);
            produtoDiv.appendChild(textoDiv);
            produtoElement.appendChild(produtoDiv);

            const footer = document.getElementById("footer");
            footer.classList.remove("pt-5");
            footer.classList.add("pt-2");
        } else {
            console.error('Nenhum dado encontrado no localStorage');
        }
    }
});