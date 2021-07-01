//declarar variables que se usaran
let nombre, carrera, msg;
let nomMsg = "Ingresa tu nombre y apellido por favor";
let carMsg = "Ingresa tu carrera";

//creo funcion para validar que los prompt tenga un valor distinto a vacio o null
//en ella recibo dos argumentos fact y msg
//fact hace referencia al dato que necesitamos manipular y msg al mensaje que mostrará el prompt
const validate = ( fact, msg ) => {
    //mientras el prompt este activo
    while(true){
        //hara la consulta si el input está vacio o tiene valor null que se obtiene al presionar cancel
        fact = (prompt(msg))
        if (fact === '' || fact === null){
            //si está vacio o con valor null mostrará la alerta 
            alert(`Por favor ingrese un ${fact} valido`)
        }
        else {
            //si el valor es valido nos retornará el dato
            return fact;
        }
    }
};

//creo funcion para capitalizar cada palabra despues del espacio
//ésta recibe un argumento 
const capitalizeEachFirt = (fact) => {
    //utilizando expresiones regulares (patrones para buscar/reemplazar valores especificos)
    //despues de cada espacio o inicio de palabra una mayuscula
   return fact.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
};

//creo funcion para capitalizar solo la primera palabra
const capitalizeFirt = (fact) => {
    //igual a la funcion anterior, pero más simple ya que es la primera letra de la oracion
     return fact.replace(/^\w/, (c) => c.toLocaleUpperCase());
};

//usamos las funcion validate para validar los datos y capitalizar para que el valor tenga formato
nombre = capitalizeEachFirt(validate(nombre, nomMsg));
carrera = capitalizeEachFirt(validate(carrera, carMsg));

//hacemos una funcion para calcular el promedio, con 3 argumentos
const promedio = (a, b, c) => {
    //.tofixed deja solo un decimal dependiendo del argumento
    return ((a + b + c)/3).toFixed(1);
};

//creamos un arreglo de objetos para guardar los datos
let ramos=[
    {
        ramo : null,
        nota1 : null,
        nota2 : null,
        nota3 : null,
        prom: null,
    },
    {
        ramo : null,
        nota1 : null,
        nota2 : null,
        nota3 : null,
        prom: null,
    },
    {
        ramo : null,
        nota1 : null,
        nota2 : null,

    },
];

//evaluamos el arreglo ramos para cada indice del mismo
ramos.forEach( (e, idx) => {
    //si el indice es 2 solo evaluará el objeto correspondiente para cumplir con los requerimientos
    if (idx === 2) {
        //usamos la funcion capitalize y validate para darle valor a los parametros, transformamos los numeros string a numeros enteros
        e.ramo = capitalizeFirt(validate( e.ramo, `Ingresa el nombre del ramo ${idx + 1} que estes cursando`));
        e.nota1 = parseInt(validate(e.nota1, `Ingresa nota 1, ${e.ramo}`));
        e.nota2 = parseInt(validate(e.nota2, `Ingresa nota 2, ${e.ramo}`));
    } else {
        //usamos la funcion capitalize y validate para darle valor a los parametros
        e.ramo = capitalizeFirt(validate(e.ramo, `Ingresa el nombre del ramo ${idx + 1} que estes cursando`));
        e.nota1 = parseInt(validate(e.nota1, `Ingresa nota 1, ${e.ramo}`));
        e.nota2 = parseInt(validate(e.nota2, `Ingresa nota 2, ${e.ramo}`));
        e.nota3 = parseInt(validate(e.nota3, `Ingresa nota 3, ${e.ramo}`));
        e.prom = parseInt(promedio( e.nota1, e.nota2, e.nota3 ));
    }
    //console.log(ramos)
});

//creamos una variable para calcular cual es la nota para aprobar
let notaAprobar = (4*3)-( ramos[2].nota1 + ramos[2].nota1 );

//evaluamos si la nota para aprobar es mayor a 7 para que el mensaje sea dinamico
if (notaAprobar > 7) {
    msg = `No podras aprobar el ramo ${ramos[2].ramo}`
} else {
    msg = `Para aprobar el ramo ${ramos[2].ramo} con nota 4, necesitas un ${notaAprobar} en la nota 3`;
}

//escribimos  en el html con back stick para hacer una plantilla literal, con ello podemos usar variables dentro de la misma con el ${ variable }
document.write(`
    <main class="container">
        <section class="row">
            <div class="col">
                <h1 class="pt-4">Notas Finales</h1>
                <br>
                <div class="d-flex">
                <p class="font-weight-bold pr-5">Nombre: </p>
                <p class="font-weight-lighter"> ${nombre}</p>
                </div>
                <div class="d-flex">
                <p class="font-weight-bold pr-5">Carrera: </p>
                <p class="font-weight-lighter"> ${carrera}</p>
                </div>
                <br>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Ramos</th>
                        <th scope="col">Nota 1</th>
                        <th scope="col">Nota 2</th>
                        <th scope="col">Nota 3</th>
                        <th scope="col">Promedio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"> ${ramos[0].ramo} </th>
                        <td> ${ramos[0].nota1} </td>
                        <td> ${ramos[0].nota2} </td>
                        <td> ${ramos[0].nota3} </td>
                        <td> ${ramos[0].prom} </td>
                        </tr>
                        <tr>
                        <th scope="row"> ${ramos[1].ramo} </th>
                        <td> ${ramos[1].nota1} </td>
                        <td> ${ramos[1].nota2} </td>
                        <td> ${ramos[1].nota3} </td>
                        <td> ${ramos[1].prom} </td>
                        </tr>
                        <th scope="row"> ${ramos[2].ramo} </th>
                        <td> ${ramos[2].nota1} </td>
                        <td> ${ramos[2].nota2} </td>
                        <td> - </td>
                        <td> - </td>
                        </tr>
                    </tbody>
                    </table>
                    <br>
                    <p class="font-weight-lighter"> ${msg} </p>
                </div>
            </section>
        </main>`
        )
        