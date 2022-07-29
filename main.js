let page = 1
let html = document.getElementById('root')

const paragrafas = document.getElementById('ppp')

const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const showData = async () => {
    for (let i = 0; i < 10; i++) {
        const resp = await getData('http://www.omdbapi.com/?apikey=c7bbfb3f&s=Batman&page=' + page)
        html.innerHTML +=
            `<div>
                <img src="${resp.Search[i].Poster}" alt="" />
                <h3> ${resp.Search[i].Title}</h3>
                <p>${resp.Search[i].Year}</p>
                <p>${resp.Search[i].Type}</p>
                
         </div>`
        paragrafas.innerHTML = `esamas puslapis ${page}`
    }


}

showData()

const Next = () => {
    innerHTML = ''
    page += 1
    showData()
}

const Previous = () => {
    if (page > 1) {
        innerHTML = ''
        page -= 1
    }

    showData()
}


// const bttn = document.querySelector('.bttn')
// bttn.innerHTML = `<div class="d-flex justify-content-center mb-5">
//     <button>Previous</button>
//         <h6>esamas puslapis</h6>
//         <button>Next</button>
//     </div > `

