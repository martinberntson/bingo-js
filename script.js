let bingosiffror = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let bingoArray = ['B', 'I', 'N', 'G', 'O'];

let slumpa = function() {
    for (let i = 0; i < 25; i++){
        let temp = bingosiffror[i];
        let temprandom = Math.floor(Math.random()*25);
        bingosiffror[i] = bingosiffror[temprandom];
        bingosiffror[temprandom] = temp;
    }
};

slumpa();

let rulla = function() {
    if (index < 26){
    document.getElementById("output").textContent = bingosiffror[index];
    index++;
    }

    if(index == 26){
        alert('Spelet är slut!');
    }
};

let bingoCheck = function() {
    Array.from(document.getElementsByClassName("bingorad")).forEach(function(rad) {
        let bingo = true;
        let rutor = Array.from(rad.getElementsByClassName("bingoruta"));
        for (let i = 0; i < 5; i++){
            if(rutor[i].classList.contains("kryssad") == false){
                bingo = false;
            }
        }
        if (bingo == true){
            for (let i = 0; i < 5; i++){
                rutor[i].classList.add("bingo");
                rutor[i].textContent = bingoArray[i];
            }
            alert('BINGO!');
        }
    });
    for (let i = 1; i < 6; i++){
        let kol = Array.from(document.getElementsByClassName(`kol${i}`));
        let bingo = true;
        for (let j = 0; j < 5; j++){
            if (kol[j].classList.contains("kryssad") == false){
                bingo = false;
            }
        }
        if (bingo == true){
            for (let j = 0; j < 5; j++){
                kol[j].classList.add("bingo");
                kol[j].textContent = bingoArray[j];
            }
            alert('BINGO!');
        }
    }   
    for (let i = 1; i < 3; i++){
        let kol = Array.from(document.getElementsByClassName(`dia${i}`));
        let bingo = true;
        for (let j = 0; j < 5; j++){
            if (kol[j].classList.contains("kryssad") == false){
                bingo = false;
            }
        }
        if (bingo == true){
            for (let j = 0; j < 5; j++){
                kol[j].classList.add("bingo");
                kol[j].textContent = bingoArray[j];
            }
            alert('BINGO!');
        }
    }
}

document.querySelectorAll(".bingobricka>.bingorad>.bingoruta").forEach((bingoruta, index) =>{
    bingoruta.textContent = bingosiffror[index];
    bingoruta.addEventListener("click", (klicketyklick) =>{
        if ((klicketyklick.target.classList.contains("vald") == false) && (document.getElementById("output").textContent == klicketyklick.target.textContent)){
        klicketyklick.target.classList.toggle("kryssad");
        }
        else {
            alert('FEL!');
        }
        bingoCheck();
    });
});

document.getElementById("rulla").textContent = "RULLA";
document.getElementById("rulla").addEventListener("click", rulla, false);
let index = 0;
slumpa();