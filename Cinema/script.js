var th = document.querySelector('table');
var i = ' ';
var y = ' ';
var meia = '';
var inteira = '';
var tr = document.querySelector('tr');
var cap = document.querySelector('caption');
th.addEventListener('click',onkeyup = function(evento) {
  var celula = evento.target;
  if((celula.className!='paintmid')&&(celula.className!='paint')&&(evento.shiftKey===true)&&(celula.className!='noborder')&&(celula!=th)&&(celula!=tr)&&(celula.className!='cap')){
  celula.className = 'paint';
  y++;
}
var pinteira = document.getElementById('inpute').value;
var preçointeira = ("Preço da Entrada Inteira : R$"+pinteira)
document.getElementById('inteira').innerHTML = preçointeira;
var pinteira1 = (y*pinteira);
var pi = ("O preço de todas Entradas Inteiras são : R$"+pinteira1)
document.getElementById('prei').innerHTML = pi;
});
th.addEventListener('click',onkeyup = function(evento){
  var celula = evento.target;
  if((celula.className!='paint')&&(celula.className!='paintmid')&&(celula.className!='noborder')&&(celula!=th)&&(celula!=tr)&&(evento.ctrlKey===true)&&(celula.className!='cap')){
  celula.className = 'paintmid';
  i++;
  }
  var pinteira = document.getElementById('inpute').value;
  var pmeia = pinteira/2
  var preçomeia = ("Preço da Meia-Entrada : R$"+pmeia)
  document.getElementById('meia').innerHTML = preçomeia;
  var pmeia1 = (i*pmeia);
  var pm = ("O preço de todas Meias-Entradas são : R$"+pmeia1)
  document.getElementById('prem').innerHTML = pm;
  var pinteira1 = (y*pinteira);
  var resultado = pmeia1+pinteira1;
  var mostrar = ("O total de dinheiro para pagar o cinema é de : R$"+resultado)
  document.getElementById('resultado').innerHTML = mostrar;
})
th.addEventListener('click',function(evento){
  var celula = evento.target;
  if(evento.altKey===true){
    if(celula.className=="paint"){
  celula.className = 'none';
  y--;
    }
    if(celula.className=="paintmid"){
  celula.className = 'none';
  i--;
    }
  }
})
