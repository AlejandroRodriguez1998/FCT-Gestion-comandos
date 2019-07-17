
var arrayOpciones = ["Ping","Traceroute","Whois","DIG","Web","Nmap","NRPE","Nbtscan","SNMP"];
var arrayWeb = ["Respuesta web","Ver web"];
var arraySNMP = ["Consulta SNMP","IfStatus"];

function crearOpciones(){
    var tituloPag = document.getElementById("titulo");
    tituloPag.innerHTML = "Herramientas de red";

    var tarjetas = document.getElementById("tarjetasZona");
    tarjetas.removeAttribute("class");
    tarjetas.setAttribute("class","row centrarVert align-items-center w-50 m-auto justify-content-center");

	while (tarjetas.firstChild) {
		tarjetas.removeChild(tarjetas.firstChild);
    }

    for(let i = 0; i < arrayOpciones.length; i++){
        var tarjeta = document.createElement("div");
        
        var boton = document.createElement("button");
        boton.setAttribute("type","button");
        boton.setAttribute("class","buttonInicio");
        boton.setAttribute("value", arrayOpciones[i]);

        if(arrayOpciones[i] == "Web" || arrayOpciones[i] == "SNMP"){
            boton.addEventListener("click", crearCarpeta);
        }else{
            boton.addEventListener("click", crearFormularios);
        }
    
        var imagen = document.createElement("img");
        imagen.setAttribute("class","");
        imagen.setAttribute("style","width: 70px;");
		imagen.setAttribute("src","code/img/"+arrayOpciones[i]+".png");
        imagen.setAttribute("alt",arrayOpciones[i]);

        var titulo = document.createElement("p");
        titulo.setAttribute("class","m-0");
        titulo.appendChild(document.createTextNode(arrayOpciones[i]));

		tarjetas.appendChild(tarjeta);
        tarjeta.appendChild(boton);
        boton.appendChild(imagen);
        boton.appendChild(titulo);
    }
}

function crearCarpeta(){
    var valorBoton = this.value;

    var tituloPag = document.getElementById("titulo");
    tituloPag.innerHTML = "Herramientas de red: <span>" + valorBoton + "</span>";

    if(valorBoton == "Web"){
        var array = arrayWeb;
    }else{
        var array = arraySNMP;
    }

    var tarjetas = document.getElementById("tarjetasZona");
    tarjetas.removeAttribute("class");
    tarjetas.setAttribute("class","row centrarVert align-items-center w-75 m-auto justify-content-center");

	while (tarjetas.firstChild) {
		tarjetas.removeChild(tarjetas.firstChild);
    }

    var tarjeta = document.createElement("div");
    tarjeta.setAttribute("class","col-12 p-0");

    var columna = document.createElement("div");
    columna.setAttribute("class","row m-auto justify-content-center");

    var volver = document.createElement("button");
    volver.setAttribute("type","button");
    volver.setAttribute("class","btn btn-light pl-3 pr-3");
    volver.setAttribute("value", "consultar");
    volver.appendChild(document.createTextNode("Volver"));
    volver.addEventListener("click", crearOpciones);
    
    tarjetas.appendChild(tarjeta);
    tarjeta.appendChild(columna);
    
    for(let i = 0; i < array.length; i++){
        var subTarjeta = document.createElement("div");
        
        var subBoton = document.createElement("button");
        subBoton.setAttribute("type","button");
        subBoton.setAttribute("class","buttonInicio");
        subBoton.setAttribute("value", array[i]);
        subBoton.addEventListener("click", crearFormularios);
        
        var subImagen = document.createElement("img");
        subImagen.setAttribute("class","");
        subImagen.setAttribute("style","width: 70px;");
		subImagen.setAttribute("src","code/img/"+array[i]+".png");
        subImagen.setAttribute("alt",array[i]);

        var subTitulo = document.createElement("p");
        subTitulo.setAttribute("class","m-0");
        subTitulo.appendChild(document.createTextNode(array[i]));

		columna.appendChild(subTarjeta);
        subTarjeta.appendChild(subBoton);
        subBoton.appendChild(subImagen);
        subBoton.appendChild(subTitulo);
    }

    tarjeta.appendChild(volver);
}

