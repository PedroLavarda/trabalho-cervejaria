fetch("/products.json")
    .then((res) => res.json())
    .then((data) => {
        const topProducts = document.getElementById("load-essentials");

        let j = 0;
        let count = 0;

        for(let i = 0; i < 1; i++) {
            const prodRow = document.createElement("div");
            prodRow.classList.add("row");
            prodRow.classList.add("gap-5");
            prodRow.classList.add("mb-5");

            while(count < 3) {
                const prodCol = document.createElement("div");
                prodCol.classList.add("card");
                prodCol.classList.add("col");

                const img = document.createElement("img");
                img.src = data[j]["image"];
                img.classList.add("img-fluid");
                img.classList.add("h-75");
                img.classList.add("w-50");
                img.classList.add("align-self-center");

                const name = document.createElement("h5");
                name.innerHTML = data[j]["name"];

                const description = document.createElement("p");
                description.innerHTML = data[j]["description"];

                const price = document.createElement("p");
                price.innerHTML = data[j]["price"];

                prodCol.appendChild(img);
                prodCol.appendChild(name);
                prodCol.appendChild(description);
                prodCol.appendChild(price);

                prodRow.appendChild(prodCol);

                j++;
                count++;
                topProducts.appendChild(prodRow);
            }
            count = 0;
        }

    })