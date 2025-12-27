body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hidden { display: none; }

.card {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 700px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h1, h2 { text-align: center; }

.note {
  background: #ffe4e1;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

#quiz-form .quiz-question {
  background: #f0f8ff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
}

.quiz-options button {
  margin: 5px 5px 0 0;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background: #ccc;
}

.quiz-options button.selected {
  background: #1da1f2;
  color: #fff;
}

#score-bar {
  width: 100%;
  background: #ddd;
  height: 15px;
  border-radius: 8px;
  margin: 10px 0;
}

#score-progress {
  height: 100%;
  width: 0%;
  background: #32cd32;
  border-radius: 8px;
  transition: 0.3s;
}

.certificate-section { text-align: center; margin-top: 20px; }

.certificate-note {
  background: #f0e68c;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
}

.twitter-btn {
  background: #1da1f2;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-right: 10px;
  display: inline-block;
}

.golden-disc-btn {
  background: #ffd700;
  color: black;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
}

#answers div { margin: 5px 0; }
