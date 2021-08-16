// --- DOM Elements ---
const hungryPTag = document.querySelector('#hungry');
const happyPTag = document.querySelector('#happy');
const workoutPTag = document.querySelector('#workout');
const agePTag = document.querySelector('#age');
const vegeta = document.querySelector('#vegeta');
const videoDiv = document.querySelector('#videoDiv');
const iframe = document.querySelector('.extras iframe');
const speakBtn = document.querySelector('#speak');
const attackBtn = document.querySelector('#fight');
const exerciseBtn = document.querySelector("#exercise");
const happyBtn = document.querySelector('#happyBtn')
const eatBtn = document.querySelector('#eat');
const youLost = document.querySelector('#loser');
const palyerOne = document.querySelector('#sliding');
// --- Images ---
const stages = ['./img/kid_vegeta.jpeg', './img/vegeta2.jpeg', './img/vegeta_blue.jpeg', './img/sleepingVegeta.jpeg'];
// --- Videos ---
const videos = {
    kid: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gBE8xj1ISIc?playlist=gBE8xj1ISIc&autoplay=1&loop=1&mute=1" frameborder="0" allow="autoplay" allowfullscreen></iframe >',
    adult: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yKYP_EQ_liA?playlist=yKYP_EQ_liA&autoplay=1&loop=1&mute=1&end=216" frameborder="0" allow="autoplay" allowfullscreen></iframe>',
    god: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oV00HVtdX9w?playlist=oV00HVtdX9w&autoplay=1&loop=1&mute=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>'
};
// --- Gifs ---
const giphy = {
    kid: 'https://giphy.com/embed/rGmanVvUtu0og',
    adult: 'https://giphy.com/embed/V3pgCWBZmBogW5Hroj',
    god: 'https://giphy.com/embed/ObWhFPAlovcqs'
};
// --- Sounds ---
const soundBoards = [
    'GREATEST WARRIOR - AUDIO FROM JAYUZUMI.COM.mp3',
    "YOU'RE WORTHLESS - AUDIO FROM JAYUZUMI.COM.mp3",
    "STOP IN AND FINISH THIS MYSELF - AUDIO FROM JAYUZUMI.COM.mp3",
    "FINALLY CATCHING ON - AUDIO FROM JAYUZUMI.COM.mp3",
    "BIG BANG ATTACK - AUDIO FROM JAYUZUMI.COM.mp3"
];
// --- Global Variables ---
let randomNum;
let audio;
let time = 14000;
// --- Vegeta Class ---
class Vegeta {
    constructor(hunger, happy, workingOut, age, isSaiyan) {
        this.hunger = hunger;
        this.happy = happy;
        this.workingOut = workingOut
        this.age = age;
        this.isSaiyan = false;
    }
    default() {
        hungryPTag.innerHTML = `Hunger: - ${this.hunger}`;
        happyPTag.innerHTML = `Happy: ${this.happy}`;
        workoutPTag.innerHTML = `Workout: ${this.workingOut}`;
        agePTag.innerHTML = `Age: ${this.age}`
        vegeta.src = stages[0];
        videoDiv.innerHTML = videos["kid"];
        iframe.src = giphy["kid"];
    }
    aging() {
        agePTag.innerHTML = `Age: ${this.age += 1}`
    }
    eat() {
        hungryPTag.innerHTML = `Hunger: - ${this.hunger += 1}`;
    }
    happyPlueOne() {
        happyPTag.innerHTML = `Happy: ${this.happy += 1}`;
    }
    workout() {
        workoutPTag.innerHTML = `Workout: ${this.workingOut += 1}`;
    }
    adultVegeta() {
        time = time / 2;
        hungryPTag.innerHTML = `Hunger: - ${this.hunger = 2}`;
        happyPTag.innerHTML = `Happy: ${this.happy = 2}`;
        workoutPTag.innerHTML = `Workout: ${this.workingOut = 2}`;
        agePTag.innerHTML = `Age: ${this.age = 29}`;
        iframe.src = giphy["adult"];
        vegeta.src = stages[1];
        videoDiv.innerHTML = videos["adult"];
        this.isSaiyan = true;
    }
    godVegeta() {
        clearInterval(intervalId);
        hungryPTag.innerHTML = ``;
        happyPTag.innerHTML = `Congrats you made Vegeta a GOD!`;
        workoutPTag.innerHTML = ``;
        agePTag.innerHTML = ``;
        iframe.src = giphy["god"];
        vegeta.src = stages[2];
        videoDiv.innerHTML = videos["god"];
    }
    gameIsOver() {
        clearInterval(intervalId)
        palyerOne.style.opacity = '0';
        vegeta.src = stages[3];
        document.body.classList.toggle('dark');
        hungryPTag.innerHTML = "";
        happyPTag.innerHTML = "";
        workoutPTag.innerHTML = "";
        agePTag.innerHTML = "";
    }
}
// --- Init Tamagotchi ---
function ratings() {
    randomNum = Math.floor(Math.random() * 9);
    if (randomNum === 0) {
        randomNum += 1;
    }
    return randomNum;
}
const tamagotchi = new Vegeta(ratings(randomNum), ratings(randomNum), ratings(randomNum), 10, false);
tamagotchi.default();

