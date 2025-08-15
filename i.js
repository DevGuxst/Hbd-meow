let seq = [
  {text:"เค้ารู้ว่าอ้วนรักเค้า 😎", img:"IMG_20250605_053334_043.jpg"},
  {text:"ไอ้อ้วนของเค้าเกิดแล้ววววววว 🎉"},
  {text:"ขอบคุณที่อยู่ข้างกันเสมอน้าา ❤️", img:"IMG_20250605_053322_360.jpg"},
  {text:"ทุกวันที่อยู่ด้วยกัน มันมีความหมายมาก 💕", img:"IMG_20250605_053336_786.jpg"},
  {text:"ถึงจะมีทะเลาะบ้าง อะไรบ้างง 😂"},
  {text:"แต่เค้าก็ยังรักอ้วนเสมอนะจ้ะ 😘"},
  {text:"อ้วนคือคนที่ทำให้เค้ารู้สึกมีความสุขมากๆ 🥰"},
  {text:"สุขสันต์วันเกิดนะจ้ะ! 🎂", img:"IMG_20250608_220659_760.jpg"},
  {text:"เค้าอยากให้ปีนี้เป็นปีที่ดีที่สุดสำหรับอ้วน 💖 (เพราะมีเค้า)", img:"1753284072464.jpg"},
  {text:"และตลอดไปเค้าก็จะรักอ้วนไม่เปลี่ยน 😘", img:"IMG_20250728_170111_649.jpg"},
  {text:"ถึงจะดูทำชุ่ยๆ แต่เค้าตั้งใจทำมันมากเลยน้า"},
];

const message = document.getElementById("message");
const pic = document.getElementById("pic");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const canvas = document.getElementById("confetti");
const confettiInstance = confetti.create(canvas, { resize: true, useWorker: true });

const bgm = document.getElementById("bgm");
const clickSfx = document.getElementById("clickSfx");

yesBtn.addEventListener("click", () => {
  clickSfx.play();
  yesBtn.disabled = true; 
  noBtn.disabled = true; 
  yesBtn.style.display = "none"; 
  noBtn.style.display = "none"; 
  startSequence();
});

function startSequence() {
  let index = 0;

  function showNext() {
    if(index < seq.length) {
      message.style.opacity = 0;
      pic.style.opacity = 0;

      setTimeout(() => {
        message.innerText = seq[index].text;
        message.style.opacity = 1;
        pic.src = seq[index].img;
        pic.style.opacity = 1;
        index++;
        setTimeout(showNext, 2500);
      }, 500);
    } else {
      message.innerText = "มีแค่นี้แหละ  ิิ รักนะเว้ยยยย 😘";
      pic.src = "";
      startHeartRain();
      startConfetti();
    }
  }

  showNext();
}

function startConfetti() {
  setInterval(() => {
    confettiInstance({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      gravity: 1,
      colors: ['#ff4081','#ff79a6','#ffe082','#ffeb3b']
    });
  }, 500);
}

function startHeartRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
