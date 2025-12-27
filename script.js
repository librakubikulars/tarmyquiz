const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const resultScreen = document.getElementById("result-screen");
const quizForm = document.getElementById("quiz-form");
const finishBtn = document.getElementById("finish-btn");
const shareBtn = document.getElementById("share-btn");
const goldenDiscBtn = document.getElementById("golden-disc-btn");
const showAnswersBtn = document.getElementById("show-answers-btn");
const answersDiv = document.getElementById("answers");
const usernameInput = document.getElementById("username");
const certTitle = document.getElementById("cert-title");
const levelCode = document.getElementById("level-code");
const levelEra = document.getElementById("level-era");
const customMessage = document.getElementById("custom-message");
const scoreDetails = document.getElementById("score-details");

let userAnswers = {};
let userName = "";

// 25 soruyu buraya ekledim (kısaltılmış örnek, tamamını buraya ekleyeceğiz)
const questions = [
  {
    text: "coraline ne yapmıştır?",
    image: "https://i.imgur.com/c3Lu39x_d.webp?maxwidth=760&fidelity=grand",
    options: ["solo hesabı acıp üyelere antilik", "mescitte bl izlemistir", "kanserim diye yalan söylemistir", "üyelere drag getiren tiviti silmemiştir"],
    correct: 2
  },
  // ... diğer 24 soru buraya aynı formatta eklenecek
];

startBtn.onclick = ()=>{
    const name = usernameInput.value.trim();
    if(!name){ alert("Lütfen isminizi gir 💅🏻"); return; }
    userName = name;
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    renderQuestions();
}

function renderQuestions(){
    quizForm.innerHTML="";
    questions.forEach((q,i)=>{
        const div=document.createElement("div");
        div.className="quiz-question";
        div.innerHTML=`
        <p>(${i+1}/${questions.length}) ${q.text}</p>
        ${q.image ? `<img src="${q.image}" class="question-img">` : ""}
        <div class="quiz-options">
        ${q.options.map((opt,j)=>`<button type="button" onclick="selectOption(${i},${j},this)">${opt}</button>`).join("")}
        </div>
        `;
        quizForm.appendChild(div);
    });
}

window.selectOption=(qIndex,optIndex,btn)=>{
    userAnswers[qIndex]=optIndex;
    btn.parentElement.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
    btn.classList.add("selected");
}

finishBtn.onclick=()=>{
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let score=0,wrong=0,blank=0;
    questions.forEach((q,i)=>{
        if(userAnswers[i]===undefined) blank++;
        else if(userAnswers[i]===q.correct) score++;
        else wrong++;
    });

    const level=getLevel(score,questions.length);

    certTitle.innerText=`~"${userName}"'in T-ARMY Cehennemi Sertifikası~`;
    levelCode.innerText=level.code;
    levelEra.innerText=level.era;
    customMessage.innerText=level.message;
    scoreDetails.innerText=`Doğru: ${score} | Yanlış: ${wrong} | Boş: ${blank}`;

    shareBtn.onclick=()=>{ window.open(`https://twitter.com/intent/tweet?text=${userName} T-ARMY Quizi sonucum: ${level.code} – ${level.era}`); }
    goldenDiscBtn.onclick=()=>{ window.open("https://www.goldendisc.co.kr/"); }
    showAnswersBtn.onclick=showAnswers;
}

function getLevel(score,total){
    const percent = score/total*100;
    if(percent>=90) return {code:"C2",era:"legacy era",message:"senin bir üst seviyen hoseok abla boyle devam"};
    if(percent>=80) return {code:"C1",era:"prime era",message:"abla bangtan a dediği an siteye damlamıssın"};
    if(percent>=70) return {code:"B2",era:"icon era",message:"girl!!! ates ediyosun"};
    if(percent>=60) return {code:"B1",era:"rising era",message:"ortalama bir hakimiyet.. calısılması lazım"};
    if(percent>=40) return {code:"A2",era:"rookie era",message:"bir seylere hakimiz ama hala eksikler var"};
    return {code:"A1",era:"debut era",message:"stan twtda hic mi bulunmadın knk"};
}

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
