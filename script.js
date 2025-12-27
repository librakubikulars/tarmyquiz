/************ ELEMENTS ************/
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const usernameInput = document.getElementById("username");
const quizForm = document.getElementById("quiz-form");
const finishBtn = document.getElementById("finish-btn");
const levelCodeDiv = document.getElementById("level-code");
const levelEraDiv = document.getElementById("level-era");
const customMessageDiv = document.getElementById("custom-message");
const certificateTitle = document.getElementById("certificate-title");
const shareBtn = document.getElementById("share-btn");
const goldenBtn = document.getElementById("golden-btn");
const showAnswersBtn = document.getElementById("show-answers-btn");
const answersDiv = document.getElementById("answers");

let userName = "";
let userAnswers = {};

/************ QUESTIONS ************/
const questions = [
  { text: "coraline ne yapmıştır?", image: "https://i.imgur.com/c3Lu39x_d.webp", options: ["solo hesabı acıp üyelere antilik", "mescitte bl izlemistir", "kanserim diye yalan söylemistir", "üyelere drag getiren tiviti silmemiştir"], correct: 2 },
  { text: "?", image: "https://i.imgur.com/j1G30WD_d.webp", options: ["o kadar güzelki ölebilirim", "sen bensin ben senim", "hawaiden küçük bir kaçamak", "genç hissetmeyi özlemişiz"], correct: 0 },
  { text: "efsaneye göre bu adam ne yaptı?", image: "https://i.imgur.com/sxS47tn_d.webp", options: ["yoonginin rap şarkılarını yırtıp evden atmıştır", "jungkook taklidini yaptığı için ona kızmıştır", "run bts bölümünde yoongiye çiçek yollamıştır", "yoongiden izinsiz onu şirkete kaydetmiştir"], correct: 0 },
  { text: "bunu duyan jungkook", image: "https://i.imgur.com/1VD9oD7_d.webp", options: ["en yakın meteorologla görüşüp yağmuru durdurmuştur", "yağmur yağmayan bir şehire uçak kiralamıştır", "gökyüzü temalı otelde yemeğe götürmüştür", "nasayla görüşüp hava durumunu değiştirmiştir"], correct: 3 },
  { text: "taehyung ne diyor", image: "https://i.imgur.com/v2WtkhB_d.webp", options: ["kamerayı çevirin", "şimşime", "sakallarımı keseceğim", "army komik değil"], correct: 1 },
  { text: "apple music en çok dinlenen şarkı listesinde butter kaçıncı olmuştur", image: "", options: ["33", "34", "35", "36"], correct: 1 },
  { text: "bts binası hangi şehirdedir?", image: "", options: ["ankara", "istanbul", "antalya", "izmir"], correct: 0 },
  { text: "kız hangi şarkıyı söylüyor?", image: "https://i.imgur.com/mRSxNsZ_d.webp", options: ["super tuna", "dsylm", "moon", "the astronaut"], correct: 2 },
  { text: "gerçek neler?", image: "https://i.imgur.com/84SOdOX_d.webp", options: ["pjms", "jimin lovers", "jiminie girls", "jiminette"], correct: 3 },
  { text: "namjoon ve jin weverse de ne için kavga etmiştir", image: "", options: ["mor kalp emojisi", "prenses tacı", "yıldızlı mikrofon", "takım elbise"], correct: 1 },
  { text: "jungkookun ismini aradığı çikolata hangisidir", image: "", options: ["biscolata", "sourpatch", "panchoa", "kancho"], correct: 3 },
  { text: "bu adam kim?", image: "https://i.imgur.com/bZj0bup_d.webp", options: ["murat boz", "kuzey tekinoglu", "burak özcivit", "kobra murat"], correct: 2 },
  { text: "hangi şarkı", image: "https://i.imgur.com/JpquYEv_d.webp", options: ["my universe", "black swan", "dynamite", "yet to come"], correct: 1 },
  { text: "hoseok ateşle uyanınca söylediği ilk şey ne olmuştur", image: "", options: ["üyelere mesaj atmalıyım", "mona lisayı tiktok'a yüklemeliyim", "dansçılara talimat vermeliyim", "şarkı kaydı almalıyım"], correct: 1 },
  { text: "en çok yanıt alan bts tiviti nedir?", image: "", options: ["gökyüzü yoongi", "bad guy jungkook", "öpücük jungkook", "askerlik dönüşü taejoon"], correct: 0 },
  { text: "grammy gecesi t-army ile shiplenen ülke", image: "", options: ["çinli", "koreli", "brezilyalı", "finlandiyalı"], correct: 2 },
  { text: "?", image: "https://i.imgur.com/3hEQQn3_d.webp", options: ["boksör jungkook", "airplane", "sweet dreams", "weverse en çok beğeni alan resim"], correct: 1 },
  { text: "ptd live albümü en yüksek çıkış yapan kaçıncı live albümdür", image: "", options: ["1", "2", "3", "4"], correct: 0 },
  { text: "fotografta ne var", image: "https://i.imgur.com/3j3vLv8_d.webp", options: ["konser çıkışı bangtan", "yn nin korumaları", "ünlü iş adamları", "gelin odasını basan sağdıçlar"], correct: 3 },
  { text: "taehyungun yediği çikolata hangisidir", image: "", options: ["tuavna", "tuana", "tuvana", "tuvaana"], correct: 2 },
  { text: "kimin evi", image: "https://i.imgur.com/G0nr38G_d.webp", options: ["jungkook", "taehyung", "jimin", "namjoon"], correct: 2 },
  { text: "bu kız taehyungun neyi", image: "https://i.imgur.com/tUx30aT_d.webp", options: ["kuzeni", "kres arkadaşı", "ablası", "komşusu"], correct: 1 },
  { text: "bu labubu kimin", image: "https://i.imgur.com/c8WUPU9_d.webp", options: ["namjoon", "hoseok", "taehyung", "seokjin"], correct: 0 },
  { text: "taehyung neden halktv ye çıktı?", image: "", options: ["yayında habercilik taklidi yaptığı için", "türk çikolata gösterdiği için", "kore üniversite sınavı için", "yayında türkiye dediği için"], correct: 2 },
  { text: "jongini nereye şikayet ettik", image: "https://i.imgur.com/UCB3urk_d.webp", options: ["savunma bakanlığı", "cimer", "kore türkiye elçiliği", "iç işleri bakanlığı"], correct: 0 }
];

