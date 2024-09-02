// load featured products

fetch("/products.json")
    .then((res) => res.json())
    .then((data) => {
        const featured = document.getElementById("topProducts");

        let j = 0;
        let count = 0;

        if(window.innerWidth >= 1024) {
            for(let i = 0; i < 2; i++) {
                const prodRow = document.createElement("div");
                prodRow.classList.add("row", "gap-5", "mb-5");

                while(count < 3) {
                    const prodCol = document.createElement("div");
                    prodCol.classList.add("card", "col", "product");
                    prodCol.id = data[j]["id"];

                    const img = document.createElement("img");
                    img.src = data[j]["image"];
                    img.classList.add("img-fluid", "h-57", "w-50", "align-self-center");

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

                        fetch('products.json')
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

                    j++;
                    count++;
                    featured.appendChild(prodRow);
                }
                count = 0;
            }
        } else {
            for(let i = 0; i < 3; i++) {
                const prodRow = document.createElement("div");
                prodRow.classList.add("row", "gap-5", "mb-5");

                const titulo = document.getElementById("titulo-destaques");
                titulo.classList.remove("ms-5");
                titulo.classList.add("ms-3");
    
                while(count < 2) {
                    const prodCol = document.createElement("div");
                    prodCol.classList.add("card", "col", "product");
                    prodCol.id = data[j]["id"];
    
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
                    button.style.paddingLeft = "3rem";
                    button.style.paddingRight = "4rem";
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
    
                        fetch('products.json')
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
    
                    j++;
                    count++;
                    featured.appendChild(prodRow);
    
                    if (window.innerWidth >= 410 && window.innerWidth <= 1024) {
                        img.classList.remove("h-57", "w-50");
                        button.textContent = "";
                        button.classList.add("bi-bag");
                        button.style.width = "3rem";
                    } else {
                        img.classList.add("h-57", "w-50");
                    }
                }
                count = 0;
            }
        }
    })