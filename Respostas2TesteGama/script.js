function decode(){

  var crip = document.getElementById('txtCrip').value;
  //Tentando descriptografar o Texto digitado
  try {    
    var desc = atob(crip);
    document.getElementById('lblDesc').innerHTML = desc;  
    document.getElementById('lblDesc').style.color = "#000000";

  } catch (error) { // Erro caso texto nao esteja em base64 
    document.getElementById('lblDesc').style.color = "#FF0000";
    document.getElementById('lblDesc').innerHTML  = '*Por favor digite um texto criptografado em Base64'
  }

  var val = 0;  
  var id = document.getElementById('lblDesc').id;
  fadeIn(id, val); 
}

//Efeito FadeIn da label com o texto descriptografado ou erro
function fadeIn(id, val){
      if(val == 0){ var val = 0;}
      document.getElementById(id).style.opacity='0.'+val;

      if(val<9){
        val++;
        setTimeout('fadeIn("'+id+'",'+val+')',90);
      }else{return;}
    }
    

