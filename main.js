let page = 1
let html = document.getElementById('root')

const itemsPerPage = 10
const paragrafas = document.getElementById('ppp')
const nextbt = document.getElementById('next')
const prevbt = document.getElementById('prev')

const getData = async (url) => {
    try {
        const resp = await fetch(url)
        return await resp.json()
    } catch {
        return false
    }
}

const showData = async (currentPage) => {
    html.innerHTML = ''

    const resp = await getData('http://www.omdbapi.com/?apikey=c7bbfb3f&s=Batman&page=' + currentPage)

    for (let i = 0; i < resp.Search.length; i++) {
        html.innerHTML +=
            `<div>
                <img src="${resp.Search[i].Poster}" alt="" />
                <h3> ${resp.Search[i].Title}</h3>
                <p>${resp.Search[i].Year}</p>
                <p>${resp.Search[i].Type}</p>
                
         </div>`

    }
    let totalPage = Math.ceil(resp.totalResults / itemsPerPage)


    enableButton(currentPage, totalPage)

    paragrafas.innerHTML = `Puslapis ${currentPage} is ${totalPage}`
}

showData(page)

const Next = () => {
    showData(page++)
}

const Previous = () => {

    showData(page--)
}

const enableButton = (currentpage, totalpage) => {
    if (currentpage <= 1)
        prevbt.setAttribute('disabled', 'disabled')
    else prevbt.removeAttribute('disabled')

    if (currentpage >= totalpage)
        nextbt.setAttribute('disabled', 'disabled')
    else nextbt.removeAttribute('disabled')


}
// const bttn = document.querySelector('.bttn')
// bttn.innerHTML = `<div class="d-flex justify-content-center mb-5">
//     <button>Previous</button>
//         <h6>esamas puslapis</h6>
//         <button>Next</button>
//     </div > `

