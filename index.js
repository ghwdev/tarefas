$(document).ready(function() {
  for (let i = 0; i < localStorage.length; i++) {
    let chave = localStorage.key(i);
    let valores = localStorage.getItem(chave);

    var sla = document.createElement("li");
    var ul = document.querySelector("ul");
    ul.appendChild(sla);

    $(sla).text(valores);

    $(sla).dblclick(function() {
      $(this).css("display", "none");
      localStorage.removeItem(chave);
    });
  }
});

$("span").click(function () { 
  $(".tudo").toggleClass("abrir");
  $(".lista").toggleClass("abrir2");
  $("span").toggleClass("w");
});
$(".ap").click(function ad() {
  localStorage.clear();
  location.reload();
})
$(".adi").click(function() {
  var inp = document.querySelectorAll("input");
  var sla = document.createElement("li");
  var ul = document.querySelector("ul");
  ul.appendChild(sla);

  var valores = Array.from(inp).map(input => input.value).join(", ");

  let chave = Date.now().toString();

  localStorage.setItem(chave, valores);

  let get = localStorage.getItem(chave);

  $(sla).text(get);
inp.forEach(function(input) {
    input.value = "";  
  });

  $(sla).dblclick(function() {
    $(this).css("display", "none");
    localStorage.removeItem(chave);
  });
});


