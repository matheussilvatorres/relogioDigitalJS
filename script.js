function horas(){
    var data = new Date();

    var horas = data.getHours();
    let minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var space = document.getElementById("relogio");

    if (horas < 10) horas = "0" + horas;
        
    if (minutos < 10){
        minutos = "0" + minutos;
    }

    if (segundos < 10){
        segundos = "0" + segundos;
    }

    if (horas < 12){
        space.innerHTML = `<p> ${horas}:${minutos}:${segundos} AM </p>`
    } else{
        space.innerHTML = `<p> ${horas}:${minutos}:${segundos} PM </p>`
    }
    
    // Para a função ficar rodando de meio em meio segundo
    
}

setInterval(horas, 500)