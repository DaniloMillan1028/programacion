class Cancion {
  constructor(titulo, artista, duracion, anio) {
    this.titulo = titulo;
    this.artista = artista;
    this.duracion = duracion;
    this.anio = anio;
  }
  //metodo
  gettitulo = function () {
    return this.titulo;
  };
  getartista = function () {
    return this.artista;
  };
  getduracion = function () {
    return this.duracion;
  };
  getannio = function () {
    return this.anio;
  };
  popular() {
    if (this.duracion < 1000);
    {
      console.log("la concion es popular");
    }
  }

  mostrar() {
    console.log(
      "mostar" +
        this.titulo +
        "interpretado pro " +
        this.artista +
        "se lanzo en " +
        this.anio
    );
  }
}
const cancion = new Cancion("nuevo", "carlos", "08/11/2022", "700");
console.log(cancion.gettitulo())
console.log(cancion);
cancion.mostrar();
cancion.popular();
let resul2=arr.reduce((prev,item,index) =>{
return prev + item;
})