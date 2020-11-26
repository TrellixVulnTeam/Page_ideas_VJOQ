// PAGES
const pages = [
    {
        title: "Sales",
        description: "Feature under development",
        image: "../../ideas/placeholder/assets/images/hands-1063442_1920.jpg",
        url: "https://www.facebook.com",
        techs: ["Bootstrap"],
        previewFrame: "test"
    },
    {
        title: "Marketing",
        description: "Coming soon",
        image: "../../ideas/placeholder/assets/images/industry-3087393_1920.jpg",
        url: "https://www.amazon.com",
        techs: ["SASS"],
        previewFrame: "test"
    },
    {
        title: "Finance",
        description: "And this is what happens when we have a very long text that goes on and on, so much that it starts covering all of the available space and it seems it is going to overflow the containers and break any reasonable design, but no, look, the power of JavaScript allow us to implement a character limit that handles this",
        image: "../../ideas/placeholder/assets/images/money-2724241_1920.jpg",
        url: "https://www.netflix.com",
        techs: ["ReactJS"],
        previewFrame: "test"
    },
    {
        title: "Human Resources",
        description: "Just a placeholder for future content",
        image: "../../ideas/placeholder/assets/images/paper-3213924_1920.jpg",
        url: "https://www.google.com",
        techs: ["GatsbyJS"],
        previewFrame: "test"
    }
];

// GENERATE CARDS AND PREVIEW
const cardGrid = document.getElementById("cardGrid");
let previewTitle = document.getElementById("previewTitle");
let previewDescription = document.getElementById("previewDescription");


window.addEventListener('load', () => {
    pages.forEach((page) => {
        let card = document.createElement("div");
        card.classList.add("card");
        
        let cardImage = document.createElement("div");
        cardImage.classList.add("card__image");
        let cardImageImg = document.createElement("img");
        cardImageImg.setAttribute("src", page.image);
        cardImageImg.setAttribute("alt", "image of the project");
        cardImage.appendChild(cardImageImg);
        
        let cardTitle = document.createElement("h3");
        cardTitle.classList.add("card__title");
        let cardTitleText = document.createTextNode(page.title);
        cardTitle.appendChild(cardTitleText);
        
        let cardDescription = document.createElement("p");
        cardDescription.classList.add("card__description");
        let shortDesc = page.description
        if (page.description.length > 90) {
            shortDesc = shortDesc.substr(0, 90) + "...";
        };
        let cardDescriptionText = document.createTextNode(shortDesc);
            
        cardDescription.appendChild(cardDescriptionText);
        
        let cardButton = document.createElement("button");
        cardButton.classList.add("card__button");
        let cardButtonText = document.createTextNode("Access");
        cardButton.appendChild(cardButtonText);
        
        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        card.appendChild(cardButton);
        cardGrid.appendChild(card);
        
        card.addEventListener("mouseenter", () => {
            previewTitle.innerHTML = page.title;
            previewDescription.innerHTML = `${page.description}. <br> <br> This project was made using ${page.techs}`;
             })  
        })    
    });

// SEARCH BAR

// LIGHT THEME
const lightMessages = ["Light attracts bugs", "Stop clicking here", "And you call yourself a programmer?", "Pretend everything is white", "There will never be a light theme! Maybe...", "Do you truly think this is a good idea?"];
const lightButton = document.getElementById("lightButton");
const lightMessage = document.getElementById("lightMessage")

let timer = '';

lightButton.addEventListener('click', () => {
    
    clearTimeout(timer);
    lightMessage.classList.remove("fade-in")
    lightMessage.classList.remove("fade-out")
    let randomMessage = lightMessages[Math.floor(Math.random() * lightMessages.length)];
    lightMessage.classList.add("fade-in");
    lightMessage.innerHTML = randomMessage
    timer = setTimeout(() => {
        // lightMessage.classList.remove("fade-ind");
        lightMessage.classList.add("fade-out");
    }, 2000)
    
});
    


// GET YEAR DINAMICALLY
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// MAIN BUTTONS SWITCH
const pagesButton = document.getElementById("pagesButton");
const aboutButton = document.getElementById("aboutButton");
const pagesSection = document.getElementById("pagesSection");
const aboutSection = document.getElementById("aboutSection");

pagesButton.addEventListener('click', () => {
    pagesButton.classList.add("btn--active");
    aboutButton.classList.remove("btn--active"); 
    pagesSection.classList.add("active-section");
    aboutSection.classList.remove("active-section");
})

aboutButton.addEventListener('click', () => {
    pagesButton.classList.remove("btn--active");
    aboutButton.classList.add("btn--active"); 
    pagesSection.classList.remove("active-section");
    aboutSection.classList.add("active-section");
})
