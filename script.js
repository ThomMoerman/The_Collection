for (elem of gameCollection) {

    // Création de la card et des ses sections
    let article = document.createElement("article");
    article.className = "myCard";

    let imgSection = document.createElement("section");
    imgSection.className = "imgSection"

    let txtSection = document.createElement("section");
    txtSection.className = "txtSection"

    const main = document.querySelector("main");
    main.append(article);
    article.append(imgSection);
    article.append(txtSection);

    // Création et ajout de l'image du jeu
    imgSection.style.backgroundImage = "url(" + elem.picture + ")";
    imgSection.style.backgroundImage = elem.cover;

    let nameCard = document.createElement("h2");
    nameCard.textContent = elem.name;
    txtSection.appendChild(nameCard);

    let developedBy = document.createElement("li");
    developedBy.textContent = ("Developed by : " + elem.developedBy);
    txtSection.appendChild(developedBy);

    let releaseYear = document.createElement("li");
    releaseYear.textContent = ("Release in : " + elem.releaseYear);
    txtSection.appendChild(releaseYear);

    let gameGenre = document.createElement("li");
    gameGenre.textContent = ("Type : " + elem.genre);
    txtSection.appendChild(gameGenre);
}