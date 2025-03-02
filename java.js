
var queslist = [
    { "question": "who has the number", "options": ["1", "2", "3"], "ans": 1 },

    { "question": "what is the number number", "options": ["4", "2", "3", "1"], "ans": 2 },

    { "question": "what is the number no number", "options": ["1", "2", "5"], "ans": 3 }
];

let totalques = queslist.length;

let count = 0;
let score = 0;

let butto = document.getElementById("btn")
let ansgiven = false;





function displayques() {
    let no = document.getElementById("quesno")
    no.innerText = `${count + 1}/${totalques}`


    let ques = document.getElementById("question")

    ques.innerText = queslist[count]["question"]     //displaying question

    let optbox = document.getElementById("optionbox")

    for (i = 0; i < queslist[count]["options"].length; i++) {      //displaying options

        let m = String.fromCharCode(65 + i)

        if (i == queslist[count]["ans"] - 1) {
            optbox.innerHTML += `<div class="option crct" id="crct"> <div class="optind">${m}</div> <div class="optval">${queslist[count]["options"][i]}</div></div >`;
        } else {
            optbox.innerHTML += `<div class="option wrng" id="wrng"> <div class="optind">${m}</div> <div class="optval">${queslist[count]["options"][i]}</div></div >`;

        }

    }


    let optlist = document.getElementsByClassName("option");      //adding class correct or wrong to each option



    let answered = false;
    Array.from(optlist).forEach((opt) => {

        opt.addEventListener("click", () => {
            ansgiven = true;
            console.log(ansgiven)
            if (opt.classList.contains("crct") && answered == false) {
                opt.classList.add("correct")
                answered = true;
                score += 1



            } else if (answered == false) {
                opt.classList.add("wrong")
                Array.from(optlist).forEach((opt) => {      //onclick gf wrong ans clicked correct ans also displays
                    if (opt.classList.contains("crct")) {
                        opt.classList.add("correct")
                    }
                })
                answered = true;
            }
        })

    })
}

displayques()


butto.addEventListener("click", () => {
    if (ansgiven) {
        count++

    }

    if (count == totalques - 1) {

        butto.innerHTML = `<button ;">DONE</button>`

    }

    if (count >= totalques && ansgiven) {
        let y = document.getElementById("box")
        y.style.textAlign = "center";
        y.innerHTML = `YOUR SCORE IS
            <p id="scorepara">${score}/${totalques}</p>`

        console.log("finishpage")


    } else if (ansgiven) {
        ansgiven = false;
        let optbox = document.getElementById("optionbox")      // setting option box again to empty
        optbox.innerHTML = ""
        displayques();

    }


})















