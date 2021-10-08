const fetchFootballNews =  async() =>{
    colorChange()
    let parentdiv = document.createElement('div')
    parentdiv.id='news'
    const url = `https://www.reddit.com/r/soccer.json`;
    //console.log(url)
    const res = await fetch(url)
    const body = await res.json()
    console.log(body)
    for (let index = 2; index < body.data.children.length; index++) {
        
            let div = document.createElement('div')
            let h4 = document.createElement('h4')
            let ind = document.createElement('ind');

            ind.textContent = `  ${index-1}   `;
            h4.textContent = body.data.children[index].data.title
            
            div.appendChild(ind)
            div.appendChild(h4)
            
            parentdiv.appendChild(div)
        
    }
    document.body.appendChild(parentdiv)
}

const fetchNews =  async() =>{
    colorChange()    
    let parentdiv = document.createElement('div')
    parentdiv.id='news'
    const url = `https://www.reddit.com/r/worldnews.json`;
    //console.log(url)
    const res = await fetch(url)
    const body = await res.json()
    console.log(body)
    for (let index = 2; index < body.data.children.length; index++) {
        
            let div = document.createElement('div')
            let h4 = document.createElement('h4')
            let ind = document.createElement('ind');

            ind.textContent = `  ${index-1}   `;
            h4.textContent = body.data.children[index].data.title
            
            div.appendChild(ind)
            div.appendChild(h4)
            
            parentdiv.appendChild(div)
        
    }
    document.body.appendChild(parentdiv)
}
