"use sctrict";
const createBtn = document.querySelector(".js-create-btn");
const hiddenBoxElement = document.querySelector(".js-display");

const inputsTextConfig = [
  {
    inputClass: ".js-input-name",
    cardClass: ".js-card-name",
    defaultValue: "Nombre apellidos",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
  },
  {
    inputClass: ".js-input-job",
    cardClass: ".js-card-job",
    defaultValue: "Profesión",
    cardPrefix: "",
    cardElementAttribute: "innerHTML",
  },
  {
    inputClass: ".js-input-email",
    cardClass: ".js-card-email",
    defaultValue: "",
    cardPrefix: "mailto:",
    cardElementAttribute: "href",
  },
  {
    inputClass: ".js-input-phone",
    cardClass: ".js-card-phone",
    defaultValue: "",
    cardPrefix: "tel:",
    cardElementAttribute: "href",
  },
  {
    inputClass: ".js-input-linkedin",
    cardClass: ".js-card-linkedin",
    defaultValue: "",
    cardPrefix: "https://www.linkedin.com/in/",
    cardElementAttribute: "href",
  },
  {
    inputClass: ".js-input-github",
    cardClass: ".js-card-github",
    defaultValue: "",
    cardPrefix: "https://github.com/",
    cardPrefixGithub: "@",
    cardElementAttribute: "href",
  },
];

function updateAllInputs() {
  saveInLocalStorage();
  resetShareSection();

  // recorro los 6 inputs del array inputsTextConfig
  for (const inputTextConfig of inputsTextConfig) {
    // por cada objeto del array inputsTextConfig hago:
    console.log(
      "Empiezo una nueva iteración del for con la configuración del elemento:",
      inputTextConfig
    );

    // obtengo el elemento input, el origen
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    console.log(
      "Elemento del formulario:",
      inputTextConfig.inputClass,
      inputElement
    );

    // obtengo el elemento de la card, el destino
    const cardElement = document.querySelector(inputTextConfig.cardClass);
    console.log(
      "Elemento del la tarjeta:",
      inputTextConfig.cardClass,
      cardElement
    );

    // obtengo el valor del input
    let newValue = inputElement.value;

    // compruebo si tengo que usar el innerHTML, es decir si es el nombre o la profesion
    if (inputTextConfig.cardElementAttribute === "innerHTML") {
      // compruebo si está vacío
      if (inputElement.value === "") {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }
      console.log("Valor por defecto:", inputTextConfig.defaultValue);
      console.log("Nuevo valor a poner en la tarjeta:", newValue);
      // actualizo la tarjeta
      cardElement.innerHTML = newValue;
    }

    // si no es de tipo innerHTML, compruebo si tengo que usar el href, es decir si es el email, phone, linkedin o gihtub
    else if (inputTextConfig.cardElementAttribute === "href") {
      // compruebo si está vacío
      if (inputElement.value === "") {
        newValue = "#";
      } else if (inputsTextConfig[5]) {
        newValue = newValue.replace(inputTextConfig.cardPrefix, "");
        newValue = newValue.replace(inputTextConfig.cardPrefixGithub, "");
        newValue = inputTextConfig.cardPrefix + newValue;
      } else {
        newValue = newValue.replace(inputTextConfig.cardPrefix, "");
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      console.log("Valor del prefijo:", inputTextConfig.cardPrefix);
      console.log("Nuevo valor a poner en la tarjeta:", newValue);
      // actualizo la tarjeta
      cardElement.href = newValue;
    }

    console.log("-------------------------------------------------");
  }
}

// obtengo los 6 inputs del html
const inputTextElements = document.querySelectorAll(".js-input-text");
// escucho a cada uno de ellos con un addEventListener
for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener("keyup", updateAllInputs);
}

"use strict";

const titlesAreaElement = document.querySelectorAll(".js-title");

for (const titleAreaElement of titlesAreaElement) {
  titleAreaElement.addEventListener("click", changeCollapsable);
}

function changeCollapsable(ev) {
  const clickedTitleArea = ev.currentTarget;
  const clickedCollapsable = clickedTitleArea.parentNode;

  const allCollapsables = document.querySelectorAll(".js-container");
  for (const collapsable of allCollapsables) {
    if (clickedCollapsable === collapsable) {
      collapsable.classList.toggle("collapsable__close");
    } else {
      collapsable.classList.add("collapsable__close");
    }
  }
}

