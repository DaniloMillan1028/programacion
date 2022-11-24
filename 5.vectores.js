const numeros = [5, 1, 4];
const vectores = {
  mayor: "",
  menor: "",
  media: "",
};
numeros.forEach((element, index) => {
  // console.log(element, "padre")
  numeros.forEach((ele, index) => {
    // console.log(ele, "hijo")

    if (element > ele) {
      if (vectores.mayor) {
        if (vectores.mayor > element) {
        } else {
          vectores.mayor = element;
        }
      } else {
        vectores.mayor = element;
      }
    }
    if (element < ele) {
      if (vectores.menor) {
        if (vectores.menor < element) {
        } else {
          vectores.menor = element;
        }
      } else {
        vectores.menor = element;
      }
    }
  });
});
vectores.media = numeros.reduce((sumatoria, numero) => {
  return (sumatoria += numero / numeros.length);
});
console.log("numero mayor: ", vectores.mayor);
console.log("numero menor: ", vectores.menor);
console.log("numero de la media", vectores.media);
