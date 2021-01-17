// CLOSE SUPPORT TEXT
const closeSupported = document.getElementById("closeSupported");
const supportText = document.getElementById("supportText");
closeSupported.addEventListener("click", () => {
  supportText.style.display = "none";
});

// PAGES
const pages = [];

class Project {
  constructor(title, description, image, url, techs) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.url = url;
    this.techs = techs;
    Project.addInstance(this);
  }
  static addInstance(item) {
    pages.push(item);
  }
  static getInstances() {
    return pages;
  }
  static clearInstances() {
    pages.length = 0;
  }
}

const Project1 = new Project(
  "Manage Global",
  "Mockup of a fictional business brochure for an app-based company that provides business solutions",
  "ideas/manage_global/assets/pexels-rebrand-cities-1367269.jpg",
  "ideas/manage_global/index.html",
  [
    "CSS: Bootstrap 4.5, responsivity, media queries and animations",
    "JavaScript: dynamic navigation bar, form validation with regular expressions, recursion, customized Bootstrap toasts and event handling for animations",
    "3rd party libraries: Appear on Scroll library",
    "Visual assets: Google Fonts, Adobe Colors, Font-Awesome icons, favicon.io, Royalty-free images (Pixabay and Pexels)",
    "Design tools: Photoshop for customized iPhone image",
  ]
);

const Project2 = new Project(
  "Personal Portfolio",
  "My personal website and Portfolio",
  "ideas/personal_portfolio/portfolio-sergie.png",
  "https://sergie.net",
  [
    "CSS: SASS, BEM CSS, responsivity, media queries and animations",
    "JavaScript: dynamic navigation bar, object-oriented programming, ES6 features",
    "Visual assets: Google Fonts, Adobe Colors, Font-Awesome icons, favicon.io, Royalty-free images (Pixabay and Pexels)",
    "Design tools: Photoshop for customized iPhone image",
  ]
);

// GENERATE CARDS AND PREVIEW
const cardGrid = document.getElementById("cardGrid");
let previewTitle = document.getElementById("previewTitle");
let previewDescription = document.getElementById("previewDescription");

window.addEventListener("load", () => {
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
    let shortDesc = page.description;
    if (page.description.length > 90) {
      shortDesc = shortDesc.substr(0, 100) + "...";
    }
    let cardDescriptionText = document.createTextNode(shortDesc);

    cardDescription.appendChild(cardDescriptionText);

    let cardButton = document.createElement("a");
    cardButton.classList.add("card__button");
    let cardButtonText = document.createTextNode("Access");
    cardButton.setAttribute("href", page.url);
    cardButton.setAttribute("target", "_blank");
    cardButton.appendChild(cardButtonText);

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardButton);
    cardGrid.appendChild(card);

    let technologies = page.techs.map((tech) => "<br> " + tech);
    card.addEventListener("mouseenter", () => {
      previewTitle.innerHTML = page.title;
      previewDescription.innerHTML = `${page.description}. <br> <br> This project was made using - ${technologies}.`;
    });
  });
});

// SEARCH BAR

// LIGHT THEME
const lightMessages = [
  "Light attracts bugs",
  "Stop clicking here",
  "And you call yourself a programmer?",
  "Pretend everything is white",
  "There will never be a light theme! Maybe...",
  "Do you truly think this is a good idea?",
];
const lightButton = document.getElementById("lightButton");
const lightMessage = document.getElementById("lightMessage");

let timer = "";

lightButton.addEventListener("click", () => {
  clearTimeout(timer);
  lightMessage.classList.remove("fade-in");
  lightMessage.classList.remove("fade-out");
  let randomMessage =
    lightMessages[Math.floor(Math.random() * lightMessages.length)];
  lightMessage.classList.add("fade-in");
  lightMessage.innerHTML = randomMessage;
  timer = setTimeout(() => {
    // lightMessage.classList.remove("fade-ind");
    lightMessage.classList.add("fade-out");
  }, 2000);
});

// GET YEAR DINAMICALLY
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

// MAIN BUTTONS SWITCH
const pagesButton = document.getElementById("pagesButton");
const aboutButton = document.getElementById("aboutButton");
const pagesSection = document.getElementById("pagesSection");
const aboutSection = document.getElementById("aboutSection");

pagesButton.addEventListener("click", () => {
  pagesButton.classList.add("btn--active");
  aboutButton.classList.remove("btn--active");
  pagesSection.classList.add("active-section");
  aboutSection.classList.remove("active-section");
});

aboutButton.addEventListener("click", () => {
  pagesButton.classList.remove("btn--active");
  aboutButton.classList.add("btn--active");
  pagesSection.classList.remove("active-section");
  aboutSection.classList.add("active-section");
});