"use strict";

const paletteElements = document.querySelectorAll(".js-palette");
const cardElement = document.querySelector(".js-card");

function handlePalette(ev) {
  cardElement.classList.remove(
    "palette-1",
    "palette-2",
    "palette-3",
    "palette-4"
  );

  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = checkedPalette.value;
  cardElement.classList.add("palette-" + checkedPaletteValue);

  console.log(checkedPaletteValue);
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener("change", handlePalette);
}
handlePalette();

"use strict";

const fr = new FileReader();
const uploadBtn = document.querySelector(".js__profile-trigger");
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");
let photo = "";

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */

  photo = fr.result;
  updatePhoto();
  // después de cualquier acción del usuario guardo en el local storage
  saveInLocalStorage();
}

function updatePhoto() {
  const currentPhoto =
    photo ||
    "https://www.larata.cl/wp-content/uploads/2019/03/Peggy-Olson-1-700x525.jpg";
  profilePreview.style.backgroundImage = `url(${currentPhoto})`;
  profileImage.style.backgroundImage = `url(${currentPhoto})`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);

"use strict";

// cuando la usuaria cambia cualquier cosa en el formulario debemos llamar a esta función
function saveInLocalStorage() {
  // obtengo los valores de todos los campos
  const userData = {
    photo: photo,
    palette: document.querySelector(".js-palette:checked").value,
    name: document.querySelector(".js-input-name").value,
    job: document.querySelector(".js-input-job").value,
    email: document.querySelector(".js-input-email").value,
    phone: document.querySelector(".js-input-phone").value,
    linkedin: document.querySelector(".js-input-linkedin").value,
    github: document.querySelector(".js-input-github").value,
  };
  // lo convierto a string porque local storage solo admite strings
  const userDataInString = JSON.stringify(userData);
  // lo guardo en el local storage en el campo que me apetece
  localStorage.setItem("userData", userDataInString);
}

// al arrancar la página recogemos los datos desde el local storage y actualizamos el formulario
function getFromLocalStorage() {
  // obtengo los datos desde el local storage
  const userDataInString = localStorage.getItem("userData");
  // compruebo si hay datos válidos, es decir si la usuaria ya había entrado en nuestra web anteriormente
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    // actualizo los inputs del formulario
    document.querySelector(".js-input-name").value = userData.name;
    document.querySelector(".js-input-job").value = userData.job;
    document.querySelector(".js-input-email").value = userData.email;
    document.querySelector(".js-input-phone").value = userData.phone;
    document.querySelector(".js-input-linkedin").value = userData.linkedin;
    document.querySelector(".js-input-github").value = userData.github;
    // actualizo la variable global de la foto
    photo = userData.photo;
    // actualizo la paleta, para ello
    // - Recorro las 3 paletas
    // - Compruebo cuál tiene el valor que tengo en el local storage
    // - A la paleta que tiene el valor correcto le hago un .checked = true para activarla
    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }
    // propago los datos desde el formulario a la tarjeta
    updateAllInputs();
    // updatePalette();
    handlePalette();
    updatePhoto();
  }
}
getFromLocalStorage();

'use strict';

const submitElement = document.querySelector('.js-submit');

function handleSubmit(ev) {
    ev.preventDefault();
}

submitElement.addEventListener('submit', handleSubmit);






"use strict";

const cardResultElement = document.querySelector(".js-card-result");
const twitterElement = document.querySelector(".twitterLink");
const requiredElement = document.querySelector(".js-required");

function getCardData() {
  return {
    photo: photo,
    palette: parseInt(document.querySelector(".js-palette:checked").value),
    name: document.querySelector(".js-input-name").value,
    job: document.querySelector(".js-input-job").value,
    email: document.querySelector(".js-input-email").value,
    phone: document.querySelector(".js-input-phone").value,
    linkedin: document
      .querySelector(".js-card-linkedin")
      .href.replace("https://www.linkedin.com/in/", ""),
    github: document
      .querySelector(".js-card-github")
      .href.replace("https://github.com/", ""),
  };
}

