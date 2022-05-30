let touches = [...document.querySelectorAll(".button")];
let listkeycode = touches.map((element) => element.dataset.key);
let ecran = document.querySelector(".ecran");
document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode.toString();
  calculer(valeur);
  // console.log(valeur, typeof valeur);
});

document.addEventListener("click", (e) => {
  // console.log(e);
  const valeur = e.target.dataset.key;
  calculer(valeur);
  console.log(valeur);
});

const calculer = (valeur) => {
  if (listkeycode.includes(valeur)) {
    switch (valeur) {
      case "8":
        ecran.textContent = "";
        break;
      case "13":
        let calcul = eval(ecran.textContent);
        ecran.textContent = calcul;
        break;
      default:
        let indexkeyCode = listkeycode.indexOf(valeur);
        let touche = touches[indexkeyCode];
        ecran.textContent += touche.innerHTML;
    }
  }
};
window.addEventListener("error", function (e) {
  this.alert("une erreur est survenue dans votre calcul." + e.message);
});
