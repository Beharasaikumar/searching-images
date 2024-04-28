const accesskey = "EDyG9G4B4e74mZmEUlk6tRNhwrh0N77k2WSf232N_lc";


const search = document.getElementById("search");
const searchbox = document.getElementById("search-box");
const Result = document.getElementById("result");
const showmore = document.getElementById("show-more");

let keyword =""
let page = 1;

async function searchingimages(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        Result.innerHTML ="";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;

        imagelink.target ="_blank";
        imagelink.appendChild(image);
        Result.appendChild(imagelink);
    })
    showmore.style.display ="block";
}

search.addEventListener('submit' , (e)=>{
    
    e.preventDefault();
    page = 1;
    searchingimages();
});

showmore.addEventListener('click' , ()=>{
    page++;
    searchingimages();
})