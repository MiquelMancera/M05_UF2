let arrRespostes = [], arrRespostesCorrectes = [];
arrRespostesCorrectes=[1,3,4,2]

function pregunta(objecte, numPreg){
    let resposta;
    for (let i = 0; i < 4; i++){
        if(objecte.form[i].checked){
            resposta = i + 1;
        }
    }

    arrRespostes[numPreg] = resposta;
    alert ("has escollit la resposta "+ resposta + " de la pregunta " + (numPreg+1));
}