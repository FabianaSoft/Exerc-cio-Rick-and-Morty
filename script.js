function buscar(){
    var input = document.getElementById('personagem').value;
    fetch("https://rickandmortyapi.com/api/character/"+input)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
      
}