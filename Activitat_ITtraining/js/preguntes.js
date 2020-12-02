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

    switch(numPreg){
        case 0:
            obj = document.getElementById("pregunta-1");
            obj.classList.remove("elementVisible");
            obj.classList.add("elementOcult");

            obj = document.getElementById("pregunta-2");
            obj.classList.remove("elementOcult");
            obj.classList.add("elementVisible");
        break;
        case 1:
            obj = document.getElementById("pregunta-2");
            obj.classList.remove("elementVisible");
            obj.classList.add("elementOcult");

            obj = document.getElementById("pregunta-3");
            obj.classList.remove("elementOcult");
            obj.classList.add("elementVisible");
        break;
        case 2:
            obj = document.getElementById("pregunta-3");
            obj.classList.remove("elementVisible");
            obj.classList.add("elementOcult");

            obj = document.getElementById("pregunta-4");
            obj.classList.remove("elementOcult");
            obj.classList.add("elementVisible");
        break;
    }
}