// Sorular
const questions = [
  {
    text: "coraline ne yapmıştır?",
    image: "https://i.imgur.com/c3Lu39x_d.webp?maxwidth=760&fidelity=grand",
    options: ["solo hesabı açıp üyelere antilik", "mescitte bl izlemiştir", "kanserim diye yalan söylemiştir", "üyelere drag getiren tivit'i silmemiştir"],
    correct: 2
  },
  {
    text: "",
    image: "https://i.imgur.com/j1G30WD_d.webp?maxwidth=760&fidelity=grand",
    options: ["o kadar güzelki ölebilirim", "sen bensin ben senim", "hawaiden küçük bir kaçamak", "genç hissetmeyi özlemişiz"],
    correct: 0
  },
  {
    text: "efsaneye göre bu adam ne yaptı?",
    image: "https://i.imgur.com/sxS47tn_d.webp?maxwidth=760&fidelity=grand",
    options: ["yoonginin rap şarkılarını yırtıp evden atmıştır", "jungkook taklidini yaptığı için ona kızmıştır", "run bts bölümünde yoongiye çiçek yollamıştır", "yoongiden izinsiz onu şirkete kaydetmiştir"],
    correct: 0
  },
  {
    text: "bunu duyan jungkook",
    image: "https://i.imgur.com/1VD9oD7_d.webp?maxwidth=760&fidelity=grand",
    options: ["en yakın meteorologla görüşüp yağmuru durdurmuştur", "yağmur yağmayan bir şehire uçak kiralamıştır", "gökyüzü temalı otelde yemeğe götürmüştür", "NASA'yla görüşüp hava durumunu değiştirmiştir"],
    correct: 3
  },
  {
    text: "taehyung ne diyor",
    image: "https://i.imgur.com/v2WtkhB_d.webp?maxwidth=760&fidelity=grand",
    options: ["kamerayı çevirin", "şimşime", "sakallarımı keseceğim", "army komik değil"],
    correct: 1
  },
  {
    text: "apple music en çok dinlenen şarkı listesinde butter kaçıncı olmuştur?",
    image: "",
    options: ["33", "34", "35", "36"],
    correct: 1
  },
  {
    text: "bts binası hangi şehirdedir?",
    image: "",
    options: ["ankara", "istanbul", "antalya", "izmir"],
    correct: 0
  },
  {
    text: "kız hangi şarkıyı söylüyor?",
    image: "https://i.imgur.com/mRSxNsZ_d.webp?maxwidth=760&fidelity=grand",
    options: ["super tuna", "dsylm", "moon", "the astronaut"],
    correct: 2
  },
  {
    text: "gerçek neler?",
    image: "https://i.imgur.com/84SOdOX_d.webp?maxwidth=760&fidelity=grand",
    options: ["pjms", "jimin lovers", "jiminie girls", "jiminette"],
    correct: 3
  },
  {
    text: "namjoon ve jin weverse’de ne için kavga etmiştir?",
    image: "",
    options: ["mor kalp emojisi", "prenses tacı", "yıldızlı mikrofon", "takım elbise"],
    correct: 1
  },
  {
    text: "jungkook’un ismini aradığı çikolata hangisidir?",
    image: "",
    options: ["biscolata", "sourpatch", "panchoa", "kancho"],
    correct: 3
  },
  {
    text: "bu adam kim?",
    image: "https://i.imgur.com/bZj0bup_d.webp?maxwidth=760&fidelity=grand",
    options: ["murat boz", "kuzey tekinoglu", "burak özcivit", "kobra murat"],
    correct: 2
  },
  {
    text: "hangi şarkı?",
    image: "https://i.imgur.com/JpquYEv_d.webp?maxwidth=760&fidelity=grand",
    options: ["my universe", "black swan", "dynamite", "yet to come"],
    correct: 1
  },
  {
    text: "hoseok ateşle uyanınca söylediği ilk şey ne olmuştur?",
    image: "",
    options: ["üyelere mesaj atmalıyım", "mona lisayı tiktok'a yüklemeliyim", "dansçılara talimat vermeliyim", "şarkı kaydı almalıyım"],
    correct: 1
  },
  {
    text: "en çok yanıt alan bts tiviti nedir?",
    image: "",
    options: ["gökyüzü yoongi", "bad guy jungkook", "öpücük jungkook", "askerlik dönüşü taejoon"],
    correct: 0
  },
  {
    text: "grammy gecesi t-army ile shiplenen ülke?",
    image: "",
    options: ["Çinli", "Koreli", "Brezilyalı", "Finlandiyalı"],
    correct: 2
  },
  {
    text: "",
    image: "https://i.imgur.com/3hEQQn3_d.webp?maxwidth=760&fidelity=grand",
    options: ["boksör jungkook", "airplane", "sweet dreams", "weverse en çok beğeni alan resim"],
    correct: 1
  },
  {
    text: "ptd live albümü en yüksek çıkış yapan kaçıncı live albümdür?",
    image: "",
    options: ["1", "2", "3", "4"],
    correct: 0
  },
  {
    text: "fotografta ne var?",
    image: "https://i.imgur.com/3j3vLv8_d.webp?maxwidth=760&fidelity=grand",
    options: ["konser çıkışı bangtan", "yn nin korumaları", "ünlü iş adamları", "gelin odasını basan sağdıçlar"],
    correct: 3
  },
  {
    text: "taehyung’un yediği çikolata hangisidir?",
    image: "",
    options: ["tuavna", "tuana", "tuvana", "tuvaana"],
    correct: 2
  },
  {
    text: "kimin evi?",
    image: "https://i.imgur.com/G0nr38G_d.webp?maxwidth=760&fidelity=grand",
    options: ["jungkook", "taehyung", "jimin", "namjoon"],
    correct: 2
  },
  {
    text: "bu kız taehyung’un neyi?",
    image: "https://i.imgur.com/tUx30aT_d.webp?maxwidth=760&fidelity=grand",
    options: ["kuzeni", "kres arkadaşı", "ablası", "komşusu"],
    correct: 1
  },
  {
    text: "bu labubu kimin?",
    image: "https://i.imgur.com/c8WUPU9_d.webp?maxwidth=760&fidelity=grand",
    options: ["namjoon", "hoseok", "taehyung", "seokjin"],
    correct: 0
  },
  {
    text: "taehyung neden halktv’ye çıktı?",
    image: "",
    options: ["yayında habercilik taklidi yaptığı için", "türk çikolata gösterdiği için", "kore üniversite sınavı için", "yayında Türkiye dediği için"],
    correct: 2
  },
  {
    text: "jongini nereye şikayet ettik?",
    image: "https://i.imgur.com/UCB3urk_d.webp?maxwidth=760&fidelity=grand",
    options: ["savunma bakanlığı", "cimer", "kore-türkiye elçiliği", "içişleri bakanlığı"],
    correct: 0
  }
];

