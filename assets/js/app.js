const listaTweets=document.querySelector("#lista-tweets");


//event listeners
eventListeners();

function eventListeners(){
    //cuando se envia al formulario
    document.querySelector("#formulario").addEventListener("submit",agregarTweet);
    //borrar tweet
    listaTweets.addEventListener("click",borrarTweet);
    //contenido cargado
    document.addEventListener("DOMContentLoaded",localStorageListener);
    //DOMContentLoaded 
}

//funciones
function agregarTweet(e){
    e.preventDefault();
    //leer el valor del textarea
    
    const tweet=document.getElementById("tweet").value;
    //crear boton de eliminar
    const borrar=document.createElement("a");
    borrar.classList="borrar-tweet";
    borrar.innerText="X";
    borrar.setAttribute("href","#");
    borrar.style.textDecoration="none"


    //crear elemento y añadirlo a la lista
    
    const li=document.createElement('li');
    li.innerText=tweet;
    //añade al boton borrar
    li.appendChild(borrar);
    //console.log(li);
    //añade wl tweet en la lista
    listaTweets.appendChild(li);
    //añadir a local store
    agregarTweetLocal(tweet);
}


function borrarTweet(e){
    e.preventDefault();
    
    if (e.target.className === "borrar-tweet") {
        console.log(e.target.parentElement.innerText)
        borrarTweetLocalStorange(e.target.parentElement.textContent); 
        e.target.parentElement.remove();
    }
}


//aqui te rompes la cabeza
//mostrar datos del localStorange en lña lista
function localStorageListener(){
    let tweest;
    tweest=obtenerTweet();

    tweest.forEach(function(e){
    const borrar=document.createElement("a");
    borrar.classList="borrar-tweet";
    borrar.innerText="X";
    borrar.setAttribute("href","#");
    borrar.style.textDecoration="none"


    //crear elemento y añadirlo a la lista
    
    const li=document.createElement('li');
    li.innerText=e;
    //añade al boton borrar
    li.appendChild(borrar);
    //console.log(li);
    //añade wl tweet en la lista
    listaTweets.appendChild(li);
    });
}
//agregar tweet local store
function agregarTweetLocal(tweet){
    let tweest;

    tweest=obtenerTweet();
    //añadir nuevo tweet
    tweest.push(tweet);
    //de strim a arreglo de local store
    localStorage.setItem("tweeets",JSON.stringify(tweest));
    
}
// retorna si hay elementos en el local store 
function obtenerTweet(){
    let tweest;
    //revision de valores del local store
    if (localStorage.getItem("tweeets")===null) {
        tweest=[]
    }else{
        tweest=JSON.parse(localStorage.getItem("tweeets"));
    }
    return tweest;
}

//eliminar tweet de local storange
function borrarTweetLocalStorange(tweet){
    console.log(tweet);
    
    //elimina la X del tweet
    let tweetborrar = tweet.substring(0,tweet.length-1);

    let = tweets=obtenerTweet();

    console.log(tweetborrar == tweets[0]);
    
    for(let i=0; i < tweets.length; i++){ 
        if(tweets[i] == tweetborrar){
            tweets[i] = undefined;
            //tweets.splice(0, i);
        }
    }

    let array = [];
    for(let j=0; j < tweets.length; j++){
        if(tweets[j] != undefined){
            array.push(tweets[j]);
        }
    }

    console.log(array);

    localStorage.setItem("tweeets", JSON.stringify(array));
}




/**tweets.forEach(function(tweet, index){
        console.log(tweet);
        
        if(tweet==tweetborrar){
            tweet.splice(tweeets,1);
            console.log("holasdas");
        }
    }); */
