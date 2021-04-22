function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fAno.value.length == 0 || Number (fAno.value) > ano )
    {
        window.alert('[ERROR] VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = "idade calculada:"+idade
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute('id',"foto")
        if(fsex[0].checked)
        {
            gênero = 'homem'
        
        if(idade >= 0 && idade <3)
        {
            //bebe
            img.setAttribute('src','bebehomem.png')
        } else if(idade > 3 && idade <=12)
        {
           img.setAttribute('src','menino.png')
        }
            
        else if ( idade <= 21)
        {
                //jovem
                img.setAttribute('src','fotojovem.png')
        }
        else if (idade > 21 && idade <= 50)
        {
                //adulto
                img.setAttribute('src','fotoadulto.png')
        }else
        {
                //idoso
                img.setAttribute('src','fotoidoso.png')
        } 
        }
         if(fsex[1].checked)
         {
            gênero = 'Mulher'
        
            if(idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src','bebemulher.png')
            }else if(idade >3 && idade <=12){
                img.setAttribute('src','crianca.png')

            }
                
            else if(idade <= 21){
                //jovem
                img.setAttribute('src','mulherjovem.png')
            } else if (idade > 21 && idade <= 50){
                //adulta
                img.setAttribute('src','fotoadulta.png')
            }else{
                //idosa
                img.setAttribute('src','idosa.png')
            }
         }
        
        res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        }
    }