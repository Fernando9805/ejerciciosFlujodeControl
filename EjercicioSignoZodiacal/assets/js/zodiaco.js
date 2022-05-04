function signoZodical() {
    let dia = parseInt(prompt(" Introduce tu día de nacimiento: ")); //Se solicita al usuario la fecha de nacimiento
    let mes = parseInt(prompt("Introduce tu mes de nacimiento en número")); //Se le solicita al usuario en que mes nacio, en numero
    if (dia > 0 && mes > 0 && dia <= 31 && mes <= 12) {
        
      if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) alert("Tu signo Zodiacal es: Acuario");
      if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) alert("Tu signo Zodiacal es: Piscis");
      if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) alert("Tu signo Zodiacal es: Aries");
      if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) alert("Tu signo Zodiacal es: Tauro");
      if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) alert("Tu signo Zodiacal es: Géminis");
      if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) alert("Tu signo Zodiacal es: Cáncer");
      if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) alert("Tu signo Zodiacal es: Leo");
      if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) alert("Tu signo Zodiacal es: Virgo");
      if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) alert("Tu signo Zodiacal es:Libra");
      if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
        alert("Escorpión");
      if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
        alert("Sagitario");
      if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
        alert("Capricornio");
    } else {
      alert("Dato mal ingresado"); //Esto es para mandar a decir que un dato fue mal ingresado
    }
  }
  signoZodical();