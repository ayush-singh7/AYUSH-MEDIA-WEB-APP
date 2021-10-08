const memeBtn = document.getElementById('memeBtn');
const memeBtn2 = document.getElementById('memeBtn2')
const footballButton = document.getElementById('footballButton')
const newsButton = document.getElementById('newsButton')

const bgr = ['#ff3381', '#93f', '#f56', '#eeff00', '#003cff'];
const fgr = ['#111', '#fff', '#111','#111', '#fff']

const colorChange = ()=>{

    let limit = bgr.length
    let index = Math.floor(Math.random() * limit);
    memeBtn.style.background = bgr[index];
    memeBtn.style.color = fgr[index]

    memeBtn2.style.background = bgr[index];
    memeBtn2.style.color = fgr[index]
    
    footballButton.style.background = bgr[index];
    footballButton.style.color = fgr[index]
    
    newsButton.style.background = bgr[index];
    newsButton.style.color = fgr[index]    

}