// --- Functions ---
function trashTalk() {
    audio = [
        new Audio(soundBoards[1]),
        new Audio(soundBoards[2]),
        new Audio(soundBoards[3])
    ];
    checkStatus();
    audio[Math.floor(Math.random() * 3)].play();
}
const vegetaInsult = () => {
    trashTalk();
    hungryPTag.innerHTML = `Hunger: - ${tamagotchi.hunger -= 1}`
    happyPTag.innerHTML = `Happy: ${tamagotchi.happy -= 1}`;
    workoutPTag.innerHTML = `Workout: ${tamagotchi.workingOut -= 1}`;
    checkStatus()
}
let intervalId = setInterval(vegetaInsult, time);
function age() {
    tamagotchi.aging();
}
setInterval(age, 60000);
function bigBangAttack() {
    let audio = new Audio(soundBoards[soundBoards.length - 1]);
    audio.play();
};
function princeOfAllSaiyans() {
    let audio = new Audio(soundBoards[0]);
    audio.play();
};
function trianVegeta() {
    if (tamagotchi.workingOut < 10) {
        tamagotchi.workout();
    }
}
function feedVegeta() {
    if (tamagotchi.hunger < 10) {
        tamagotchi.eat();
    }
}
function happyVegeta() {
    if (tamagotchi.happy < 10) {
        tamagotchi.happyPlueOne();
    }
}
function checkStatus() {
    if (tamagotchi.workingOut === 0 || tamagotchi.happy === 0 || tamagotchi.hunger === 0) {
        tamagotchi.gameIsOver()
        changeBtnStyle()
    }
    if ((!tamagotchi.isSaiyan) && tamagotchi.hunger === 10 && tamagotchi.happy === 10 && tamagotchi.workingOut === 10) {
        console.log('from kid to adult')
        tamagotchi.adultVegeta();
    }
    if (tamagotchi.isSaiyan && tamagotchi.hunger === 10 && tamagotchi.happy === 10 && tamagotchi.workingOut === 10) {
        console.log('adult to god');
        removeEvent();
        tamagotchi.godVegeta();
    }
}
function removeEvent() {
    exerciseBtn.removeEventListener('click', trianVegeta);
    happyBtn.removeEventListener('click', happyVegeta);
    eatBtn.removeEventListener('click', feedVegeta)
    exerciseBtn.removeEventListener('click', checkStatus);
    happyBtn.removeEventListener('click', checkStatus);
    eatBtn.removeEventListener('click', checkStatus)
}
function changeBtnStyle() {
    youLost.style.opacity = '1';
}
// --- Dark Theme ---
const sleepBtn = document.querySelector('#darkMode');
sleepBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
// --- Buttons / Event Listners ---
speakBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    setTimeout(() => {
        intervalId = setInterval(vegetaInsult, time);
    }, 4000)
})
attackBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    setTimeout(() => {
        intervalId = setInterval(vegetaInsult, time);
    }, 6000)
})
speakBtn.addEventListener('click', princeOfAllSaiyans);
attackBtn.addEventListener('click', bigBangAttack);
exerciseBtn.addEventListener('click', trianVegeta);
exerciseBtn.addEventListener('click', checkStatus);
happyBtn.addEventListener('click', happyVegeta);
happyBtn.addEventListener('click', checkStatus);
eatBtn.addEventListener('click', feedVegeta);
eatBtn.addEventListener('click', checkStatus);

/* DOCS
https://github.com/leharry/sound-play
https://dev.to/albertomontalesi/add-dark-mode-to-your-website-with-just-a-few-lines-of-code-5baf
https://www.codegrepper.com/code-examples/javascript/how+to+check+if+a+button+is+clicked+javascript
https://stackoverflow.com/questions/16392486/why-marquee-tag-not-working-in-google-chrome/16392782
*/
