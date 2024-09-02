// fetch related products

fetch("/products.json")
    .then((res) => res.json())
    .then((data) => {
        const relatedProducts = document.getElementById("relatedProducts");

        const prodRow = document.createElement("div");
        prodRow.classList.add("row", "gap-5", "mb-5");
        prodRow.style.width = "80vw";

        let count = 0;
        let j = 2;

        if(window.innerWidth >= 1024) {
            while(count < 3) {
                const prodCol = document.createElement("div");
                prodCol.classList.add("card", "col", "product");

                const img = document.createElement("img");
                img.src = data[j]["image"];
                img.classList.add("img-fluid", "h-75", "w-50", "align-self-center");

                const name = document.createElement("h5");
                name.innerHTML = data[j]["name"];
                name.style.marginTop = "10px";

                const price = document.createElement("p");
                price.innerHTML = "R$ "+data[j]["price"];
                price.style.marginTop = "10px";

                const button = document.createElement("button");
                button.textContent = "Ver produto";
                button.style.margin = "10px 2px";
                button.style.width = "15rem";
                button.style.height = "2rem";
                button.style.border = "none";
                button.style.borderRadius = "0.2rem";
                button.style.backgroundColor = "black";
                button.style.color = "white";
                button.style.alignSelf = "center";
                button.setAttribute('data-index', j);
                button.addEventListener('click', () => {
                    const index = button.getAttribute('data-index');

                    fetch('/products.json')
                    .then(response => response.json())
                    .then(data => {
                        // Armazena os dados no localStorage
                        localStorage.setItem('productData', JSON.stringify({
                            id: data[index]["id"],
                            name: data[index]["name"],
                            price: data[index]["price"],
                            image: data[index]["image"],
                            description: data[index]["description"],
                        }));
                        
                        window.location.href = 'productPage.html';
                    })
                    .catch(error => console.error('Erro ao carregar o JSON:', error));
                });

                prodCol.appendChild(img);
                prodCol.appendChild(name);
                prodCol.appendChild(price);
                prodCol.appendChild(button);

                prodRow.appendChild(prodCol);
                j = j + 1;
                count++;
                relatedProducts.appendChild(prodRow);
            }
            count = 0;
        } else {
            while(count < 2) {
                relatedProducts.style.width = "80vw";

                const titulo = document.getElementById("titulo-relacionados");
                titulo.classList.remove("ms-5");

                const prodCol = document.createElement("div");
                prodCol.classList.add("card", "col");

                const img = document.createElement("img");
                img.src = data[j]["image"];
                img.classList.add("img-fluid", "align-self-center");

                const name = document.createElement("h5");
                name.innerHTML = data[j]["name"];
                name.style.marginTop = "10px";

                const price = document.createElement("p");
                price.innerHTML = "R$ "+data[j]["price"];
                price.style.marginTop = "10px";

                const button = document.createElement("button");
                button.classList.add("bi-bag");
                button.style.margin = "10px 2px";
                button.style.width = "8rem";
                button.style.height = "2rem";
                button.style.border = "none";
                button.style.borderRadius = "0.2rem";
                button.style.backgroundColor = "black";
                button.style.color = "white";
                button.style.alignSelf = "center";
                button.setAttribute('data-index', j);
                button.addEventListener('click', () => {
                    const index = button.getAttribute('data-index');

                    fetch('/products.json')
                    .then(response => response.json())
                    .then(data => {
                        // Armazena os dados no localStorage
                        localStorage.setItem('productData', JSON.stringify({
                            id: data[index]["id"],
                            name: data[index]["name"],
                            price: data[index]["price"],
                            image: data[index]["image"],
                            description: data[index]["description"],
                        }));
                        
                        window.location.href = 'productPage.html';
                    })
                    .catch(error => console.error('Erro ao carregar o JSON:', error));
                });

                prodCol.appendChild(img);
                prodCol.appendChild(name);
                prodCol.appendChild(price);
                prodCol.appendChild(button);

                prodRow.appendChild(prodCol);
                j = j + 1;
                count++;
                relatedProducts.appendChild(prodRow);
            }
            count = 0;
        }
    })