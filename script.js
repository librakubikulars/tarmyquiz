/************ QUESTIONS ************/
const questions = [
  {
    text: "coraline ne yapmıştır?",
    image: "https://i.imgur.com/c3Lu39x_d.webp?maxwidth=760&fidelity=grand",
    options: ["solo hesabı acıp üyelere antilik", "mescitte bl izlemistir", "kanserim diye yalan söylemistir", "üyelere drag getiren tiviti silmemiştir"],
    correct: 2
  },
  {
    text: "",
    image: "https://i.imgur.com/j1G30WD_d.webp?maxwidth=760&fidelity=grand",
    options: ["o kadar güzelki ölebilirim", "sen bensin ben senim", "hawaiden kücük bir kacamak", "genc hissetmeyi özlemisiz"],
    correct: 0
  },
  {
    text: "efsaneye göre bu adam ne yaptı?",
    image: "https://i.imgur.com/sxS47tn_d.webp?maxwidth=760&fidelity=grand",
    options: ["yoonginin rap sarkılarını yırtıp evden atmıstır", "jungkook taklidini yaptıgı için ona kızmıstır", "run bts bölümünde yoongiye cicek yollamıstır", "yoongiden izinsiz onu sirkete kaydetmistir"],
    correct: 0
  }
  // buraya istediğin kadar soru ekleyebilirsin
];

/************ ELEMENTS ************/
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const quizForm = document.getElementById("quiz-form");
const finishBtn = document.getElementById("finish-btn");
const scoreProgress = document.getElementById("score-progress");
const answersDiv = document.getElementById("answers");
const usernameInput = document.getElementById("username");

let userAnswers = {};

/************ START BUTTON ************/
startBtn.onclick = () => {

  // 🔒 Tekrar giriş engeli
  if (localStorage.getItem("visited")) {
    alert("Bir kere giriş yaptın aşkım 💅🏻\nBir daha giremezsin.");
    return;
  }

  // İsim boşsa uyar
  const name = usernameInput.value.trim();
  if (!name) {
    alert("Lütfen ismini gir aşkım 💅🏻");
    return;
  }

  localStorage.setItem("visited", "true");
  localStorage.setItem("username", name); // ismi sakla

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestions();
};

/************ RENDER QUESTIONS ************/
function renderQuestions() {
  quizForm.innerHTML = "";
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "quiz-question";
    div.innerHTML = `
      <p>${q.text}</p>
      ${q.image ? `<img src="${q.image}" class="question-img">` : ""}
      <div class="quiz-options">
        ${q.options.map((opt, j) =>
          `<button type="button" onclick="selectOption(${i}, ${j}, this)">${opt}</button>`
        ).join("")}
      </div>
    `;
    quizForm.appendChild(div);
  });
}

/************ SELECT OPTION ************/
window.selectOption = (qIndex, optIndex, btn) => {
  userAnswers[qIndex] = optIndex;
  btn.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  updateScoreBar();
};

function updateScoreBar() {
  scoreProgress.style.width = `${(Object.keys(userAnswers).length / questions.length) * 100}%`;
}

/************ FINISH BUTTON ************/
finishBtn.onclick = () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let score = 0;
  let wrong = 0;
  let blank = 0;

  questions.forEach((q, i) => {
    if (userAnswers[i] === undefined) {
      blank++;
    } else if (userAnswers[i] === q.correct) {
      score++;
    } else {
      wrong++;
    }
  });

  const level = getLevel(score, questions.length);
  const name = localStorage.getItem("username") || "ARMY";

  document.getElementById("level-code").innerText = `${level.code}`;
  document.getElementById("level-era").innerText = `${level.era}`;
  document.getElementById("custom-message").innerHTML = `
    ${level.message} <br>
    <strong>Doğru:</strong> ${score} <br>
    <strong>Yanlış:</strong> ${wrong} <br>
    <strong>Boş:</strong> ${blank}
  `;

  // isim ve sertifika üst kısmı
  document.getElementById("level-code").insertAdjacentHTML("beforebegin", `<h2 style="text-align:center; margin-bottom:10px;">~"${name}" T-ARMY Cehennemi Sertikası~</h2>`);

  document.getElementById("share-btn").onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${name} T-ARMY Cehennemi Quizi sonucum: ${level.code} – ${level.era}`);
  };

  document.getElementById("show-answers-btn").onclick = showAnswers;
};

/************ LEVELS ************/
function getLevel(score, total) {
  const percent = (score / total) * 100;

  if (percent >= 90) return { code: "C2", era: "legacy era", message: "senin bir üst seviyen hoseok. abla boyle devam💅🏻" };
  if (percent >= 80) return { code: "C1", era: "prime era", message: "abla bangtan a dediği an siteye damlamıssın" };
  if (percent >= 70) return { code: "B2", era: "icon era", message: "girl!!! ates ediyosun" };
  if (percent >= 60) return { code: "B1", era: "rising era", message: "ortalama bir hakimiyet.. calısılması lazım" };
  if (percent >= 40) return { code: "A2", era: "rookie era", message: "bir seylere hakimiz ama hala eksikler var" };
  return { code: "A1", era: "debut era", message: "stan twtda hic mi bulunmadın knk" };
}

/************ SHOW ANSWERS ************/
function showAnswers() {
  answersDiv.classList.remove("hidden");
  answersDiv.innerHTML = "";

  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "answer-question";
    div.innerHTML = `<p>${q.text}</p>`;

    q.options.forEach((opt, j) => {
      const optDiv = document.createElement("div");
      optDiv.className = "answer-option";
      if (j === q.correct) optDiv.classList.add("correct");
      if (userAnswers[i] === j && j !== q.correct) optDiv.classList.add("wrong");
      optDiv.innerText = opt;
      div.appendChild(optDiv);
    });

    answersDiv.appendChild(div);
  });
}
