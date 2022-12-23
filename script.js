if (!localStorage.notas){
  var notas = [];
  localStorage.setItem('notas', JSON.stringify(notas));
}
function salvar_nota(){
  var notas = JSON.parse(localStorage.getItem('notas'));
  var title = document.getElementById("title").value;
  var texto = document.getElementById("texto").value;
  var tam = notas.length;
  var nota = new Object();
  nota.title = title;
  nota.texto = texto;
  notas[tam] = nota;
  localStorage.setItem('notas', JSON.stringify(notas));
  window.location.href="index.html"
}

function mostrar_notas(){
  var notas = JSON.parse(localStorage.getItem('notas'));
  var tam = notas.length;
  var listanotas = document.getElementById("lista_notas");
  if(tam == 0){
    var p = document.createElement("p"); // cria o elemento HTML;
    var text = document.createTextNode("Não há notas salvas");
    p.appendChild(text);
    p.classList.add("text-center");
    p.classList.add("msg");
    listanotas.appendChild(p);
  }else{
    for(var i = 0; i<tam; i++){
      var h4 = document.createElement("h4"); // cria o elemento HTML;
      var p = document.createElement("p"); // cria o elemento HTML;
      var title = document.createTextNode(notas[i].title); // cria um texto
      h4.appendChild(title);
      var texto = document.createTextNode(notas[i].texto); // cria um texto    
      p.appendChild(texto);
      listanotas.appendChild(h4);
      listanotas.appendChild(p);
    }
  }
}