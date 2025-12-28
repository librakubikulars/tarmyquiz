// Kullanıcı ve cevaplar
let userName = "";
let userAnswers = {};

// ELEMENTLER
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

// SORULAR (örnek, 25 soruyu eklemeniz yeterli)
const questions = [
  { text: "coraline ne yapmıştır?", image: "https://i.imgur.com/c3Lu39x_d.webp?maxwidth=760&fidelity=grand", options: ["solo hesabı açıp üyelere antilik", "mescitte bl izlemiştir", "kanserim diye yalan söylemiştir", "üyelere drag getiren tivit'i silmemiştir"], correct: 2 },
  { text: "efsaneye göre bu adam ne yaptı?", image: "https://i.imgur.com/sxS47tn_d.webp?maxwidth=760&fidelity=grand", options: ["yoonginin rap şarkılarını yırtıp evden atmıştır", "jungkook taklidini yaptığı için ona kızmıştır", "run bts bölümünde yoongiye çiçek yollamıştır", "yoongiden izinsiz onu şirkete kaydetmiştir"], correct: 0 }
];

// BAŞLA
startBtn.onclick = () => {
    const name = usernameInput.value.trim();
    if(!name){ 
        alert("Lütfen isminizi girin"); 
        return; 
    }
    userName = name;
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    renderQuestions();
};

// SORULARI YAZDIR
function renderQuestions(){
    quizForm.innerHTML = "";
    questions.forEach((q,i)=>{
        const div = document.createElement("div");
        div.className="quiz-question";
        div.innerHTML=`
            <p>${i+1}. ${q.text}</p>
            ${q.image?`<img src="${q.image}" style="max-width:100%; border-radius:10px;">`:""}
            <div class="quiz-options">
                ${q.options.map((opt,j)=>`<button type="button" onclick="selectOption(${i},${j},this)">${opt}</button>`).join('')}
            </div>
        `;
        quizForm.appendChild(div);
    });
    questionCounter.innerText = `Toplam Sorular: ${questions.length}`;
}

// SEÇİM
window.selectOption = (qIndex,optIndex,btn)=>{
    userAnswers[qIndex] = optIndex;
    btn.parentElement.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
    btn.classList.add("selected");
    scoreProgress.style.width = `${(Object.keys(userAnswers).length/questions.length)*100}%`;
}

// TESTİ BİTİR
finishBtn.onclick = ()=>{
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let score=0, wrong=0, blank=0;
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

    shareBtn.onclick = ()=>{ window.open(`https://twitter.com/intent/tweet?text=${userName} T-ARMY Quizi sonucu: ${level.code} – ${level.era}`); }
    goldenBtn.onclick = ()=>{ window.open("https://www.goldendisc.co.kr/"); }
    showAnswersBtn.onclick = showAnswers;
}

// SEVİYE
function getLevel(score,total){
    const percent=(score/total)*100;
    if(percent>=90) return {code:"C2", era:"legacy era", message:"Üst seviyesin, bravo!"};
    if(percent>=80) return {code:"C1", era:"prime era", message:"İyi gidiyorsun!"};
    if(percent>=70) return {code:"B2", era:"icon era", message:"Fena değil!"};
    if(percent>=60) return {code:"B1", era:"rising era", message:"Daha çok çalışmalısın!"};
    if(percent>=40) return {code:"A2", era:"rookie era", message:"Başladın ama eksikler var!"};
    return {code:"A1", era:"debut era", message:"Henüz başlamadın!"};
}

// DOĞRU CEVAPLARI GÖSTER
function showAnswers(){
    answersDiv.classList.remove("hidden");
    answersDiv.innerHTML="";
    questions.forEach((q,i)=>{
        const div = document.createElement("div");
        div.className="answer-question";
        div.innerHTML=`<p>${i+1}. ${q.text}</p>`;
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
