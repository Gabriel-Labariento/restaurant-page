import appetizerSrc from "./appetizer.jpg";
import burgerSrc from "./burger.jpg";
import desertSrc from "./desert.jpg";

const displayMenu = function(){

    const contentDiv = document.querySelector("#content");
    contentDiv.removeChild(contentDiv.firstElementChild);

    const menuContainer = document.createElement("div")
    menuContainer.setAttribute("class", "menu-container");

    const appetizerContainer = document.createElement("div");
    appetizerContainer.setAttribute("class", "food-container");
    const appetizerImage = document.createElement("img");
    appetizerImage.setAttribute("src", appetizerSrc);
    appetizerImage.setAttribute("class", "food-image");
    const appetizerTitle = document.createElement("h1");
    appetizerTitle.textContent = "Bread with Egg"
    appetizerTitle.setAttribute("class", "food-title")
    const appetizerDescription = document.createElement("p")
    appetizerDescription.setAttribute("class", "food-description");
    appetizerDescription.textContent = "Nam eu hendrerit purus. Donec tempor ultrices eros, quis fringilla ex scelerisque eget. Aenean tincidunt posuere dolor viverra pharetra. Ut ultricies nisl eu velit lobortis venenatis. Vestibulum sed diam ultricies, efficitur ipsum et, dignissim nunc. "
    appetizerContainer.appendChild(appetizerImage);
    appetizerContainer.appendChild(appetizerTitle);
    appetizerContainer.appendChild(appetizerDescription);
    menuContainer.appendChild(appetizerContainer);


    const burgerContainer = document.createElement("div")
    burgerContainer.setAttribute("class", "food-container");
    const burgerImage = document.createElement("img");
    burgerImage.setAttribute("src", burgerSrc);
    burgerImage.setAttribute("class", "food-image");
    const burgerTitle = document.createElement("h1");
    burgerTitle.setAttribute("class", "food-title");
    burgerTitle.textContent = "Big Burger";
    const burgerDescription = document.createElement("p");
    burgerDescription.setAttribute("class", "food-description");
    burgerDescription.textContent = appetizerDescription.textContent;
    burgerContainer.appendChild(burgerImage);
    burgerContainer.appendChild(burgerTitle);
    burgerContainer.appendChild(burgerDescription);
    menuContainer.appendChild(burgerContainer);



    const desertContainer = document.createElement("div")
    desertContainer.setAttribute("class", "food-container");
    const desertImage = document.createElement("img");
    desertImage.setAttribute("src", desertSrc)
    desertImage.setAttribute("class", "food-image");
    const desertTitle = document.createElement("h1");
    desertTitle.setAttribute("class", "food-title");
    desertTitle.textContent = "Cheesecake";
    const desertDescription = document.createElement("p");
    desertDescription.setAttribute("class", "food-description");
    desertDescription.textContent = appetizerDescription.textContent;
    desertContainer.appendChild(desertImage);
    desertContainer.appendChild(desertTitle);
    desertContainer.appendChild(desertDescription);
    menuContainer.appendChild(desertContainer);


    contentDiv.appendChild(menuContainer)
}

export {displayMenu};