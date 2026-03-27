const questions = [
  "È una persona reale?",
  "È famosa per la fisica?",
  "È famosa per l'informatica?",
  "È una donna?",
  "Ha vissuto prima del 1900?",
  "È famosa per la chimica?",
  "Ha inventato qualcosa?",
  "È conosciuta per la matematica?",
  "Ha vinto premi importanti?",
  "È ancora viva?"
];const characters = [
  { name: "Marie Curie", answers: ["yes","yes","no","yes","no","yes","no","no","yes","no"], img: "images/marie_curie.jpg" },
  { name: "Albert Einstein", answers: ["yes","yes","no","no","yes","no","no","yes","yes","no"], img: "images/einstein.jpg" },
  { name: "Ada Lovelace", answers: ["yes","no","yes","yes","yes","no","no","yes","no","no"], img: "images/ada_lovelace.jpg" },
  { name: "Nikola Tesla", answers: ["yes","no","no","no","yes","no","yes","no","no","no"], img: "images/tesla.jpg" },
  { name: "Isaac Newton", answers: ["yes","yes","no","no","yes","yes","yes","yes","yes","no"], img: "images/newton.jpg" },
  { name: "Grace Hopper", answers: ["yes","no","yes","yes","no","no","no","yes","yes","no"], img: "images/grace_hopper.jpg" },
  { name: "Alan Turing", answers: ["yes","no","yes","no","yes","no","no","yes","yes","no"], img: "images/alan_turing.jpg" },
  { name: "Rosalind Franklin", answers: ["yes","yes","no","yes","no","yes","no","no","no","no"], img: "images/rosalind_franklin.jpg" },
  { name: "Katherine Johnson", answers: ["yes","no","yes","yes","no","no","no","yes","yes","no"], img: "images/katherine_johnson.jpg" },
  { name: "Stephen Hawking", answers: ["yes","yes","no","no","no","no","no","yes","yes","no"], img: "images/stephen_hawking.jpg" }
];let step = 0;
let userAnswers = [];

function startGame() {
  step = 0;
  userAnswers = [];
  askQuestion();
}

function askQuestion() {
  if (step < questions.length) {
    document.getElementById("question").innerText = questions[step];
  } else {
    guessCharacter();
  }
}

function answer(response) {
  userAnswers.push(response);
  step++;
  askQuestion();
}

function guessCharacter() {
  let result = "Non riesco a indovinare…";
  let imgSrc = "";

  for (let char of characters) {
    let match = true;
    for (let i = 0; i < char.answers.length; i++) {
      if (char.answers[i] !== userAnswers[i]) {
        match = false;
        break;
      }
    }
    if (match) {
      result = char.name;
      imgSrc = char.img;
      break;
    }
  }

  document.getElementById("question").innerHTML = `
    Stai pensando a: <strong>${result}</strong><br>
    ${imgSrc ? `<img src="${imgSrc}" alt="${result}" style="max-width:200px;margin-top:10px;">` : ""}
    <br><button onclick="startGame()" style="margin-top:15px;">Ricomincia</button>
  `;
}