function crearFormularios(){
    var tarjetas = document.getElementById("tarjetasZona");
    tarjetas.removeAttribute("class");
    tarjetas.setAttribute("class","row centrarVert align-items-center w-75 m-auto justify-content-center");

	while (tarjetas.firstChild) {
		tarjetas.removeChild(tarjetas.firstChild);
    }

    var valorBoton = this.value;

    var tituloPag = document.getElementById("titulo");
    tituloPag.innerHTML = "Herramientas de red: <span>" + valorBoton + "</span>";

    var tarjeta = document.createElement("div");
    tarjeta.setAttribute("class","card col-12 p-2 alturaMaxima");

    var formulario = document.createElement("form");
    formulario.setAttribute("id", "formularioComandos");
    formulario.setAttribute("onsubmit","return false");
    formulario.setAttribute("class","m-auto");

    var divError = document.createElement("div");
    divError.setAttribute("id","divError");

    var consultar = document.createElement("button");
    consultar.setAttribute("type","submit");
    consultar.setAttribute("class","btn btn-light ml-2");
    consultar.appendChild(document.createTextNode("Consultar"));

    var volver = document.createElement("button");
    volver.setAttribute("type","button");
    volver.setAttribute("class","btn btn-light pl-3 pr-3");
    volver.appendChild(document.createTextNode("Volver"));
    volver.addEventListener("click", crearOpciones);
    
    var resultado = document.createElement("div");
    resultado.setAttribute("class","card col-12 p-2 alturaMaxima");
    resultado.setAttribute("id","resultado");

    tarjetas.appendChild(tarjeta);
    tarjetas.appendChild(resultado);
    tarjeta.appendChild(formulario);
    
    switch(valorBoton){
        case "Ping":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Dirección IP: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input1.setAttribute("placeholder","10.123.14.2");
            input1.setAttribute("maxlength","20");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","IP");

            var divError1 = document.createElement("div");
            divError1.setAttribute("id", "divError1");

            var divControl2 = document.createElement("div");
            divControl2.setAttribute("class","form-group");

            var label2 = document.createElement("label");
            label2.setAttribute("for","inputCampo2");
            label2.appendChild(document.createTextNode("Número: "));

            var input2 = document.createElement("input");
            input2.setAttribute("class","form-control");
            input2.setAttribute("type","text");
            input2.setAttribute("style","margin-left: 10px; width: 20%; display: inline-block");
            input2.setAttribute("maxlength","2");
            input2.setAttribute("id","inputCampo2");
            input2.setAttribute("name","Numero");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);
            formulario.appendChild(divError1);
            formulario.appendChild(divControl2);
            divControl2.appendChild(label2);
            divControl2.appendChild(input2);

            consultar.setAttribute("value", valorBoton);

            break;
        case "Traceroute":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Dirección IP: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input1.setAttribute("maxlength","20");
            input1.setAttribute("placeholder","10.123.14.2");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","IP");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);

            consultar.setAttribute("value", valorBoton);

            break;
        case "Whois":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Dirección IP: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input1.setAttribute("maxlength","20");
            input1.setAttribute("placeholder","10.123.14.2");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","IP");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);

            consultar.setAttribute("value", valorBoton);

            break;
        case "DIG":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Servidor DNS: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input1.setAttribute("maxlength","20");
            input1.setAttribute("placeholder","10.123.14.2");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","DNS");

            var divError1 = document.createElement("div");
            divError1.setAttribute("id", "divError1");

            var divControl2 = document.createElement("div");
            divControl2.setAttribute("class","form-group");

            var label2 = document.createElement("label");
            label2.setAttribute("for","inputCampo2");
            label2.appendChild(document.createTextNode("Recurso: "));

            var input2 = document.createElement("input");
            input2.setAttribute("class","form-control");
            input2.setAttribute("type","text");
            input2.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input2.setAttribute("maxlength","20");
            input2.setAttribute("id","inputCampo2");
            input2.setAttribute("name","Recurso");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);
            formulario.appendChild(divError1);
            formulario.appendChild(divControl2);
            divControl2.appendChild(label2);
            divControl2.appendChild(input2);

            consultar.setAttribute("value", valorBoton);

            break;
        case "Respuesta web":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("URL: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","width: 100%;");
            input1.setAttribute("maxlength","30");
            input1.setAttribute("placeholder","https://www.google.com");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","URL");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);

            consultar.setAttribute("value", valorBoton);
            volver.setAttribute("value","Web");
            volver.addEventListener("click", crearCarpeta);

            break;
        case "Ver web":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("URL: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","width: 100%;");
            input1.setAttribute("maxlength","30");
            input1.setAttribute("placeholder","https://www.google.com");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","URL");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);

            consultar.setAttribute("value", valorBoton);
            volver.setAttribute("value","Web");
            volver.addEventListener("click", crearCarpeta);

            break;
        case "Nmap":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Dirección IP: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input1.setAttribute("maxlength","20");
            input1.setAttribute("placeholder","10.123.14.2");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","IP");

            var divError1 = document.createElement("div");
            divError1.setAttribute("id", "divError1");

            var divControl2 = document.createElement("div");
            divControl2.setAttribute("class","form-group");

            var label2 = document.createElement("label");
            label2.setAttribute("for","inputCampo2");
            label2.appendChild(document.createTextNode("Puerto: "));

            var input2 = document.createElement("input");
            input2.setAttribute("class","form-control");
            input2.setAttribute("type","text");
            input2.setAttribute("style","margin-left: 10px; width: 20%; display: inline-block");
            input2.setAttribute("maxlength","5");
            input2.setAttribute("id","inputCampo2");
            input2.setAttribute("name","Puerto");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);
            formulario.appendChild(divError1);
            formulario.appendChild(divControl2);
            divControl2.appendChild(label2);
            divControl2.appendChild(input2);

            consultar.setAttribute("value", valorBoton);

            break;
        case "NRPE":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Orden: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","width: 100%;");
            input1.setAttribute("maxlength","50");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","Orden");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);
        
            consultar.setAttribute("value", valorBoton);

            break;
        case "Nbtscan":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Dirección IP: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input1.setAttribute("maxlength","20");
            input1.setAttribute("placeholder","10.123.14.2");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","IP");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);
            
            consultar.setAttribute("value", valorBoton);

            break;
        case "Consulta SNMP":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Dirección IP: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input1.setAttribute("maxlength","20");
            input1.setAttribute("placeholder","10.123.14.2");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","IP");

            var divError1 = document.createElement("div");
            divError1.setAttribute("id", "divError1");

            var divControl2 = document.createElement("div");
            divControl2.setAttribute("class","form-group");

            var label2 = document.createElement("label");
            label2.setAttribute("for","inputCampo2");
            label2.appendChild(document.createTextNode("Community: "));

            var input2 = document.createElement("input");
            input2.setAttribute("class","form-control");
            input2.setAttribute("type","text");
            input2.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input2.setAttribute("maxlength","20");
            input2.setAttribute("id","inputCampo2");
            input2.setAttribute("name","Community");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);
            formulario.appendChild(divError1);
            formulario.appendChild(divControl2);
            divControl2.appendChild(label2);
            divControl2.appendChild(input2);

            consultar.setAttribute("value", valorBoton);
            volver.setAttribute("value","SNMP");
            volver.addEventListener("click", crearCarpeta);

            break;
        case "IfStatus":
            var divControl1 = document.createElement("div");
            divControl1.setAttribute("class","form-group");
            
            var label1 = document.createElement("label");
            label1.setAttribute("for","inputCampo1");
            label1.appendChild(document.createTextNode("Dirección IP: "));

            var input1 = document.createElement("input");
            input1.setAttribute("class","form-control");
            input1.setAttribute("type","text");
            input1.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input1.setAttribute("maxlength","20");
            input1.setAttribute("placeholder","10.123.14.2");
            input1.setAttribute("id","inputCampo1");
            input1.setAttribute("name","IP");

            var divError1 = document.createElement("div");
            divError1.setAttribute("id", "divError1");

            var divControl2 = document.createElement("div");
            divControl2.setAttribute("class","form-group");

            var label2 = document.createElement("label");
            label2.setAttribute("for","inputCampo2");
            label2.appendChild(document.createTextNode("Community: "));

            var input2 = document.createElement("input");
            input2.setAttribute("class","form-control");
            input2.setAttribute("type","text");
            input2.setAttribute("style","margin-left: 10px; width: 50%; display: inline-block");
            input2.setAttribute("maxlength","20");
            input2.setAttribute("id","inputCampo2");
            input2.setAttribute("name","Community");

            formulario.appendChild(divControl1);
            divControl1.appendChild(label1);
            divControl1.appendChild(input1);
            formulario.appendChild(divError1);
            formulario.appendChild(divControl2);
            divControl2.appendChild(label2);
            divControl2.appendChild(input2);

            consultar.setAttribute("value", valorBoton);
            volver.setAttribute("value","SNMP");
            volver.addEventListener("click", crearCarpeta);

            break;
    }

    consultar.addEventListener("click", llamadaServidor);
    formulario.appendChild(divError);

    var divBotones = document.createElement("div");
    divBotones.setAttribute("class","form-group text-center");

    formulario.appendChild(divBotones);
    divBotones.appendChild(volver);
    divBotones.appendChild(consultar);
}

