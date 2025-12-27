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
  },
  {
    text: "bunu duyan jungkook",
    image: "https://i.imgur.com/1VD9oD7_d.webp?maxwidth=760&fidelity=grand",
    options: ["en yakın meteorologla görüsüp yagmuru durdurmustur", "yagmur yagmayan bir sehire ucak kiralamıstır", "gökyüzü temalı otelde yemege götürmüstür", "nasayla görüsüp hava durumunu degistirmistir"],
    correct: 3
  },
  {
    text: "taehyung ne diyor",
    image: "https://i.imgur.com/v2WtkhB_d.webp?maxwidth=760&fidelity=grand",
    options: ["kamerayı cevirin", "şimşime", "sakallarımı kesecegim", "army komik degil"],
    correct: 1
  },
  {
    text: "apple music en cok dinlenen sarkı listesinde butter kacıncı olmustur",
    image: "",
    options: ["33", "34", "35", "36"],
    correct: 1
  },
  {
    text: "bts binası hangi sehirdedir?",
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
    text: "gercek neler?",
    image: "https://i.imgur.com/84SOdOX_d.webp?maxwidth=760&fidelity=grand",
    options: ["pjms", "jimin lovers", "jiminie girls", "jiminette"],
    correct: 3
  },
  {
    text: "namjoon ve jin weverse de ne icin kavga etmistir",
    image: "",
    options: ["mor kalp emojisi", "prenses tacı", "yıldızlı mikrofon", "takım elbise"],
    correct: 1
  },
  {
    text: "jungkookun ismini aradıgı çikolata hangisidir",
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
    text: "hangi sarkı",
    image: "https://i.imgur.com/JpquYEv_d.webp?maxwidth=760&fidelity=grand",
    options: ["my universe", "black swan", "dynamite", "yet to come"],
    correct: 1
  },
  {
    text: "hoseok atesle uyanınca söylediği ilk sey ne olmustur",
    image: "",
    options: ["üyelere mesaj atmalıyım", "mona lisayı tiktok'a yüklemeliyim", "danscılara talimat vermeliyim", "sarkı kaydı almalıyım"],
    correct: 1
  },
  {
    text: "en cok yanıt alan bts tiviti nedir?",
    image: "",
    options: ["gokyuzu yoongi", "bad guy jungkook", "öpücük jungkook", "askerlik dönüsü taejoon"],
    correct: 0
  },
  {
    text: "grammy gecesi t-army ile shiplenen ülke",
    image: "",
    options: ["cinli", "koreli", "brezilyalı", "finlandiyalı"],
    correct: 2
  },
  {
    text: "",
    image: "https://i.imgur.com/3hEQQn3_d.webp?maxwidth=760&fidelity=grand",
    options: ["boksör jungkook", "airplane", "sweet dreams", "weverse en cok begeni alan resim"],
    correct: 1
  },
  {
    text: "ptd live albümü en yüksek cıkıs yapan kacıncı live albümdür",
    image: "",
    options: ["1", "2", "3", "4"],
    correct: 0
  },
  {
    text: "fotografta ne var",
    image: "https://i.imgur.com/3j3vLv8_d.webp?maxwidth=760&fidelity=grand",
    options: ["konser cıkısı bangtan", "yn nin korumaları", "unlu iş adamları", "gelin odasını basan sagdıclar"],
    correct: 3
  },
  {
    text: "taehyungun yediği çikolata hangisidir",
    image: "",
    options: ["tuavna", "tuana", "tuvana", "tuvaana"],
    correct: 2
  },
  {
    text: "kimin evi",
    image: "https://i.imgur.com/G0nr38G_d.webp?maxwidth=760&fidelity=grand",
    options: ["jungkook", "taehyung", "jimin", "namjoon"],
    correct: 2
  },
  {
    text: "bu kız taehyungun neyi",
    image: "https://i.imgur.com/tUx30aT_d.webp?maxwidth=760&fidelity=grand",
    options: ["kuzeni", "kres arkadası", "ablası", "komsusu"],
    correct: 1
  },
  {
    text: "bu labubu kimin",
    image: "https://i.imgur.com/c8WUPU9_d.webp?maxwidth=760&fidelity=grand",
    options: ["namjoon", "hoseok", "taehyung", "seokjin"],
    correct: 0
  },
  {
    text: "taehyung neden halktv ye cıktı?",
    image: "",
    options: ["yayında habercilik taklidi yaptıgı için", "türk çikolata gösterdiği için", "kore üniversite sınavı için", "yayında türkiye dediği için"],
    correct: 2
  },
  {
    text: "jongini nereye sikayet ettik",
    image: "https://i.imgur.com/UCB3urk_d.webp?maxwidth=760&fidelity=grand",
    options: ["savunma bakanlıgı", "cimer", "kore türkiye elciligi", "iç isleri bakanlıgı"],
    correct: 0
  }
];

