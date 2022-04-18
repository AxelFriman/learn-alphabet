"use strict";

let armenianJson = `[
    {
        "capital": "Ա",
        "small": "ա",
        "name": "[aɪb]",
        "pronunciation": "[ɑ]",
        "transliteration": "a",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Բ",
        "small": "բ",
        "name": "[bɛn]",
        "pronunciation": "[b]",
        "transliteration": "b",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Գ",
        "small": "գ",
        "name": "[gim]",
        "pronunciation": "[g]",
        "transliteration": "g",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Դ",
        "small": "դ",
        "name": "[dɑ]",
        "pronunciation": "[d]",
        "transliteration": "d",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Ե",
        "small": "ե",
        "name": "[jɛtʃʰ]",
        "pronunciation": "[ɛ], в начале слова [jɛ]",
        "transliteration": "e",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Զ",
        "small": "զ",
        "name": "[zɑ]",
        "pronunciation": "[z]",
        "transliteration": "z",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Է",
        "small": "է",
        "name": "[ɛ]",
        "pronunciation": "[ɛ]",
        "transliteration": "ē",
        "acceptableAnswers": ["e"]
    },
    {
        "capital": "Ը",
        "small": "ը",
        "name": "[ətʰ]",
        "pronunciation": "[ə]",
        "transliteration": "ə",
        "acceptableAnswers": ["e"]
    },
    {
        "capital": "Թ",
        "small": "թ",
        "name": "[tʰo]",
        "pronunciation": "[tʰ]",
        "transliteration": "t‘",
        "acceptableAnswers": ["t"]
    },
    {
        "capital": "Ժ",
        "small": "ժ",
        "name": "[ʒɛ]",
        "pronunciation": "[ʒ]",
        "transliteration": "ž",
        "acceptableAnswers": ["z"]
    },
    {
        "capital": "Ի",
        "small": "ի",
        "name": "[ini]",
        "pronunciation": "[i]",
        "transliteration": "i",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Լ",
        "small": "լ",
        "name": "[lʏn]",
        "pronunciation": "[l]",
        "transliteration": "l",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Խ",
        "small": "խ",
        "name": "[χɛ]",
        "pronunciation": "[χ]",
        "transliteration": "x",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Ծ",
        "small": "ծ",
        "name": "[tsɑ]",
        "pronunciation": "[ts]",
        "transliteration": "c",
        "acceptableAnswers": ["ts"]
    },
    {
        "capital": "Կ",
        "small": "կ",
        "name": "[kɛn]",
        "pronunciation": "[k]",
        "transliteration": "k",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Հ",
        "small": "հ",
        "name": "[ho]",
        "pronunciation": "[h]",
        "transliteration": "h",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Ձ",
        "small": "ձ",
        "name": "[dzɑ]",
        "pronunciation": "[dz]",
        "transliteration": "j",
        "acceptableAnswers": ["dz"]
    },
    {
        "capital": "Ղ",
        "small": "ղ",
        "name": "[ʁɑt]",
        "pronunciation": "[ʁ]",
        "transliteration": "ł",
        "acceptableAnswers": ["r"]
    },
    {
        "capital": "Ճ",
        "small": "ճ",
        "name": "[tʃɛ]",
        "pronunciation": "[tʃ]",
        "transliteration": "č",
        "acceptableAnswers": ["tch", "ch"]
    },
    {
        "capital": "Մ",
        "small": "մ",
        "name": "[mɛn]",
        "pronunciation": "[m]",
        "transliteration": "m",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Յ",
        "small": "յ",
        "name": "[hi]",
        "pronunciation": "[h]³, [j]",
        "transliteration": "y",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Ն",
        "small": "ն",
        "name": "[nu]",
        "pronunciation": "[n], [ŋ]",
        "transliteration": "n",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Շ",
        "small": "շ",
        "name": "[ʃɑ]",
        "pronunciation": "[ʃ]",
        "transliteration": "š",
        "acceptableAnswers": ["sh"]
    },
    {
        "capital": "Ո",
        "small": "ո",
        "name": "[ʋɔ]",
        "pronunciation": "[o], в начале слова [ʋɔ]",
        "transliteration": "o",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Չ",
        "small": "չ",
        "name": "[tʃʰɑ]",
        "pronunciation": "[tʃʰ]",
        "transliteration": "č‘",
        "acceptableAnswers": ["sh", "tsh"]
    },
    {
        "capital": "Պ",
        "small": "պ",
        "name": "[pɛ]",
        "pronunciation": "[p]",
        "transliteration": "p",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Ջ",
        "small": "ջ",
        "name": "[ʤɛ]",
        "pronunciation": "[ʤ]",
        "transliteration": "ǰ",
        "acceptableAnswers": ["j"]
    },
    {
        "capital": "Ռ",
        "small": "ռ",
        "name": "[rɑ]",
        "pronunciation": "[r]",
        "transliteration": "r̄",
        "acceptableAnswers": ["r"]
    },
    {
        "capital": "Ս",
        "small": "ս",
        "name": "[sɛ]",
        "pronunciation": "[s]",
        "transliteration": "s",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Վ",
        "small": "վ",
        "name": "[vɛv]",
        "pronunciation": "[v], [ʋ]",
        "transliteration": "v",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Տ",
        "small": "տ",
        "name": "[tʏn]",
        "pronunciation": "[t]",
        "transliteration": "t",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Ր",
        "small": "ր",
        "name": "[ɾɛ]",
        "pronunciation": "[ɾ]",
        "transliteration": "r",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Ց",
        "small": "ց",
        "name": "[tsʰo]",
        "pronunciation": "[tsʰ]",
        "transliteration": "c‘",
        "acceptableAnswers": ["c"]
    },
    {
        "capital": "Ւ",
        "small": "ւ",
        "name": "[hʏn]",
        "pronunciation": "[v]",
        "transliteration": "w",
        "acceptableAnswers": ["v"]
    },
    {
        "capital": "Փ",
        "small": "փ",
        "name": "[pʰʏɹ]",
        "pronunciation": "[pʰ]",
        "transliteration": "p‘",
        "acceptableAnswers": ["p"]
    },
    {
        "capital": "Ք",
        "small": "ք",
        "name": "[kʰɛ]",
        "pronunciation": "[kʰ]",
        "transliteration": "k‘",
        "acceptableAnswers": ["k"]
    },
    {
        "capital": "Եվ",
        "small": "և",
        "name": "[ev]",
        "pronunciation": "[ev]",
        "transliteration": "ev",
        "acceptableAnswers": [""]
    },
    {
        "capital": "Օ",
        "small": "օ",
        "name": "[o]",
        "pronunciation": "[o]",
        "transliteration": "ô",
        "acceptableAnswers": ["o"]
    },
    {
        "capital": "Ֆ",
        "small": "ֆ",
        "name": "[fɛ]",
        "pronunciation": "[f]",
        "transliteration": "f",
        "acceptableAnswers": [""]
    }
]`;

