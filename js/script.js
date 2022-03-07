var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var diaHora = agora.getDay()
var atual = document.getElementById('semana')

var day = document.getElementById('dia')
var minute = document.getElementById('minuto')
var hour = document.getElementById('hora')
var semana = 'dia'

var menu = document.querySelector('.menu')

function ativar(){
  
}

switch(diaHora){
  case 0:
    semana = 'domingo'
    break

  case 1:
      semana = 'segunda'
      break

  case 2:
    semana = 'terça'
    break

  case 3:
    semana = 'quarta'
    break

  case 4:
    semana = 'quinta'
    break

  case 5:
    semana = 'sexta'
    break 

  case 6:
      semana = 'sábado'
      break
  }

  if(hora.value >= 0 && hora.value < 12){
    day.innerHTML = 'Bom dia'
  }else if(hora.value >= 12 && hora.value < 18){
    day.innerHTML = 'Boa tarde'
  }else{
    day.innerHTML = 'Boa noite'
  }
  atual.innerHTML = semana
  hour.innerHTML = hora
  minute.innerHTML = minuto



 