/************ START BUTTON ************/
startBtn.addEventListener("click", () => {
    const name = usernameInput.value.trim();
    if(!name){
        alert("Lütfen isminizi gir aşkım 💅🏻");
        return;
    }
    userName = name;
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    renderQuestions();
});

/************ RENDER QUESTIONS ************/
function renderQuestions(){
    quizForm.innerHTML = "";
    questions.forEach((q, i)=>{
        const div = document.createElement("div");
        div.className = "quiz-question";
        div.innerHTML = `
            <p><strong>Soru ${i+1}:</strong> ${q.text}</p>
            ${q.image ? `<img src="${q.image}" style="max-width:100%; border-radius:10px;">` : ""}
            <div class="options">
                ${q.options.map((opt,j)=>`<button type="button" onclick="selectOption(${i},${j},this)">${opt}</button>`).join("")}
            </div>
        `;
        quizForm.appendChild(div);
    });
}

/************ SELECT OPTION ************/
function selectOption(qIndex,optIndex,btn){
    userAnswers[qIndex] = optIndex;
    btn.parentElement.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
    btn.classList.add("selected");
}

/************ FINISH BUTTON ************/
finishBtn.addEventListener("click",()=>{
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let score=0,wrong=0,blank=0;
    questions.forEach((q,i)=>{
        if(userAnswers[i]===undefined) blank++;
        else if(userAnswers[i]===q.correct) score++;
        else wrong++;
    });

    certificateTitle.innerHTML = `~"${userName}"’nin T-ARMY Cehennemi Sertifikası~`;

    const level = getLevel(score,questions.length);

    levelCodeDiv.innerHTML = `<span style="font-family:'Archivo Black'; font-size:60px; color:${level.color};">${level.code}</span>`;
    levelEraDiv.innerHTML = `<span style="font-size:32px;">${level.era}</span>`;
    customMessageDiv.innerHTML = `<span style="font-size:20px;">${level.message}<br>Doğru: ${score} | Yanlış: ${wrong} | Boş: ${blank}</span>`;

    shareBtn.onclick = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${userName} T-ARMY Cehennemi Quizi sonucum: ${level.code} – ${level.era}`);
    }

    goldenBtn.onclick = ()=>{
        window.open("https://www.goldendisc.co.kr/");
    }

    showAnswersBtn.onclick = showAnswers;
});

/************ LEVELS ************/
function getLevel(score,total){
    const percent = (score/total)*100;
    if(percent>=90) return {code:"C2", era:"legacy era", message:"senin bir üst seviyen hoseok abla böyle devam", color:"#8A2BE2"};
    if(percent>=80) return {code:"C1", era:"prime era", message:"abla bangtan a dediği an siteye damlamışsın", color:"#4B0082"};
    if(percent>=70) return {code:"B2", era:"icon era", message:"girl!!! ateş ediyorsun", color:"#9370DB"};
    if(percent>=60) return {code:"B1", era:"rising era", message:"ortalama bir hakimiyet.. çalışılması lazım", color:"#7B68EE"};
    if(percent>=40) return {code:"A2", era:"rookie era", message:"bir şeylere hakimiz ama hala eksikler var", color:"#BA55D3"};
    return {code:"A1", era:"debut era", message:"stan twtda hiç mi bulunmadın knk", color:"#DA70D6"};
}

/************ SHOW ANSWERS ************/
function showAnswers(){
    answersDiv.classList.remove("hidden");
    answersDiv.innerHTML = "";
    questions.forEach((q,i)=>{
        const div = document.createElement("div");
        div.className = "answer-question";
        div.innerHTML = `<p><strong>Soru ${i+1}:</strong> ${q.text}</p>`;
        q.options.forEach((opt,j)=>{
            const optDiv = document.createElement("div");
            optDiv.innerText = opt;
            if(j===q.correct) optDiv.style.color="green";
            if(userAnswers[i]===j && j!==q.correct) optDiv.style.color="red";
            div.appendChild(optDiv);
        });
        answersDiv.appendChild(div);
    });
}
