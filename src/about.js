import restaurantSrc from "./restaurant.jpg"

const displayAbout = function(){
    // Create the main container
    const contentDiv = document.querySelector("#content");
    contentDiv.removeChild(contentDiv.firstElementChild);

    // Create the about-container div
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    // Create the about-text-container div
    const aboutTextContainer = document.createElement('div');
    aboutTextContainer.classList.add('about-text-container');

    // Create and add the title
    const aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('about-title');
    aboutTitle.textContent = "Experience Matthew's";
    aboutTextContainer.appendChild(aboutTitle);

    // Create and add the description paragraph
    const aboutDescription = document.createElement('p');
    aboutDescription.classList.add('about-description');
    aboutDescription.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed dictum neque, id dictum mi. Donec non lorem non leo laoreet ultrices. Etiam semper magna eu justo ultrices, vitae semper odio volutpat. Aliquam molestie scelerisque purus, eget varius nibh convallis ut. Cras elementum diam accumsan consectetur sodales. Nulla fringilla vitae urna at egestas. Maecenas ultrices velit a velit ullamcorper sodales. Nulla dictum ipsum sed ex hendrerit pretium. Praesent ac augue orci. Nunc commodo, ex quis consequat luctus, lorem eros efficitur velit, at eleifend ligula ante nec mi. Aenean in fringilla nibh. In dictum hendrerit ex ut feugiat.`;
    aboutTextContainer.appendChild(aboutDescription);

    // Create and add the button
    const aboutButton = document.createElement('button');
    aboutButton.classList.add('about-button');
    aboutButton.textContent = 'Make A Reservation';
    aboutTextContainer.appendChild(aboutButton);

    // Add the text container to the about-container
    aboutContainer.appendChild(aboutTextContainer);

    // Create the about-image-container div
    const aboutImageContainer = document.createElement('div');
    aboutImageContainer.classList.add('about-image-container');

    // Create and add the image
    const restaurantImage = document.createElement('img');
    restaurantImage.classList.add('restaurant-image');
    restaurantImage.setAttribute('src', restaurantSrc);
    restaurantImage.setAttribute('alt', 'restaurant-image');
    aboutImageContainer.appendChild(restaurantImage);

    // Add the image container to the about-container
    aboutContainer.appendChild(aboutImageContainer);

    // Add the about-container to the content div
    contentDiv.appendChild(aboutContainer);
}

export {displayAbout};