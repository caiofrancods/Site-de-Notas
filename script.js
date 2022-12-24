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
function apagar_notas(){
  localStorage.removeItem('notas');
  window.location.href="index.html";
}
function mostrar_notas(){
  var notas = JSON.parse(localStorage.getItem('notas'));
  var tam = notas.length;
  var listanotas = document.getElementById("lista_notas");
  if(tam == 0){
    var div = document.createElement("div");
    div.setAttribute('class', 'notas mt-3');
    var p = document.createElement("p"); // cria o elemento HTML;
    var text = document.createTextNode("Não há notas salvas");
    p.appendChild(text);
    p.classList.add("text-center");
    p.classList.add("msg");
    div.appendChild(p);
    listanotas.appendChild(div);
  }else{
    for(var i = 0; i<tam; i++){
      if(notas[i] != ''){
        var div_geral = document.createElement("div"); 
        listanotas.appendChild(div_geral);
        div_geral.setAttribute('class', 'notas mt-2 ml-4');
        var h4 = document.createElement("h4"); 
        var p = document.createElement("p"); 
        var title = document.createTextNode(notas[i].title);
        h4.appendChild(title);
        var texto = document.createTextNode(notas[i].texto); 
        p.appendChild(texto);
        div_geral.appendChild(h4);
        div_geral.appendChild(p);
        var div = document.createElement("div"); 
        div_geral.appendChild(div);
        var botao1 = document.createElement("button"); 
        botao1.setAttribute('class', 'btn btn-info');
        botao1.setAttribute('onclick', 'editar_nota('+String(i)+')');
        botao1.setAttribute('value', i);
        var text = document.createTextNode("Editar nota");
        botao1.appendChild(text);
        
        var botao2 = document.createElement("button"); 
        botao2.setAttribute('class', 'btn btn-danger ml-3');
        botao2.setAttribute('onclick', 'apagar_nota('+String(i)+')');
        botao2.setAttribute('value', i);
        var text = document.createTextNode("Apagar nota");
        botao2.appendChild(text);
        div.appendChild(botao1);
        div.appendChild(botao2);
      }
    }
  }
}
function apagar_nota(pos){
  var notas = JSON.parse(localStorage.getItem('notas'));
  notas[pos] = '';
  localStorage.setItem('notas', JSON.stringify(notas));
  window.location.href="index.html";
}
function editar_nota(pos){
  if (!localStorage.verif){
    var verif = '';
    localStorage.setItem('verif', JSON.stringify(verif));
    var campo_title = document.getElementById('title');
    var campo_texto = document.getElementById('texto');
    var notas = JSON.parse(localStorage.getItem('notas'));
    campo_title.value = notas[pos].title;
    campo_texto.value = notas[pos].texto;
    var button_salvar = document.getElementById('salvar_nota').style.display = 'none';
    var button_apagar_todas = document.getElementById('apagar_todas').style.display = 'none';
    
    var button_alterar = document.createElement("button"); 
    button_alterar.setAttribute('class', 'btn btn-info shadow-lg rounded');
    button_alterar.setAttribute('type', 'button');
    button_alterar.setAttribute('onclick', 'alterar_nota('+String(pos)+')');
    var text = document.createTextNode("Alterar Nota");
    button_alterar.appendChild(text);
    
    var button_cancelar = document.createElement("button"); 
    button_cancelar.setAttribute('class', 'btn btn-danger shadow-lg rounded ml-3');
    button_cancelar.setAttribute('type', 'button');
    button_cancelar.setAttribute('onclick', 'cancelar_alteracoes()');
    var text = document.createTextNode("Cancelar Alteração");
    button_cancelar.appendChild(text);
    
    var area_botoes = document.getElementById('area_botoes');
    area_botoes.appendChild(button_alterar);
    area_botoes.appendChild(button_cancelar);
  }
}

function alterar_nota(pos){
  var notas = JSON.parse(localStorage.getItem('notas'));
  var title = document.getElementById("title").value;
  var texto = document.getElementById("texto").value;
  notas[pos].title = title;
  notas[pos].texto = texto;
  localStorage.setItem('notas', JSON.stringify(notas));
  window.location.href="index.html"
  localStorage.removeItem('verif');
}

function cancelar_alteracoes(){
  var r=confirm("Tem certeza que deseja sair sem salvar as alterações?");
  if (r==true){
    window.location.href = 'index.html';
    localStorage.removeItem('verif');
  }
}