function requiredText() {
  const dataPhoto = photo;
  const inputName = document.querySelector(".js-input-name").value;
  const inputJob = document.querySelector(".js-input-job").value;
  const inputEmail = document.querySelector(".js-input-email").value;
  const inputPhone = document.querySelector(".js-input-phone").value;
  const inputLinkedin = document.querySelector(".js-input-linkedin").value;
  const inputGithub = document.querySelector(".js-input-github").value;

  if (inputName === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el nombre.`;

    return false;
  } else if (inputJob === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
   Por favor, rellena correctamente el puesto.`;

    return false;
  } else if (inputPhone === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el teléfono.`;

    return false;
  } else if (
    dataPhoto ===
      "https://decider.com/wp-content/uploads/2015/05/peggy-survivor-lead.png?w=1156&h=862&crop=1" ||
    dataPhoto === ""
  ) {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, añade una imagen.`;
    return false;
  } else if (inputEmail === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el email.`;
    return false;
  } else if (inputLinkedin === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el usuario de Linkedin.`;
    return false;
  } else if (inputGithub === "") {
    requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>
    Por favor, rellena correctamente el usuario de Github.`;
    return false;
  } else {
    requiredElement.innerHTML = "";
    return true;
  }
}

function handleCreateBtn(ev) {
  ev.preventDefault();
  console.log("DATOS API", getCardData());
  if (requiredText() === true) {
    const url = "https://awesome-profile-cards.herokuapp.com/card";
    const data = getCardData();
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
        if (data.success === true) {
          createBtn.style.backgroundColor = "#d5d5d5";
          hiddenBoxElement.classList.remove("js-hidden");
          cardResultElement.innerHTML = "Haz click aquí para ver tu tarjeta";
          cardResultElement.href = data.cardURL;
        } else {
          requiredElement.innerHTML = `<i class="fas fa-exclamation-circle"></i>Lo sentimos, hemos tenido algún problema con el servidor. Prueba más tarde. Error: ${data.error}`;
        }
      });
  }
}

function handleTwitterBtn() {
  const tweetText = encodeURIComponent(
    "¡Echa un vistazo a la tarjeta que me he creado con Mad Women Profile Cards!"
  );
  const tweetHashtag = encodeURIComponent("Adalab,promoL,MadWomen,frontend");
  const generatedCardURL = cardResultElement.href;
  twitterElement.href = `https://twitter.com/intent/tweet?text=${tweetText}&url=${generatedCardURL}&hashtags=${tweetHashtag}`;
}

function resetShareSection() {
  createBtn.style.backgroundColor = "#cc1517";
  hiddenBoxElement.classList.add("js-hidden");
}

createBtn.addEventListener("click", handleCreateBtn);
twitterElement.addEventListener("click", handleTwitterBtn);



"use strict";

const resetButtonElement = document.querySelector(".js-reset");
const nameCardElement = document.querySelector(".js-card-name");
const jobCardElement = document.querySelector(".js-card-job");
const emailCardElement = document.querySelector(".js-card-email");
const phoneCardElement = document.querySelector(".js-card-phone");
const linkedinCardElement = document.querySelector(".js-card-linkedin");
const githubCardElement = document.querySelector(".js-card-github");

function resetInfo() {
  resetShareSection();
  document.querySelector(".form").reset();
  nameCardElement.innerHTML = "Nombre Apellido";
  jobCardElement.innerHTML = "Profesión";
  profilePreview.style.backgroundImage = "";
  photo =
    "https://decider.com/wp-content/uploads/2015/05/peggy-survivor-lead.png?w=1156&h=862&crop=1";
  profileImage.style.backgroundImage =
    "url('https://decider.com/wp-content/uploads/2015/05/peggy-survivor-lead.png?w=1156&h=862&crop=1')";
  phoneCardElement.href = "";
  emailCardElement.href = "";
  linkedinCardElement.href = "";
  githubCardElement.href = "";
  requiredElement.innerHTML = "";
  localStorage.removeItem("userData");

  cardElement.classList.remove("palette-1", "palette-2", "palette-3");

  const checkedPalette = document.querySelector(".js-palette:checked");
  const checkedPaletteValue = 1;
  cardElement.classList.add("palette-" + checkedPaletteValue);
  handlePalette();
}

resetButtonElement.addEventListener("click", resetInfo);

//# sourceMappingURL=main.js.map