const startBtn = document.getElementById("start-btn");
const usernameInput = document.getElementById("username");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const quizForm = document.getElementById("quiz-form");
const scoreProgress = document.getElementById("score-progress");
const finishBtn = document.getElementById("finish-btn");
const answersDiv = document.getElementById("answers");
let userAnswers = {};

// START BUTTON
startBtn.onclick = () => {
  const name = usernameInput.value.trim();
  if (!name) {
    alert("Lütfen ismini gir aşkım 💅🏻");
    return;
  }
  sessionStorage.setItem("username", name);
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
      <p>${q.text}</p>
      ${q.image ? `<img src="${q.image}" class="question-img" style="max-width:100%; border-radius:10px;">` : ""}
      <div class="quiz-options">
        ${q.options.map((opt,j) => `<button type="button" onclick="selectOption(${i},${j},this)">${opt}</button>`).join("")}
      </div>
    `;
    quizForm.appendChild(div);
  });
}

// SELECT OPTION
function selectOption(qIndex,optIndex,btn) {
  userAnswers[qIndex]=optIndex;
  btn.parentElement.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
  btn.classList.add("selected");
  scoreProgress.style.width = `${(Object.keys(userAnswers).length/questions.length)*100}%`;
}
window.selectOption = selectOption;

// FINISH BUTTON
finishBtn.onclick = () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let score=0,wrong=0,blank=0;
  questions.forEach((q,i)=>{
    if(userAnswers[i]===undefined) blank++;
    else if(userAnswers[i]===q.correct) score++;
    else wrong++;
  });

  const level = getLevel(score,questions.length);
  const name = sessionStorage.getItem("username")||"ARMY";

  document.getElementById("level-code").innerHTML=`<h1>${level.code}</h1>`;
  document.getElementById("level-era").innerHTML=`<h2>${level.era}</h2>`;
  document.getElementById("custom-message").innerHTML=`<p>${level.message}</p>
  <p><strong>Doğru:</strong>${score} | <strong>Yanlış:</strong>${wrong} | <strong>Boş:</strong>${blank}</p>`;

  document.getElementById("share-btn").onclick = ()=>{
    window.open(`https://twitter.com/intent/tweet?text=${name} T-ARMY Cehennemi Quizi sonucum: ${level.code} – ${level.era}`);
  };

  document.getElementById("show-answers-btn").onclick = showAnswers;
};

// LEVELS
function getLevel(score,total){
  const percent=(score/total)*100;
  if(percent>=90) return {code:"C2",era:"legacy era",message:"senin bir üst seviyen hoseok abla boyle devam"};
  if(percent>=80) return {code:"C1",era:"prime era",message:"abla bangtan a dediği an siteye damlamıssın"};
  if(percent>=70) return {code:"B2",era:"icon era",message:"girl!!! ates ediyosun"};
  if(percent>=60) return {code:"B1",era:"rising era",message:"ortalama bir hakimiyet.. calısılması lazım"};
  if(percent>=40) return {code:"A2",era:"rookie era",message:"bir seylere hakimiz ama hala eksikler var"};
  return {code:"A1",era:"debut era",message:"stan twtda hic mi bulunmadın knk"};
}

// SHOW ANSWERS
function showAnswers(){
  answersDiv.classList.remove("hidden");
  answersDiv.innerHTML="";
  questions.forEach((q,i)=>{
    const div=document.createElement("div");
    div.className="answer-question";
    div.innerHTML