// ELEMENTS
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const usernameInput = document.getElementById("username");
const quizForm = document.getElementById("quiz-form");
const finishBtn = document.getElementById("finish-btn");
const scoreProgress = document.getElementById("score-progress");
const questionCounter = document.getElementById("question-counter");
const certTitle = document.getElementById("cert-title");
const levelCode = document.getElementById("level-code");
const levelEra = document.getElementById("level-era");
const customMessage = document.getElementById("custom-message");
const scoreDetails = document.getElementById("score-details");
const shareBtn = document.getElementById("share-btn");
const goldenBtn = document.getElementById("golden-btn");
const showAnswersBtn = document.getElementById("show-answers-btn");
const answersDiv = document.getElementById("answers");

let userAnswers = {};
let userName = "";

// START BUTTON
startBtn.onclick = () => {
  const name = usernameInput.value.trim();
  if (!name) {
    alert("Lütfen isminizi gir aşkım 💅🏻");
    return;
  }
  userName = name;
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestions();
};

// RENDER QUESTIONS
function renderQuestions() {
  quizForm.innerHTML = "";
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "quiz-question";
    div.innerHTML = `
      <p>${i+1}. ${q.text}</p>
      ${q.image ? `<img src="${q.image}" alt="img">` : ""}
      <div class="quiz-options">
        ${q.options.map((opt,j)=>`<button type="button" onclick="selectOption(${i},${j},this)">${opt}</button>`).join('')}
      </div>
    `;
    quizForm.appendChild(div);
  });
  questionCounter.innerText = `Toplam Sorular: ${questions.length}`;
}

// SELECT OPTION
window.selectOption = (qIndex,optIndex,btn)=>{
  userAnswers[qIndex] = optIndex;
  btn.parentElement.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
  btn.classList.add("selected");
  scoreProgress.style.width = `${(Object.keys(userAnswers).length/questions.length)*100}%`;
}

// FINISH BUTTON
finishBtn.onclick = ()=>{
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let score=0,wrong=0,blank=0;
  questions.forEach((q,i)=>{
    if(userAnswers[i]===undefined) blank++;
    else if(userAnswers[i]===q.correct) score++;
    else wrong++;
  });

  const level = getLevel(score,questions.length);
  certTitle.innerText = `~"${userName}"'in T-ARMY Cehennemi Sertifikası~`;
  levelCode.innerText = level.code;
  levelEra.innerText = level.era;
  customMessage.innerText = level.message;
  scoreDetails.innerText = `Doğru: ${score} | Yanlış: ${wrong} | Boş: ${blank}`;

  shareBtn.onclick = ()=>{
    window.open(`https://twitter.com/intent/tweet?text=${userName} T-ARMY Cehennemi Quizi sonucum: ${level.code} – ${level.era}`);
  }

  goldenBtn.onclick = ()=>{
    window.open("https://www