let dictionary = JSON.parse(armenianJson);
let question;
let answered = false;

function init() {
    newQuestion();
    document.getElementById("checkBtn").addEventListener("click", checkAnswer);
    document.getElementById("answerTb").addEventListener("keyup", e => {
            if (e.key === "Enter" && e.target.value !== "") {
                if (!answered) {
                    checkAnswer();
                    answered = true;
                    e.stopPropagation();
                }
            }
        }
    );
    document.addEventListener("keyup", e => {
            if (e.key === "Enter" && answered) {
                newQuestion();
            }
        }
    );
}

function newQuestion() {
    question = getLetter(dictionary);
    document.getElementById("question").innerHTML = question.getLetter();
    let result = document.getElementById("result");
    result.hidden = true;
    result.classList=[];
    let answerTextbox = document.getElementById("answerTb");
    answerTextbox.value = "";
    answerTextbox.focus();
    answered = false;
}

function checkAnswer() {
    let result = document.getElementById("result");
    let isCorrect = question.isAnswerCorrent(document.getElementById("answerTb").value.trim().toLowerCase());
    result.innerHTML =
        isCorrect
            ? "Correct!"
            : `${question.getRightAnswer()}`;
    result.hidden = false;
    result.classList.add( 
        isCorrect
            ? "greenBg"
            : "redBg"
    );
}

function getLetter(dict) {
    return {
        question: dict[Math.floor(Math.random() * dict.length)],
        getRightAnswer() {
            return `${this.question.transliteration} ${this.question.pronunciation}`;
        },
        getLetter() {
            return this.question.capital + ' ' + this.question.small;
        },
        isAnswerCorrent(answer) {
            return this.question.acceptableAnswers.concat(this.question.transliteration).includes(answer);
        },
    };
}


document.addEventListener("DOMContentLoaded", init);
