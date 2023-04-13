const gameCollection = [
  {
    name: "Battlefield 1",
    developedBy : "DICE",
    editedBy: "Electronic Arts",
    releaseYear: 2016,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["FPS"],
    mode: ["Solo", "Multiplayer"],
    description: "Battlefield 1 is a first-person shooter video game developed by DICE and published by Electronic Arts, released on October 21, 2016 for Microsoft Windows, PlayStation 4, and Xbox One. This eleventh installment in the Battlefield series is set during World War I."
  },

  {
    name: "League of Legends",
    developedBy : "RIOT Games",
    editedBy: "RIOT Games",
    releaseYear: 2009,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["Moba", "Action-RPG"],
    mode: ["Multiplayer"],
    description: "League of Legends est un jeu vidéo sorti en 2009 de type arène de bataille en ligne, free-to-play, développé et édité par Riot Games sur Windows et Mac OS."
  },

  {
    name: "FIFA 22",
    developedBy : "Electronic Arts",
    editedBy: "Electronic Arts",
    releaseYear: 2021,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["Sports", "Simulation"],
    mode: ["Solo", "Multiplayer"],
    description: "FIFA 22 est un jeu vidéo de simulation de football publié par Electronics Arts. Il s'agit du 29ᵉ volet de cette série FIFA. Il est sorti sur Microsoft Windows, Nintendo Switch, Play Station 4, PlayStation 5 et Google Stadia le 1ᵉʳ octobre 2021."
  },

  {
    name: "Valorant",
    developedBy : "RIOT Games",
    editedBy: "RIOT Games",
    releaseYear: 2020,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["FPS"],
    mode: ["Multiplayer"],
    description: "Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games et sorti le 2 juin 2020."
  },

  {
    name: "Overwatch",
    developedBy : "Iron Galaxy Studios",
    editedBy: "Blizzard Entertainement",
    releaseYear: 2016,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["FPS", "Action-RPG"],
    mode: ["Multiplayer"],
    description: "Overwatch est un jeu vidéo de tir à la première personne en ligne et en équipe de 5, développé et publié par Blizzard Entertainment. Ce jeu est une dérive du jeu Vivi vi & co."
  },

  {
    name: "Hearthstone",
    developedBy : "Blizzard Entertainment",
    editedBy: "Blizzard Entertainment",
    releaseYear: 2014,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["CardGame", "Strategy"],
    mode: ["Solo", "Multiplayer"],
    description: "Hearthstone est un jeu de cartes à collectionner en ligne, développé et édité par la société Blizzard Entertainment. C'est un jeu gratuit s'inspirant de l'univers de fiction médiéval-fantastique du jeu vidéo Warcraft développé par Blizzard."
  },

  {
    name: "Hogwarts Legacy",
    developedBy : "Avalanche Software",
    editedBy: "Warner Bros Games",
    releaseYear: 2023,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["Aventure", "Action-RPG-OpenWorld"],
    mode: ["Solo"],
    description: "Hogwarts Legacy : L'Héritage de Poudlard est un jeu vidéo de rôle développé par Avalanche Software et édité par Warner Bros. Interactive Entertainment en collaboration avec Portkey Games."
  },

  {
    name: "Minecraft",
    developedBy : "Mojang Studios",
    editedBy: "Mojang Studios",
    releaseYear: 2011,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["Aventure", "Sandbox"],
    mode: ["Solo", "Multiplayer"],
    description: "Minecraft est un jeu vidéo de type aventure « bac à sable » (construction complètement libre) développé par le Suédois Markus Persson, alias Notch, puis par la société Mojang Studios. Il s'agit d'un univers composé de voxels et généré de façon procédurale, qui intègre un système d'artisanat axé sur l'exploitation puis la transformation de ressources naturelles "
  },

  {
    name: "Fortnite",
    developedBy : "Epic Games",
    editedBy: "Epic Games",
    releaseYear: 2017,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["TPS", "Battle Royale"],
    mode: ["Solo","Multiplayer"],
    description: "Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu"
  },

  {
    name: "Apex Legends",
    developedBy : "Respawn Entertainment",
    editedBy: "Respawn Entertainment",
    releaseYear: 2019,
    picture: "../The_Collection/assets/battlefield.webp",
    genre: ["FPS", "Battle Royale"],
    mode: ["Multiplayer"],
    description: "Apex Legends est un jeu vidéo de type battle royale développé par Respawn Entertainment et édité par Electronic Arts. Il est publié en accès gratuit le 4 février 2019 sur Microsoft Windows, PlayStation 4 et Xbox One."
  },
];

window.addEventListener("load", function(){

    for(elem of gameCollection){

    // Création de la div
    var article = document.createElement("article");
    article.className = "myCard";

    // Création et ajout de l'image
    var img = document.createElement("img");
    img.src = elem.picture;
    article.appendChild(img);

    var nameCard = document.createElement("h2");
    nameCard.textContent = elem.name;
    article.appendChild(nameCard);
    
    var developedBy = document.createElement("span", "br");
    developedBy.textContent = ("Developed by : " + elem.developedBy);
    article.appendChild(developedBy);

    var editedBy = document.createElement("span");
    editedBy.textContent = ("Edited by : " + elem.editedBy);
    article.appendChild(editedBy);

    var releaseYear = document.createElement("span");
    releaseYear.textContent = elem.releaseYear;
    article.appendChild(releaseYear);

    var gameGenre = document.createElement("span");
    gameGenre.textContent = elem.genre;
    article.appendChild(gameGenre);

    var mode = document.createElement("span");
    mode.textContent = elem.mode;
    article.appendChild(mode);
    
    var description = document.createElement("p");
    description.textContent = elem.description;
    article.appendChild(description);
    
    const main = document.querySelector("main");
    main.append(article);
    }
}
);

// Boucle pour recherché les éléments de mes objets 
// for(elem of gameCollection){
//     console.log(elem.name)
//     console.log(elem.developedBy)
// }
