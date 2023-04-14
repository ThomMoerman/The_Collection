for (elem of gameCollection) {
    createCard(elem);
}

function createCard(Object) {
    let article = document.createElement("article");
    article.className = "myCard";

    let imgSection = document.createElement("section");
    imgSection.className = "imgSection"

    let txtSection = document.createElement("section");
    txtSection.className = "txtSection"

    let footerCard = document.createElement("footer");

    imgSection.style.backgroundImage = "url(" + Object.picture + ")";
    imgSection.style.backgroundImage = Object.cover;

    let nameCard = document.createElement("h2");
    nameCard.textContent = Object.name;
    txtSection.appendChild(nameCard);

    let developedBy = document.createElement("li");
    developedBy.textContent = ("Developed by : " + Object.developedBy);
    txtSection.appendChild(developedBy);

    let releaseYear = document.createElement("li");
    releaseYear.textContent = ("Release in : " + Object.releaseYear);
    txtSection.appendChild(releaseYear);

    let gameMode = document.createElement("li");
    gameMode.textContent = ("Mode : " + Object.mode);
    txtSection.appendChild(gameMode);

    let tags = document.createElement('ul');
    tags.className = "tagsGenre"
    footerCard.append(tags);

    Object.genre.forEach(tag => {
        let tagli = document.createElement('li');
        tags.append(tagli);
        let tagText = document.createTextNode(tag);
        tagli.appendChild(tagText);

        // Gestion des couleurs des tags
        switch (tag) {
            case "FPS":
                tagli.style.backgroundColor = "#C84C0C";
                break;
            case "Moba":
                tagli.style.backgroundColor = "#FF3636";
                break;
            case "Action-RPG":
                tagli.style.backgroundColor = "#FF369B";
                break;
            case "Sports":
                tagli.style.backgroundColor = "#54FF36";
                break;
            case "Simulation":
                tagli.style.backgroundColor = "#6DA064";
                break;
            case "CardGame":
                tagli.style.backgroundColor = "#4CBEFF";
                break;
            case "Strategy":
                tagli.style.backgroundColor = "#2250FF";
                break;
            case "Aventure":
                tagli.style.backgroundColor = "#BDFF00";
                break;
            case "Sandbox":
                tagli.style.backgroundColor = "#FFDC00";
                break;
            case "TPS":
                tagli.style.backgroundColor = "#8F8F8F";
                break;
            case "Battle Royale":
                tagli.style.backgroundColor = "#CC5EFF";
                break;
        }
    });

    let delbtn = document.createElement("button");
    delbtn.className = "delbtn"
    delbtn.textContent = ("Delete")
    delbtn.addEventListener("click", function () {
        article.parentNode.removeChild(article);
    });
    txtSection.appendChild(delbtn);
    
    const main = document.querySelector("main");
    main.append(article);
    article.append(imgSection);
    article.append(txtSection);
    article.append(footerCard);
}

