

var geel = (prompt ('is de kaas geel'));


if(geel =='ja'){
    var gaten = (prompt('zitten er gaten in?'))
    if (gaten == 'ja'){
        var duur = (prompt('is de kaas belagelijk duur?'))
        if (duur == 'ja'){
            alert('het is een emmenthaler')
            document.write ('het is emmenthaler')
        }else{
            alert('het is een leerdammer')
            document.write ('het is leerdammer')
        }
    }else{ 
        var steen = (prompt('is de kaas hard als steen'))
        if (steen == 'ja'){
            alert('het is een Pamigiano Regiano')
            document.write ('het is Pamigiano Regiano')
        }else{
            alert('het is goudse kaas')
            document.write ('het is goudse kaas')
        }
    }
                    
} else{
    var schimmel = (prompt('Heeft de kaas blauwe schimmel?'))
    if (schimmel == 'ja'){
         var korst = (prompt('heeft de kaas een harde korst?'))
         if (korst == 'ja') {
            alert('het is Bleu de Rochbaron')
            document.write ('het is Bleu de Rochbaron')
        }else{
            alert('het is Foume d Ambert')
            document.write ('het is Bleu d Ambert')
        }
    }else{
        var korst2 = (prompt('heeft de kaas een harde korst?'))
        if (korst2 == 'ja'){
            alert('het is een camembert')
            document.write ('het is camembert')
        } else {
            alert('het is mozzerella')
            document.write ('het is mozzerella')

        }
    }
}

   
