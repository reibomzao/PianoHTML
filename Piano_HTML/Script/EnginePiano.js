const pianoKeys = document.querySelectorAll(".piano .key");

let audio = new Audio("./tunes/a.wav")
let mapKey = []
const playTune = (key) => {
    audio.src = './tunes/'+key+'.wav';
    audio.play();

    const clicKey = document.querySelector('[data-key="'+key+'"]')
    clicKey.classList.add('active')
    setTimeout(()=>{
    clicKey.classList.remove('active')
    },150)
}

pianoKeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    mapKey.push(key.dataset.key);
})

document.addEventListener("keydown",(e)=>{
    if(mapKey.includes(e.key)){
        playTune(e.key);
    }
})

let Vol = document.querySelector(".volume input");
let Check = document.querySelector(".check input");

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKey = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

Vol.addEventListener("input", handleVolume)
Check.addEventListener("click", showHideKey)
