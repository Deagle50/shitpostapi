var fs = require("fs");
var path = process.cwd();

// exports.obtenerObjeto = obtenerObjeto;

// module.exports = {
//   obtenerObjeto: obtenerObjeto,

//   dividirPorSaltos: function dividirPorSaltos(text) {
//     return text.split(/\r?\n|\r|\n/g);
//   },

//   filtrarKK: function filtrarKK(text) {
//     var mensajesProhibidos = [
//       "[8/3/23, 10:03:31] Rico: Que molaría dejar solo 💩",
//       "[8/3/23, 11:07:23] Urko: Ya, pues ya sabemos. A solo mandar 💩",
//     ];
//     var nuevaLista = [
//       "[8/3/23, 08:15:01] Unai: 💩",
//       "[8/3/23, 09:15:12] Unai: 💩",
//       "[8/3/23, 09:52:15] Unai: 💩",
//     ];
//     text.forEach((element) => {
//       if (element.includes("💩")) {
//         nuevaLista.push(element);
//       }
//     });
//     // Ñipiti ñapiti, no consigo hacer split del segundo mensaje, así que a mano xd
//     nuevaLista.splice(6, 1);
//     nuevaLista.splice(5, 1);

//     return nuevaLista;
//   },

//   convertirAObjeto: function convertirAObjeto(texto) {
//     var listaObjetos = [];
//     texto.forEach((element) => {
//       var nuevoObjeto = {};

//       nuevoObjeto.fecha = obtenerFecha(element);
//       nuevoObjeto.nombre = obtenerNombre(element);

//       listaObjetos.push(nuevoObjeto);
//     });

//     return listaObjetos;
//   },

//   obtenerFecha: function obtenerFecha(element) {
//     var textoFecha = element.substring(
//       element.indexOf("[") + 1,
//       element.lastIndexOf("]")
//     );

//     var horaSola = textoFecha.substring(textoFecha.indexOf(",") + 1);
//     var fechaSola = textoFecha.substring(0, textoFecha.indexOf(","));

//     var partesFecha = fechaSola.split("/");
//     // month is 0-based, that's why we need dataParts[1] - 1
//     var objetoFecha = new Date(
//       "20" + partesFecha[2].toString(),
//       +partesFecha[1] - 1,
//       +partesFecha[0]
//     );

//     var partesHora = horaSola.split(":");
//     // Gitanada para poner en hora real (el +1)
//     objetoFecha.setHours(+partesHora[0] + 1);
//     objetoFecha.setMinutes(partesHora[1]);
//     objetoFecha.setSeconds(partesHora[2]);

//     return objetoFecha;
//   },

//   obtenerNombre: function obtenerNombre(texto) {
//     var textoSinFecha = texto.substring(texto.indexOf("] ") + 2, texto.length);
//     var nombre = textoSinFecha.substring(0, textoSinFecha.indexOf(":"));
//     return nombre;
//   },

//   obtenerSetNombres: function obtenerSetNombres(array) {
//     var setNombres = new Set();

//     array.forEach((element) => {
//       setNombres.add(element.nombre);
//     });

//     return setNombres;
//   },

//   obtenerListaNombre: function obtenerListaNombre(nombre) {
//     var lista = obtenerObjeto();
//     var listaNombre = [];

//     lista.forEach((element) => {
//       console.log();
//       if (element.nombre == nombre) {
//         listaNombre.push(element);
//       }
//     });
//     return listaNombre;
//   },

//   sumaTodosMeses: function sumaTodosMeses(array) {
//     var setNombres = obtenerSetNombres(array);
//     var objeto = {};

//     setNombres.forEach((element) => {
//       objeto[element] = 0;
//     });

//     array.forEach((element) => {
//       objeto[element.nombre]++;
//     });
//     return objeto;
//   },

//   sumaPorMes: function sumaPorMes(array) {
//     var arrayFinal = [];
//     var setNombres = obtenerSetNombres(array);

//     for (let i = 0; i < 12; i++) {
//       var objetoVacio = {};
//       setNombres.forEach((element) => {
//         objetoVacio[element] = 0;
//       });
//       arrayFinal[i] = objetoVacio;
//     }

//     array.forEach((element) => {
//       // arrayFinal[element.fecha.getMonth()][element.nombre] =
//       //   arrayFinal[element.fecha.getMonth()][element.nombre] + 1;
//       arrayFinal[element.fecha.getMonth()][element.nombre] += 1;
//     });
//     return arrayFinal;
//   },

//   sumaSoloMes: function sumaSoloMes(lista, mes) {
//     return lista[mes - 1];
//   },

//   sumaPorMesPersona: function sumaPorMesPersona(lista, nombre) {
//     var listaNombre = [];
//     lista.forEach((element, index) => {
//       listaNombre.push({ cantidad: element[nombre], mes: meses[index] });
//     });

//     return listaNombre;
//   },
// };

