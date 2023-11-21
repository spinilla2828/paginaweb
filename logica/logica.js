function saludar(){
    alert("Hola como estan.")
}

function endpoint(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://pokeapi.co/api/v2/pokemon/ditto", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}