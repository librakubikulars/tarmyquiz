/************ QUESTIONS ************/
const questions = [
  {
    text: "Coraline ne yapmıştır?",
    image: "https://i.imgur.com/c3Lu39x_d.webp",
    options: ["Solo hesabı açıp üyelere antilik", "Mescitte BL izlemiştir", "Kanserim diye yalan söylemiştir", "Üyelere drag getiren tweeti silmemiştir"],
    correct: 2
  },
  {
    text: "Efsaneye göre bu adam ne yaptı?",
    image: "https://i.imgur.com/sxS47tn_d.webp",
    options: ["Yoonginin rap şarkılarını yırtıp evden atmıştır", "Jungkook taklidini yaptığı için ona kızmıştır", "Run BTS bölümünde Yoongiye çiçek yollamıştır", "Yoongiden izinsiz onu şirkete kaydetmiştir"],
    correct: 0
  },
  {
    text: "Bunu duyan Jungkook ne yaptı?",
    image: "https://i.imgur.com/1VD9oD7_d.webp",
    options: ["En yakın meteorologla görüşüp yağmuru durdurmuştur", "Yağmur yağmayan bir şehre uçak kiralamıştır", "Gökyüzü temalı otelde yemeğe götürmüştür", "NASA ile görüşüp hava durumunu değiştirmiştir"],
    correct: 3
  },
  {
    text: "Taehyung ne diyor?",
    image: "https://i.imgur.com/v2WtkhB_d.webp",
    options: ["Kamerayı çevirin", "Şimşime", "Sakallarımı keseceğim", "ARMY komik değil"],
    correct: 1
  },
  {
    text: "Apple Music en çok dinlenen şarkı listesinde Butter kaçıncı olmuştur?",
    image: "",
    options: ["33","34","35","36"],
    correct: 1
  },
  {
    text: "BTS binası hangi şehirdedir?",
    image: "",
    options: ["Ankara", "İstanbul", "Antalya", "İzmir"],
    correct: 0
  },
  {
    text: "Kız hangi şarkıyı söylüyor?",
    image: "https://i.imgur.com/mRSxNsZ_d.webp",
    options: ["Super Tuna", "DSYLM", "Moon", "The Astronaut"],
    correct: 2
  },
  {
    text: "Gerçek neler?",
    image: "https://i.imgur.com/84SOdOX_d.webp",
    options: ["PJMS", "Jimin Lovers", "Jiminie Girls", "Jiminette"],
    correct: 3
  },
  {
    text: "Namjoon ve Jin Weverse’de ne için kavga etmiştir?",
    image: "",
    options: ["Mor kalp emojisi", "Prenses tacı", "Yıldızlı mikrofon", "Takım elbise"],
    correct: 1
  },
  {
    text: "Jungkook’un ismini aradığı çikolata hangisidir?",
    image: "",
    options: ["Biscolata", "Sourpatch", "Panchoa", "Kancho"],
    correct: 3
  },
  {
    text: "Bu adam kim?",
    image: "https://i.imgur.com/bZj0bup_d.webp",
    options: ["Murat Boz", "Kuzey Tekinoğlu", "Burak Özçivit", "Kobra Murat"],
    correct: 2
  },
  {
    text: "Hangi şarkı?",
    image: "https://i.imgur.com/JpquYEv_d.webp",
    options: ["My Universe", "Black Swan", "Dynamite", "Yet To Come"],
    correct: 1
  },
  {
    text: "Hoseok ateşle uyanınca söylediği ilk şey ne olmuştur?",
    image: "",
    options: ["Üyelere mesaj atmalıyım", "Mona Lisayı TikTok'a yüklemeliyim", "Dansçılara talimat vermeliyim", "Şarkı kaydı almalıyım"],
    correct: 1
  },
  {
    text: "En çok yanıt alan BTS tweeti nedir?",
    image: "",
    options: ["Gökyüzü Yoongi", "Bad Guy Jungkook", "Öpücük Jungkook", "Askerlik dönüşü Taejoon"],
    correct: 0
  },
  {
    text: "Grammy gecesi T-ARMY ile shiplenen ülke?",
    image: "",
    options: ["Çinli", "Koreli", "Brezilyalı", "Finlandiyalı"],
    correct: 2
  },
  {
    text: "Bu ne?",
    image: "https://i.imgur.com/3hEQQn3_d.webp",
    options: ["Boksör Jungkook", "Airplane", "Sweet Dreams", "Weverse en çok beğeni alan resim"],
    correct: 1
  },
  {
    text: "PTD Live albümü en yüksek çıkış yapan kaçıncı Live albümdür?",
    image: "",
    options: ["1","2","3","4"],
    correct: 0
  },
  {
    text: "Fotoğrafta ne var?",
    image: "https://i.imgur.com/3j3vLv8_d.webp",
    options: ["Konser çıkışı Bangtan", "YN’nin korumaları", "Ünlü iş adamları", "Gelin odasını basan sağcılar"],
    correct: 3
  },
  {
    text: "Taehyung’un yediği çikolata hangisidir?",
    image: "",
    options: ["Tuvana","Tuana","Tuvana","Tuvaana"],
    correct: 2
  },
  {
    text: "Kimin evi?",
    image: "https://i.imgur.com/G0nr38G_d.webp",
    options: ["Jungkook", "Taehyung", "Jimin", "Namjoon"],
    correct: 2
  },
  {
    text: "Bu kız Taehyung’un neyi?",
    image: "https://i.imgur.com/tUx30aT_d.webp",
    options: ["Kuzeni","Kreş arkadaşı","Ablası","Komşusu"],
    correct: 1
  },
  {
    text: "Bu labubu kimin?",
    image: "https://i.imgur.com/c8WUPU9_d.webp",
    options: ["Namjoon","Hoseok","Taehyung","Seokjin"],
    correct: 0
  },
  {
    text: "Taehyung neden HalkTV’ye çıktı?",
    image: "",
    options: ["Yayında habercilik taklidi yaptığı için", "Türk çikolata gösterdiği için", "Kore üniversite sınavı için", "Yayında Türkiye dediği için"],
    correct: 2
  },
  {
    text: "Jongini nereye şikayet ettik?",
    image: "https://i.imgur.com/UCB3urk_d.webp",
    options: ["Savunma Bakanlığı", "CİMER", "Kore Türkiye Elçiliği", "İçişleri Bakanlığı"],
    correct: 0
  }
];