function dividirPorSaltos(text) {
  return text.split(/\r?\n|\r|\n/g);
}

function filtrarKK(text) {
  var mensajesProhibidos = [
    "[8/3/23, 10:03:31] Rico: Que molaría dejar solo 💩",
    "[8/3/23, 11:07:23] Urko: Ya, pues ya sabemos. A solo mandar 💩",
  ];
  var nuevaLista = [
    "[8/3/23, 08:15:01] Unai: 💩",
    "[8/3/23, 09:15:12] Unai: 💩",
    "[8/3/23, 09:52:15] Unai: 💩",
  ];
  text.forEach((element) => {
    if (element.includes("💩")) {
      nuevaLista.push(element);
    }
  });
  // Ñipiti ñapiti, no consigo hacer split del segundo mensaje, así que a mano xd
  nuevaLista.splice(6, 1);
  nuevaLista.splice(5, 1);

  return nuevaLista;
}

function convertirAObjeto(texto) {
  var listaObjetos = [];
  texto.forEach((element) => {
    var nuevoObjeto = {};

    nuevoObjeto.fecha = obtenerFecha(element);
    nuevoObjeto.nombre = obtenerNombre(element);

    listaObjetos.push(nuevoObjeto);
  });

  return listaObjetos;
}

function obtenerFecha(element) {
  var textoFecha = element.substring(
    element.indexOf("[") + 1,
    element.lastIndexOf("]")
  );

  var horaSola = textoFecha.substring(textoFecha.indexOf(",") + 1);
  var fechaSola = textoFecha.substring(0, textoFecha.indexOf(","));

  var partesFecha = fechaSola.split("/");
  // month is 0-based, that's why we need dataParts[1] - 1
  var objetoFecha = new Date(
    "20" + partesFecha[2].toString(),
    +partesFecha[1] - 1,
    +partesFecha[0]
  );

  var partesHora = horaSola.split(":");
  // Gitanada para poner en hora real (el +1)
  objetoFecha.setHours(+partesHora[0] + 1);
  objetoFecha.setMinutes(partesHora[1]);
  objetoFecha.setSeconds(partesHora[2]);

  return objetoFecha;
}

function obtenerNombre(texto) {
  var textoSinFecha = texto.substring(texto.indexOf("] ") + 2, texto.length);
  var nombre = textoSinFecha.substring(0, textoSinFecha.indexOf(":"));
  return nombre;
}

function obtenerSetNombres(array) {
  var setNombres = new Set();

  array.forEach((element) => {
    setNombres.add(element.nombre);
  });

  return setNombres;
}

function obtenerListaNombre(nombre) {
  var lista = obtenerObjeto();
  var listaNombre = [];

  lista.forEach((element) => {
    console.log();
    if (element.nombre == nombre) {
      listaNombre.push(element);
    }
  });
  return listaNombre;
}

function sumaTodosMeses(array) {
  var setNombres = obtenerSetNombres(array);
  var objeto = {};

  setNombres.forEach((element) => {
    objeto[element] = 0;
  });

  array.forEach((element) => {
    objeto[element.nombre]++;
  });
  return objeto;
}

function sumaPorMes(array) {
  var arrayFinal = [];
  var setNombres = obtenerSetNombres(array);

  for (let i = 0; i < 12; i++) {
    var objetoVacio = {};
    setNombres.forEach((element) => {
      objetoVacio[element] = 0;
    });
    arrayFinal[i] = objetoVacio;
  }

  array.forEach((element) => {
    // arrayFinal[element.fecha.getMonth()][element.nombre] =
    //   arrayFinal[element.fecha.getMonth()][element.nombre] + 1;
    arrayFinal[element.fecha.getMonth()][element.nombre] += 1;
  });
  return arrayFinal;
}

function sumaSoloMes(lista, mes) {
  return lista[mes - 1];
}

function sumaPorMesPersona(lista, nombre) {
  var listaNombre = [];
  lista.forEach((element, index) => {
    listaNombre.push({ cantidad: element[nombre], mes: meses[index] });
  });

  return listaNombre;
}

const getName = () => {
  return "Jim";
};

const getLocation = () => {
  return "Munich";
};

const obtenerObjeto = () => {
  var textoEntero = fs.readFileSync(path + "\\chat.txt");
  var textoDivido = dividirPorSaltos(textoEntero.toString());
  var textoKK = filtrarKK(textoDivido);
  var objetoEntero = convertirAObjeto(textoKK);
  return objetoEntero;
};

const dateOfBirth = "12.01.1982";

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
exports.obtenerObjeto = obtenerObjeto;
exports.sumaPorMes = sumaPorMes;
exports.sumaPorMesPersona = sumaPorMesPersona;
exports.sumaSoloMes = sumaSoloMes;
exports.obtenerListaNombre = obtenerListaNombre;
exports.sumaTodosMeses = sumaTodosMeses;
