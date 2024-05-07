function setup() {
  createCanvas(600, 400);
     
      }  
    

 function inicializaCores (){  
  background("#FFC107" );
  fill ("#607D8B" );
  textSize (64); 
  textAlign ( CENTER , CENTER )     
  
 } 
  

function draw() { inicializaCores ()
   
  let maximo = width;
  let minimo = 0;
  let palavra = "CAMINHANTE";
                
                 
                 
                 
  let quantidade = map ( movedX, 0 , width, 0,  palavra.length );
  let parcial = palavra.substring (0 ,) ;
  text(parcial, 300,200)
 
  
  
}
