var after = ''

const fetchMemes = async() =>{
    colorChange()
    
    if(document.getElementById('memes')){
        document.getElementById('memes').remove()
    }
    let parentdiv = document.createElement('div')
    parentdiv.id='memes'
    const url = `https://www.reddit.com/r/dankmemes.json?after=${after}`;
    console.log(url)
    const res = await fetch(url)

    const body = await res.json()
    //console.log(body);
    after = body.data.after
    //console.log(after)
    for (let index = 0; index < body.data.children.length; index++) {
        if (body.data.children[index].data.post_hint === 'image') {
            let poster = document.createElement('poster')
            let div = document.createElement('div')
            let h4 = document.createElement('h4')
            let image = document.createElement('img')
            image.src = body.data.children[index].data.url_overridden_by_dest
            h4.textContent = body.data.children[index].data.title
            poster.textContent = body.data.children[index].data.author
            
            div.appendChild(h4)
            div.appendChild(image)
            div.appendChild(poster)
            parentdiv.appendChild(div)
        }
    }
    document.body.appendChild(parentdiv)
}

const fetchMemesIndian = async() =>{
    colorChange()
    
    if(document.getElementById('memes')){
        document.getElementById('memes').remove()
    }
    let parentdiv = document.createElement('div')
    parentdiv.id='memes'
    const url = `https://www.reddit.com/r/Saimansays.json?after=${after}`;
    console.log(url)
    const res = await fetch(url)
    const body = await res.json()
    console.log(body);
    after = body.data.after
    //console.log(after)
    for (let index = 0; index < body.data.children.length; index++) {
        if (body.data.children[index].data.post_hint === 'image') {
            let poster = document.createElement('poster')
            let div = document.createElement('div')
            let h4 = document.createElement('h4')
            let image = document.createElement('img')
            image.src = body.data.children[index].data.url_overridden_by_dest
            h4.textContent = body.data.children[index].data.title
            poster.textContent = body.data.children[index].data.author
            
            div.appendChild(h4)
            div.appendChild(image)
            div.appendChild(poster)
            parentdiv.appendChild(div)
        }
    }
    document.body.appendChild(parentdiv)
}
