var estudiantes = {
  lista: [
    "ALI PINZON WILSON ALBERTO",
    "ARDILA ARRIETA ADRIAN ANDRES",
    "ARIZA CANTILLO JUAN CARLOS",
    "BLANCO MARTINEZ JANER JOSE",
    "BUITRAGO TABARES JEAN PAULGABRIEL",
    "LA CRUZ OROZCO RICARDO ANDRES",
    "DE LA VALLE ACUÑA JOSE DAVID ",
    "FERRER MARCONY JERSON DAVID",
    "FIGUEREDO ORTIZ PEDRO ANDRES",
    "FONTALVO ORTIZ DANIEL DAVID",
    "GONGORA AMAYA EDWIN",
    "JIMENEZ ALVAREZ HOLMAN JOSE",
    "JIMENEZ RINCON DANIEL FERNANDO",
    "JULIO SIERRA ERIK HARNER",
    "MARQUEZ HINOJOSA YORMARYS",
    "MEDINA HURTADO RONALDO ALFREDO",
    "MENDOZA VIVES GERARDO RAFAEL",
    "MUÑOZ BECERRA GUSTAVO ANTONIO",
    "NOSSA BARRIOS MICHAEL JOSE",
    "PEREA PIMIENTA ELVER YESID",
    "POLO PRADA ERNESTO FELIPE",
    "QUIÑONEZ NIER ADRIAN ORLANDO",
    "RAMIREZ MARADEY GABRIEL ENRIQUE",
    "RANGEL RINCON RICARDO",
    "RUBIO CASTELLANOS JOHN STEVEN",
    "SALCEDO CASSIANNI RAUL ESTEBAN",
    "SERRANO ROMERO DANIEL ALFONSO",
    "TANG CANTILLO JULIO CESAR",
    "VARELA MERCADO CARLOS ANDRES",
    "VARELA MERCADO CARLOS ANDRES",
  ],
  pathfoto: [],
};


const generar = () =>{
  let seleccionados = [];
  let contenedor = document.getElementById("lista");

  estudiantes.lista.forEach(nombre => {
    if(!seleccionados.includes(nombre)){
      let bloque = document.createElement("div");
      let alumno1 = document.createElement("p");
      let alumno2 = document.createElement("p");
      let icono = document.createElement("i");
      icono.classList.add("far");
      icono.classList.add("fa-heart");

      alumno1.innerHTML = nombre;
      seleccionados.push(nombre);

      let index = Math.round(Math.random() * estudiantes.lista.length);

      while (seleccionados.includes(estudiantes.lista[index])) {
        index = Math.round(Math.random() * estudiantes.lista.length);
      }

      alumno2.innerHTML = estudiantes.lista[index]
        ? estudiantes.lista[index]
        : estudiantes.lista[7];
      seleccionados.push(estudiantes.lista[index]);

      bloque.appendChild(alumno1);
      bloque.appendChild(icono);
      bloque.appendChild(alumno2);

      contenedor.appendChild(bloque);
    }
  })
}

const animar = () =>{
  let barra = document.getElementById("barra")
  let cantidad = 8;
  barra.style.height = cantidad + "%";
  let bandera = false;
  setInterval(() => {
    if (barra.style.height !== "100%"){
      barra.style.height = cantidad++ + "%";
    }else if(!bandera){
      generar()
      bandera = true;
    }
  }, 200);
}