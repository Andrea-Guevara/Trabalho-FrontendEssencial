window.onload = function() {
    fetch("https://randomuser.me/api/?results=5").then(resultado => {
       return resultado.json()
   }).then(response => {
       for (i = 0; i < 5; i++) {           
           document.getElementById("foto" + i).setAttribute("src", response.results[i].picture.large);
           document.getElementById("nome" + i).innerHTML = response.results[i].name.first + " " + response.results[i].name.last;
           document.getElementById("localizacao" + i).innerHTML = response.results[i].location.timezone.description;               
       }
   })
}