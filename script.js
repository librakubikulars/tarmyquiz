<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BTS Quiz</title>
<style>
body { font-family: Arial, sans-serif; background:#f5f5f5; margin:0; padding:0; display:flex; flex-direction:column; align-items:center; }
.hidden { display:none; }
.overlay, #start-screen { width:100%; display:flex; justify-content:center; align-items:center; min-height:100vh; }
.overlay { background: rgba(0,0,0,0.7); position:fixed; top:0; left:0; z-index:1000; }
.overlay-content { background:#fff; padding:30px; border-radius:15px; width:90%; max-width:500px; text-align:center; }
.overlay-content input { width:80%; padding:10px; margin-bottom:15px; border-radius:5px; border:1px solid #ccc; font-size:16px; }
.overlay-content button { padding:10px 20px; border:none; border-radius:5px; background:#ff69b4; color:#fff; cursor:pointer; font-size:16px; }
.note { text-align:left; background:#ffe4e1; padding:15px; border-radius:10px; margin-bottom:15px; }
.quiz-question { background:#fff; margin:10px 0; padding:15px; border-radius:10px; }
.quiz-options button { margin:5px 5px 0 0; padding:8px 12px; border-radius:5px; cursor:pointer; }
.selected { background:#1da1f2; color:#fff; }
#score-bar-container { width:90%; max-width:700px; background:#ddd; height:15px; border-radius:8px; margin:10px 0; }
#score-progress { height:100%; width:0%; background:#32cd32; border-radius:8px; transition:0.3s; }
.certificate-section { text-align:center; margin-top:20px; display:none; }
.certificate-note { background:#f0e68c; padding:15px; border-radius:10px; margin-bottom:15px; }
.twitter-btn { background:#1da1f2; color:white; padding:10px 20px; border-radius:8px; text-decoration:none; margin-right:10px; display:inline-block; }
.golden-disc-btn { background:#ffd700; color:black; padding:10px 20px; border-radius:8px; text-decoration:none; display:inline-block; margin-top:10px; font-weight:bold; }
</style>
</head>
<body>

<!-- Başlangıç ekranı -->
<div class="overlay" id="overlay">
    <div class="overlay-content">
        <h2>Merhaba 💗 Lütfen İsminizi Girin</h2>
        <div class="note">
            <p>▪️ Siteye sadece bir kere giriş sağlanabilir o yüzden lütfen soruları dikkatli okuyun.</p>
            <p>▪️ En sonda bulunan seviye belirleme kutucugunu paylaşmayı lütfen unutmayın 🫶🏻</p>
            <p>▪️ İyi eğlenceler 💗</p>
        </div>
        <input type="text" id="username" placeholder="İsminizi yazın">
        <br>
        <button id="start-btn">Başla</button>
    </div>
</div>

<!-- Quiz ekranı -->
<div id="quiz-screen" class="hidden" style="width:100%; max-width:700px; padding:10px;">
  <div id="quiz-form"></div>
  <div id="score-bar-container"><div id="score-progress"></div></div>
  <button id="finish-btn">Bitir ve Seviye Gör</button>
</div>

<!-- Sonuç ekranı -->
<div id="result-screen" class="hidden" style="width:100%; max-width:700px; padding:10px;">
  <div id="level-code"></div>
  <div id="level-era"></div>
  <div id="custom-message"></div>
  <div class="certificate-section" id="certificate-section">
      <div class="certificate-note">GOLDEN DİSC AWARDDA JİN İÇİN OYUNUZU VERMEYİ UNUTMAYIN! Sizi morluyorum 💜 -zehra</div>
      <a class="twitter-btn" id="share-btn" target="_blank">Twitter'da Paylaş</a>
      <br>
      <a class="golden-disc-btn" href="https://www.goldendisc.co.kr/" target="_blank">Golden Disc Award</a>
  </div>
  <button id="show-answers-btn">Cevapları Göster</button>
  <div id="answers" class="hidden"></div>
</div>

<script>
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

/************ ELEMENTS ************/
const startBtn = document.getElementById("start-btn");
const overlay = document.getElementById("overlay");
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
  if (localStorage.getItem("visited")) {
    alert("Bir kere giriş yaptın aşkım 💅🏻\nBir daha giremezsin.");
    return;
  }

  const name = usernameInput.value.trim();
  if (!name) {
    alert("Lütfen ismini gir aşkım 💅🏻");
    return;
  }

  localStorage.setItem("visited", "true");
  localStorage.setItem("username", name);

  overlay.classList.add("hidden");
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
      ${q.image ? `<img src="${q.image}" class="question-img" style="max-width:100%; border-radius:10px;">` : ""}
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
  scoreProgress.style.width = `${(Object.keys(userAnswers).length / questions.length) * 100}%`;
};

/************ FINISH BUTTON ************/
finishBtn.onclick = () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let score = 0, wrong = 0, blank = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === undefined) blank++;
    else if (userAnswers[i] === q.correct) score++;
    else wrong++;
  });

  const level = getLevel(score, questions.length);
  const name = localStorage.getItem("username") || "ARMY";

  document.getElementById("level-code").innerHTML = `<h1 style="text-align:center; font-size:64px;">${level.code}</h1>`;
  document.getElementById("level-era").innerHTML = `<h2 style="text-align:center; font-size:28px;">${level.era}</h2>`;
  document.getElementById("custom-message").innerHTML = `<p style="text-align:center;">${level.message}</p><p style="text-align:center;"><strong>Doğru:</strong> ${score} | <strong>Yanlış:</strong> ${wrong} | <strong>Boş:</strong> ${blank}</p>`;
  
  document.getElementById("certificate-section").style.display = "block";

  document.getElementById("share-btn").onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${name} T-ARMY Cehennemi Quizi sonucum: ${level.code} – ${level.era}`);
  };

  document.getElementById("show-answers-btn").onclick = showAnswers;
};

/************ LEVELS ************/
function getLevel(score, total) {
  const percent = (score / total) * 100;
  if (percent >= 90) return { code: "C2", era: "legacy era", message: "senin bir üst seviyen hoseok abla boyle devam" };
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
      optDiv.innerText = opt;
      if (j === q.correct) optDiv.style.color = "green";
      if (userAnswers[i] === j && j !== q.correct) optDiv.style.color = "red";
      div.appendChild(optDiv);
    });
    answersDiv.appendChild(div);
  });
}
</script>

</body>
</html>
