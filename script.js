function startBirthday() {
    nextSection("birthday");
    startTyping();
}

function nextSection(sectionId) {

    const sections = document.querySelectorAll(".screen");

    sections.forEach(function (section) {
        section.classList.remove("active");
    });

    const next = document.getElementById(sectionId);

    if (next) {
        next.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


function startTyping() {

    const text =
        "Semoga hari ni jadi hari yang paling bermakna untuk kau. ✨";

    const element =
        document.getElementById("typingText");

    let index = 0;

    element.innerHTML = "";

    function type() {

        if (index < text.length) {

            element.innerHTML += text.charAt(index);

            index++;

            setTimeout(type, 45);
        }
    }

    type();
}


/* COUNTDOWN */

const birthdayDate =
    new Date("2026-10-04T00:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        birthdayDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();


/* MUSIC */

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.querySelector(".music-btn");


    if (music.paused) {

        music.play();

        button.innerHTML =
            "⏸ Pause Music";

    } else {

        music.pause();

        button.innerHTML =
            "▶ Play Music";
    }
}


/* WISHES */

const wishes = [

    {
        icon: "🌟",
        title: "Happiness",
        text: "Semoga hidup kau dipenuhi dengan banyak sebab untuk tersenyum."
    },

    {
        icon: "🚀",
        title: "Success",
        text: "Semoga segala usaha kau membuahkan hasil dan kau berjaya capai apa yang kau impikan."
    },

    {
        icon: "❤️",
        title: "Good People",
        text: "Semoga kau sentiasa dikelilingi oleh orang-orang yang ikhlas dan menghargai kau."
    },

    {
        icon: "🌙",
        title: "Peace",
        text: "Semoga hati kau sentiasa tenang walaupun hidup tak selalu berjalan seperti yang dirancang."
    },

    {
        icon: "🎓",
        title: "Future",
        text: "Semoga masa depan kau dipenuhi dengan peluang yang baik dan pengalaman yang bermakna."
    },

    {
        icon: "✨",
        title: "Everything Good",
        text: "Semoga tahun baru dalam hidup kau ni jadi lebih baik daripada yang sebelumnya."
    }

];


let wishIndex = 0;


function nextWish() {

    wishIndex++;

    if (wishIndex >= wishes.length) {
        wishIndex = 0;
    }

    const wish = wishes[wishIndex];

    document.getElementById("wishIcon").innerText =
        wish.icon;

    document.getElementById("wishTitle").innerText =
        wish.title;

    document.getElementById("wishText").innerText =
        wish.text;
}


/* CONFETTI */

function celebrate() {

    document.getElementById("finalText").innerText =
        "🎉 HAPPY BIRTHDAY! 🎉";

    createConfetti();
}


function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        const size =
            Math.random() * 8 + 5;

        confetti.style.width =
            size + "px";

        confetti.style.height =
            size * 1.5 + "px";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        confetti.style.background =
            getRandomColor();

        document.body.appendChild(confetti);

        setTimeout(function () {
            confetti.remove();
        }, 6000);
    }
}


function getRandomColor() {

    const colors = [
        "#ff4fa3",
        "#c45cff",
        "#8f5cff",
        "#ffffff",
        "#ffd166",
        "#5ee7ff"
    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];
}