function validar(){
    var inputObligVal = $("#inputCampo1").val();
    var inputObligName = $("#inputCampo1").attr("name");

    var inputSecVal = $("#inputCampo2").val();
    var inputSecName = $("#inputCampo2").attr("name");

    var buscarOpcion;
    var validacionFinal = false;
    var validacion1Input = false;
    var validacion2Input = false;

    var patronID = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    var patronURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    var patronRec = /^[\wñ\.]+$/;
    var patronNum = /^[0-9]{1,2}$/;
    var patronPuerto = /^[0-9]{1,5}$/;
    var patronString = /^[A-Za-zñ]+$/;

    inputSecName == undefined ? buscarOpcion = inputObligName : buscarOpcion = inputObligName +"&"+ inputSecName;

    switch (buscarOpcion) {
        case "IP&Numero":
            patronID.test(inputObligVal) ? validacion1Input = true && $("#divError1").html("") : $("#divError1").html("<p>La IP no esta bien formada.<p>");
            patronNum.test(inputSecVal) ? validacion2Input = true && $("#divError").html("") : $("#divError").html("<p>El numero no es correcto, <br> debe ser mayor a 0 y menor de 3 cifras.<p>");
            if(validacion1Input && validacion2Input){ validacionFinal = true; };
            return validacionFinal;
        case "IP":
            patronID.test(inputObligVal) ? validacionFinal = true : $("#divError").html("<p>La IP no esta bien formada.<p>");
            return validacionFinal;
        case "DNS&Recurso":
            patronID.test(inputObligVal) ? validacion1Input = true && $("#divError1").html("") : $("#divError1").html("<p>La IP no esta bien formada.<p>");
            patronRec.test(inputSecVal) ? validacion2Input = true && $("#divError").html("") : $("#divError").html("<p>El recurso solo acepta letras y numeros.<p>");
            if(validacion1Input && validacion2Input){ validacionFinal = true; };
            return validacionFinal;
        case "URL":
            patronURL.test(inputObligVal) ? validacionFinal = true : $("#divError").html("<p>La URL no esta bien formada<p>");
            return validacionFinal;
        case "IP&Puerto":
            patronID.test(inputObligVal) ? validacion1Input = true && $("#divError1").html("") : $("#divError1").html("<p>La IP no esta bien formada.<p>");
            patronPuerto.test(inputSecVal) ? validacion2Input = true && $("#divError").html("") : $("#divError").html("<p>El puerto no es correcto, <br> debe ser mayor a 0 y menor de 6 cifras.<p>");
            if(validacion1Input && validacion2Input){ validacionFinal = true; };
            return validacionFinal;
        case "Orden":
            patronString.test(inputObligVal) ? validacionFinal = true : $("#divError").html("<p>La orden solo acepta letras.<p>");
            return validacionFinal
        case "IP&Community":
            patronID.test(inputObligVal) ? validacion1Input = true && $("#divError1").html("") : $("#divError1").html("<p>La IP no esta bien formada.<p>");
            patronString.test(inputSecVal) ? validacion2Input = true && $("#divError").html("") : $("#divError").html("<p>El campo community solo acepta letras.<p>");
            if(validacion1Input && validacion2Input){ validacionFinal = true; };
            return validacionFinal;
    }
}

function llamadaServidor(){
    var validacion = validar();

    if(validacion){
        var frm = $("#formularioComandos").serialize();
        var valorBoton = this.value;

        $.ajax({
            type: "POST",
            url: "code/systemtool_c/operaciones.php",
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            data: frm += "&operacion=" + valorBoton
        });

        $.ajax({
            type: "GET",
            url: "code/systemtool_c/archivo.txt",
            timeout: 100
        }).done(function(info){
            

            console.log(info);

            var tarjetas = document.getElementById("resultado");

            while (tarjetas.firstChild) {
                tarjetas.removeChild(tarjetas.firstChild);
            }

            var tarjeta = document.createElement("pre");
            tarjeta.setAttribute("class","w-100 p-0 text-white");

            tarjetas.appendChild(tarjeta);
            tarjeta.innerHTML = info;
        });

    }
}

window.onload = function(){
    crearOpciones();
}