/************ ELEMENTS ************/
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const quizForm = document.getElementById("quiz-form");
const finishBtn = document.getElementById("finish-btn");
const scoreProgress = document.getElementById("score-progress");
const usernameInput = document.getElementById("username");
const shareBtn = document.getElementById("share-btn");
const showAnswersBtn = document.getElementById("show-answers-btn");
const answersDiv = document.getElementById("answers");
const resultTitle = document.getElementById("result-title");
const levelCodeEl = document.getElementById("level-code");
const levelEraEl = document.getElementById("level-era");
const customMessageEl = document.getElementById("custom-message");
const scoreSummaryEl = document.getElementById("score-summary");

let userAnswers = {};

/************ START BUTTON ************/
startBtn.onclick = () => {
  const name = usernameInput.value.trim();
  if (!name) {
    alert("Lütfen isminizi gir aşkım 💅🏻");
    return;
  }
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestions();
};

/************ RENDER QUESTIONS ************/
function renderQuestions() {
  quizForm.innerHTML = "";
  questions.forEach((q,i) => {
    const div = document.createElement("div");
    div.className = "quiz-question";
    div.innerHTML = `
      <p>Soru ${i+1}/${questions.length}: ${q.text}</p>
      ${q.image ? `<img src="${q.image}" style="max-width:100%;border-radius:10px;margin-bottom:10px;">` : ""}
      <div class="quiz-options">
        ${q.options.map((opt,j)=>`<button type="button" onclick="selectOption(${i},${j},this)">${opt}</button>`).join('')}
      </div>
    `;
    quizForm.appendChild(div);
  });
}

/************ SELECT OPTION ************/
window.selectOption = (qIndex,optIndex,btn) => {
  userAnswers[qIndex] = optIndex;
  btn.parentElement.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
  btn.classList.add("selected");
  scoreProgress.style.width = `${(Object.keys(userAnswers).length / questions.length) * 100}%`;
}

/************ FINISH BUTTON ************/
finishBtn.onclick = () => {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let score=0, wrong=0, blank=0;
  questions.forEach((q,i)=>{
    if(userAnswers[i]===undefined) blank++;
    else if(userAnswers[i]===q.correct) score++;
    else wrong++;
  });

  const level = getLevel(score, questions.length);
  const name = usernameInput.value || "ARMY";

  resultTitle.innerHTML = `~"${name}" 'nin T-ARMY Cehennemi Seviyesi~`;
  levelCodeEl.innerHTML = level.code;
  levelEraEl.innerHTML = level.era;
  customMessageEl.innerHTML = level.message;
  scoreSummaryEl.innerHTML = `<strong>Doğru:</strong> ${score} | <strong>Yanlış:</strong> ${wrong} | <strong>Boş:</strong> ${blank}`;

  shareBtn.onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${name} T-ARMY Quizi sonucum: ${level.code} – ${level.era}`);
  };

  showAnswersBtn.onclick = showAnswers;
}

/************ LEVELS ************/
function getLevel(score,total){
  const percent=(score/total)*100;
  if(percent>=90) return {code:"C2",era:"Legacy Era",message:"Senin bir üst seviyen Hoseok abla, böyle devam!"};
  if(percent>=80) return {code:"C1",era:"Prime Era",message:"Abla Bangtan'a dediği an siteye damlamışsın"};
  if(percent>=70) return {code:"B2",era:"Icon Era",message:"Girl!!! Ateş ediyorsun"};
  if(percent>=60) return {code:"B1",era:"Rising Era",message:"Ortalama bir hakimiyet.. çalışılması lazım"};
  if(percent>=40) return {code:"A2",era:"Rookie Era",message:"Bir şeylere hakimiz ama hala eksikler var"};
  return {code:"A1",era:"Debut Era",message:"Stan TWTDa hiç mi bulunmadın knk"};
}

/************ SHOW ANSWERS ************/
function showAnswers(){
  answersDiv.classList.remove("hidden");
  answersDiv.innerHTML="";
  questions.forEach((q,i)=>{
    const div=document.createElement("div");
    div.className="answer-question";
    div.innerHTML=`<p>${q.text}</p>`;
    q.options.forEach((opt,j)=>{
      const optDiv=document.createElement("div");
      optDiv.innerText=opt;
      if(j===q.correct) optDiv.classList.add("correct");
      if(userAnswers[i]===j && j!==q.correct) optDiv.classList.add("wrong");
      div.appendChild(optDiv);
    });
    answersDiv.appendChild(div);
  });
}
