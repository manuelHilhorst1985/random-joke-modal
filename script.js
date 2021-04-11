const jokesArr = [
    {
        question: "what is the ultimate paradox",
        answer: "There is no absolute truth"
    },

    {
        question: "what turns coffee into code",
        answer: "A programmer"
    },
    {
        question: "Why did I get fired from the keyboard factory?",
        answer: "I wasn't puttin' in enough shifts... :'-("
    }
];

jokelist = jokesArr[Math.floor(Math.random() * jokesArr.length)]

const addQuestion = () => { 
    const jokeModalQuestion = document.querySelector('.joke__question')
    let jokelist = jokesArr[Math.floor(Math.random() * jokesArr.length)]
    jokeModalQuestion.innerText = jokelist.question;
    jokeAnswer = jokelist.answer; 
};

document.querySelector('.give--answer').addEventListener('click', () => {
    document.querySelector(".joke__answer").innerText = jokeAnswer; 
});

document.querySelector('.show--modal').addEventListener('click', () => {  
    document.querySelector('.modal').classList.toggle('modal--hidden');
    addQuestion();
});

document.querySelector('.modal__close-bar').addEventListener('click', () => {
    document.querySelector('.modal').classList.toggle('modal--hidden');
    document.querySelector(".joke__answer").innerText = '';
});





    
    

    
