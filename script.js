/** How to add translations:
 *  
 * 1. Create a tag of the same name in all translations inside the Dictionaty.
 * Example: 
 * Dictionary = 
 *  { 
 *      en: {title: "Title",}, 
 *      pt: {title: "Título",} 
 *  }
 * 
 * 
 * 2. Create an id and add lang="en" for the tag the you want to translate inside the .html file.
 * Example:
 * before: <h1 id="title" lang="en">The Great Mountains</h1>
 * after: <h1 >The Great Mountains</h1>
 * 
 * 
 * 3. Create the variable of the tag inside this .js file.
 * Example:
 * var title = document.getElementById("title");
 * 
 * 
 * 4. Update the variable inside the document.addEventListener("DOMContentLoaded").
 * Example:
 *  document.addEventListener('DOMContentLoaded', () => { 
 *      title = document.getElementById("title"); 
 *  })
 * 
 * 
 * 5. Add the change you want inside the function changeLanguage().
 * Example:
 *  function changeLanguage()
 *  {
 *      title.innerHTML = translations[nextLanguage].title;
 *  }
 */

const translations = {
    en: {
      flag_src:"assets/images/us.svg",
      welcome: 'Welcome to my website!',
      switchLanguage: "Switch Language",
      box_title: "Thermosul Projects ",
      body1: "Explore our products <b>Evaporative Air Conditioners</b>, <b>Portable Air Conditioner</b>, and <b>Industrial Air Conditioner</b>.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione nam quaerat facere et illo molestiae nemo.",
      button_seemore: "See more",
    },
    pt: {
      flag_src:"assets/images/br.svg",
      welcome: 'Bem vindo ao meu site!',
      switchLanguage: "Trocar Idioma",
      box_title: "Thermosul projetos",
      body1: "Explore os nossos produtos <b>Climatizadores Evaporativos</b>, <b>Climatizador portátil</b>, and <b>Climatizador industrial</b>.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ratione nam quaerat facere et illo molestiae nemo.",
      button_seemore: "Veja mais",
    },
};

// Tags variables
var button = document.getElementById("languageButton");
var button_image = document.getElementById("languageButtonImage");
var title = document.getElementById("title1");
var body1 = document.getElementById("body1");
var button_seemore = document.getElementById("button_seemore");

let preference = "languagePreference";
let defaultPreference = "en";

// Update variables after html document is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
  button = document.getElementById("languageButton");
  button_image = document.getElementById("languageButtonImage");
  title = document.getElementById("title1");
  body1 = document.getElementById("body1");
  button_seemore = document.getElementById("button_seemore");

  if (localStorage.getItem(preference) == "pt") {
    changeLanguage();
  }

})

function changeLanguage()
{
    // Toggle between English and Portuguese
    const currentLanguage = document.documentElement.lang;
    const nextLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    document.documentElement.lang = nextLanguage;

    localStorage.setItem(preference, nextLanguage);

    title.innerHTML = translations[nextLanguage].box_title;
    //button.innerHTML = translations[nextLanguage].switchLanguage;
    button_image.src = translations[nextLanguage].flag_src;
    body1.innerHTML = translations[nextLanguage].body1;
    button_seemore.innerHTML = translations[nextLanguage].button_seemore;
    // Update other elements with their respective translations
}

