let nombre = "Guillermo Alejandro"; 
let apellido = "Larroca Martínez";
let estudiante = nombre.concat(" ", apellido); 
let estudiantesMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let longitud = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length - 1);
let sinEspacios = estudiante.replace(/ /g, "");
let bool = estudiante.includes(nombre);

