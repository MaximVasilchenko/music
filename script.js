const data = [

];

const text = document.querySelector("h1")

const audio = new Audio()
const player = document.querySelector("#player")

let status = false
const playStop = document.querySelector("#stop-play")

playStop.onclick = function() {
    status = !status;
    
    if (status) {
        playStop.innerHTML = "stop"
        audio.play()
    }
    else {
        playStop.innerHTML = "start"
        audio.pause()
    }
}



const search = document.querySelector("#btnSearch")
const inpSearch = document.querySelector("#search")

inpSearch.addEventListener('keydown', srch)



function srch() {
    var searchValue = inpSearch.value
    let out = []
    
    for (i = 0; i < data.length; i++) {
        if (data[i].song.toLowerCase().includes(searchValue.toLowerCase()) || 
        data[i].song.toLowerCase().includes(searchValue.toLowerCase())) {
            out.push(data[i])
        }
    }

    render(out)

}


const content = document.querySelector("section")

const blocked = document.querySelector("#blocked")







const open = document.querySelector("#open").onclick = function() {
    blocked.style.display = "flex"
}
const close = document.querySelector("#close").onclick = function() {
    blocked.style.display = "none"
}



const art = document.getElementById("art")
const song = document.getElementById("song")
const file = document.getElementById("file")
const btn = document.getElementById("btn").onclick = function() {
    var img = prompt("URL картинки")
    var inpArt = art.value
    var inpSong = song.value
    var inpFile = file.files[0].name
    var randId = Math.random() * 10000;

    var mus = new Music(img,inpArt,inpSong,inpFile, randId)
    data.push(mus)
    render(data)
}



class Music {
    constructor(img, artist, song, src, id) {
        this.img = img,
        this.artist = artist,
        this.song = song,
        this.src = src,
        this.id = id
    }
}

var m1 = new Music(
    // "https://i.scdn.co/image/ab6761610000e5eb2a7d76bd32fbf2cebf0bc2ec",
    // "ssshhhiiittt!",
    // "Домой",
    // "./music/название.mp3",
    // 1
    "https://varlis.org/uploads/posts/2022-01/36b552edc33685678fbb8a1332eae1c1_image.jpeg",
    "GAYAZOV$ BROTHER$",
    "МАЛИНОВАЯ ЛАДА",
    "dw.mp3",
    Math.random() * 1000
)
data.push(m1)

var m2 = new Music(
    "https://i.ytimg.com/vi/CbUizhwNSH4/maxresdefault.jpg",
    "GAYAZOV$ BROTHER$ & Filatov & Karas",
    "ПОШЛА ЖАРА ",
    "ds.mp3",
    Math.random() * 1000
)
data.push(m2)

var m3 = new Music(
    "https://avatars.yandex.net/get-music-content/192707/68c10d66.a.8501194-1/200x200",
    "The Kids Are Coming",
    "Dance Monkey ",
    "da.mp3",
    Math.random() * 1000
)
data.push(m3)

function play(id) {
    for (i = 0; i < data.length; i++) {
        if (id == data[i].id) {
            audio.src = data[i].src
            text.innerHTML = `${data[i]. artist} - ${data[i].song}`
            player.style.background = `url(${data[i].img}) no-repeat center`
            player.style.backgroundSize = `cover`
        }
    }    
}


function render(arr) {
        content.innerHTML = ``
        for (i = 0; i < arr.length; i++) {
            content.innerHTML += `
        <div class="elem" onclick=play(${arr[i].id})>
            <img width = "50px" height  = "50px" src=${arr[i].img} alt="">
            <div class = "text">
                <h3>${arr[i].artist}</h3>
                <h4>${arr[i].song}</h4>
            </div>
        </div>
            `
        }
}
render(data)




