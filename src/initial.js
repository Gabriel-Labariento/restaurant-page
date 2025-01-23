import foodImage from "./food.jpg";

const pageLoad = function() {

    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("main-container")

    const image = document.createElement("img");
    image.src = foodImage;
    image.classList.add("image")

    const name = document.createElement("h1")
    name.textContent = "Matthew's"
    name.classList.add("name")

    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis aliquet sollicitudin. Nunc semper elementum magna suscipit ultrices. Sed sagittis libero turpis, vel faucibus ligula blandit vitae. Etiam cursus mollis purus sit amet tempus. Maecenas sed tristique mauris. Etiam condimentum turpis non nunc pellentesque accumsan. Donec vel ipsum ultricies, hendrerit magna porttitor, lacinia est. In molestie, augue id laoreet venenatis, enim arcu convallis elit, eget rhoncus dolor urna accumsan erat. Etiam pellentesque magna in nibh suscipit rutrum. Nunc eu semper nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut suscipit nisl, vel semper sapien. Nam rutrum scelerisque lectus vel gravida."
    description.classList.add("description")

    container.appendChild(image);
    container.appendChild(name);
    container.appendChild(description);

    content.appendChild(container);
};

export {pageLoad}