// apertura bottone 
let button = document.getElementById('button');
button.addEventListener('click', function(){
    
    // acquisizione valori input 
    const nome = document.getElementById('nome').value;
    console.log(nome)

    const km = document.getElementById('km').value;
    console.log(km)

    const eta = document.getElementById('eta').value;
    console.log(eta)

    // prezzo base 
    let prezzo = km * 0.21;
    console.log(prezzo)

    // calcolo prezzo minorenne 
    if (eta === 'minorenne'){
        prezzo = prezzo * 0.8;
        console.log(prezzo)
    }

    // calcolo prezzo over 
    else if (eta === 'over 65'){
        prezzo = prezzo * 0.6;
        console.log(prezzo)
    }
    
    // visualizzazione a schermo del prezzo finale 
    document.getElementById('costo_finale').innerHTML = prezzo.toFixed(2) + " galeoni";
    // visualizzazione a schermo nome passeggero 
    document.getElementById('nome_passeggero').innerHTML = nome;
})


// Tasto Reset riporta i valori "Nome del passeggero" e "prezzo" agli stati iniziali

let reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    
    document.getElementById('nome_passeggero').innerHTML = "";
    document.getElementById('costo_finale').innerHTML = "";
    
})
