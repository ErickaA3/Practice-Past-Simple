function iniciar(){
  var  puntos=0
  var total=6
    var color= document.forms["form1"]
    var respuesta=["b","b","a","a","c","b"]
   for(i=1;i<=total;i++)
   {
      if(color["r"+i].value === null || color["r"+i].value === "")
      {
        alert("Falta por responder la pregunta "+i)
    
        return false
      }
      else{ 
        if(color["r"+i].value === respuesta[i-1])
        {
         puntos++
        }
   }
}
var resultado=document.getElementById("lol")
resultado.innerHTML="You got <span>"+puntos+"</span>/"+total+" correct answers<p>The correct answers were:</p>"+
"<p>1.She <strong>called her</strong> mother</p>"+
"<p>2.He <strong>didn't</strong> play with Juan because it was raining</p>"+
"<p>3.<strong>Did</strong> she <strong>call</strong> her mother?</p>"+
"<p>4.I  <strong>was</strong> in my house</p>"+
"<p>5.Mary <strong>was</strong> we us </p>"+
"<p>6.<strong>Were</strong> you at the supermarket?</p>"

return false
}

    
   
   
 