// --- DOM Elements ---
const videoDiv = document.querySelector('.yt');
const iframe = document.querySelector('.giphy iframe');
const span = document.querySelector("#enemy");
const workoutProgressBar = document.querySelector('#workout');
const happyProgressBar = document.querySelector('#happy');
const prideProgressBar = document.querySelector('#pride');

const workoutBtn = document.querySelector('.workout-btn');
const happyBtn = document.querySelector('.happy-btn')
const prideBtn = document.querySelector('.pride-btn')
const attackBtn = document.querySelector('.big-bang-attack');

clickFunction()

const enemies = ['Saibamen', 'Android 19', 'Goku'];

const videos = {
    saibamen: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gBE8xj1ISIc?playlist=gBE8xj1ISIc&autoplay=1&loop=1&mute=1" frameborder="0" allow="autoplay" allowfullscreen></iframe >',
    android19: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yKYP_EQ_liA?playlist=yKYP_EQ_liA&autoplay=1&loop=1&mute=1&end=216" frameborder="0" allow="autoplay" allowfullscreen></iframe>',
    goku: '<iframe width="560" height="315" src="https://www.youtube.com/embed/oV00HVtdX9w?playlist=oV00HVtdX9w&autoplay=1&loop=1&mute=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>'
};

const giphy = {
    bba: 'https://giphy.com/embed/jaluhXZOhVNmw',
    default: 'https://giphy.com/embed/zO5p2acZUVWVO'
};

let soundBoards = [
    'GREATEST WARRIOR - AUDIO FROM JAYUZUMI.COM.mp3',
    "YOU'RE WORTHLESS - AUDIO FROM JAYUZUMI.COM.mp3",
    "STOP IN AND FINISH THIS MYSELF - AUDIO FROM JAYUZUMI.COM.mp3",
    "FINALLY CATCHING ON - AUDIO FROM JAYUZUMI.COM.mp3",
    'BIG BANG ATTACK - AUDIO FROM JAYUZUMI.COM.mp3'
];

let randomNum;
let audio;
let time = 13000;

class Vegeta {
    constructor(pride, happy, workingOut, isSaiyan, isGod ) {
        this.pride = pride;
        this.happy = happy;
        this.workingOut = workingOut;
        this.isSaiyan = false;
        this.isGod = false;
    }
    default() {
        span.innerHTML = enemies[0]
        videoDiv.innerHTML = videos["saibamen"];
        iframe.src = giphy["default"];
    }
    attack() {
        iframe.src = giphy["bba"];
        bigBangAttack()
        setTimeout(() => {
            iframe.src = giphy["default"]
        }, 8000)
    }
    sayianPride() {
        this.pride++
        prideProgressBar.value = this.pride;
    }
    happyPlueOne() {
        this.happy++;
        happyProgressBar.value = this.happy;
    }
    workout() {
        this.workingOut++;
        workoutProgressBar.value = this.workingOut;
    }
    adultVegeta() {
        span.innerHTML = enemies[1]

        videoDiv.innerHTML = videos["android19"];

        this.workingOut = 1;
        this.happy = 1;
        this.pride = 1;

        workoutProgressBar.value = this.workingOut;
        happyProgressBar.value = this.happy;
        prideProgressBar.value = this.pride;

        this.isSaiyan = true;
        time = 10000;
    }
    godVegeta() {
        span.innerHTML = enemies[2]
        videoDiv.innerHTML = videos["goku"];

        this.workingOut = 1;
        this.happy = 1;
        this.pride = 1;

        workoutProgressBar.value = this.workingOut;
        happyProgressBar.value = this.happy;
        prideProgressBar.value = this.pride;

        time = 7000
        this.isGod = true;
        setTimeout(() => checkStatus())
    }
    gameIsOver() {
        clearInterval(intervalId)
        document.querySelector('.progress-bar').innerHTML = ''
        document.querySelector('.content').innerHTML = 'Game Over'
        soundBoards = null;
    }
    winner() {
        clearInterval(intervalId);
        document.querySelector('.progress-bar').innerHTML = ''
        document.querySelector('.content').innerHTML = 'You Won!'
        setTimeout(() => princeOfAllSaiyans(), 1000)
    }
}

const tamagotchi = new Vegeta(1, 1, 1, 1, 10, false);
tamagotchi.default();

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
    prideProgressBar.value = tamagotchi.pride -= 1;
    workoutProgressBar.value = tamagotchi.workingOut -= 1;
    happyProgressBar.value = tamagotchi.happy -= 1;
    removeEvent()
    checkStatus()
    setTimeout(() => clickFunction(), 5000)
}

let intervalId = setInterval(vegetaInsult, time);

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
    if (tamagotchi.pride < 10) {
        tamagotchi.sayianPride();
    }
}

function happyVegeta() {
    if (tamagotchi.happy < 10) {
        tamagotchi.happyPlueOne();
    }
}

function attackVegeta() {
   attackBtn.style.color = '#EFE1CD';
   attackBtn.style.backgroundColor = '#2955DC';
   attackBtn.style.cursor = 'pointer';
}

function disabledBtns() {
    workoutBtn.style.backgroundColor = 'red';
    happyBtn.style.backgroundColor = 'red';
    prideBtn.style.backgroundColor = 'red';
    attackBtn.style.backgroundColor = 'red';
}

function playBtns() {
   workoutBtn.style = 'btn';
    happyBtn.style = 'btn';
    prideBtn.style = 'btn';
}

function checkStatus() {
    if (tamagotchi.workingOut === 0 || tamagotchi.happy === 0 || tamagotchi.pride === 0) {
        tamagotchi.gameIsOver()
    }
    if ((!tamagotchi.isSaiyan) && tamagotchi.pride === 10 && tamagotchi.happy === 10 && tamagotchi.workingOut === 10) {
        tamagotchi.adultVegeta();
    }
    if ((!tamagotchi.isGod) && tamagotchi.isSaiyan && tamagotchi.pride === 10 && tamagotchi.happy === 10 && tamagotchi.workingOut === 10) {
        tamagotchi.godVegeta();
    }
    if (tamagotchi.isGod && tamagotchi.isSaiyan && tamagotchi.pride === 10 && tamagotchi.happy === 10 && tamagotchi.workingOut === 10) {
        tamagotchi.winner();
    }
    if (tamagotchi.pride === 10) {
        attackVegeta()
    }
}

function clickFunction() {
    playBtns()
    workoutBtn.addEventListener('click', trianVegeta);
    workoutBtn.addEventListener('click', checkStatus);
    happyBtn.addEventListener('click', happyVegeta);
    happyBtn.addEventListener('click', checkStatus);
    prideBtn.addEventListener('click', feedVegeta);
    prideBtn.addEventListener('click', checkStatus);
}

function removeEvent() {
    disabledBtns()
    workoutBtn.removeEventListener('click', trianVegeta);
    workoutBtn.removeEventListener('click', checkStatus);
    happyBtn.removeEventListener('click', happyVegeta);
    happyBtn.removeEventListener('click', checkStatus);
    prideBtn.removeEventListener('click', feedVegeta);
    prideBtn.removeEventListener('click', checkStatus);
}

attackBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    tamagotchi.attack()
    setTimeout(() => {
        intervalId = setInterval(vegetaInsult, time);
    }, 9000)
})
