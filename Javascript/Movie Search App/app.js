const BASE_URL = 'https://api.tvmaze.com/search/shows?q=';
const form = document.querySelector('form');
const resultSection = document.querySelector('#result');




const getMovies = (searchText) => {
    axios.get(`${BASE_URL}${searchText}`)
        .then((res) => {
            const movies = res.data;
            for (let movie of movies) {
                if (movie.show.image != null) {
                    const image = document.createElement('img');
                    image.setAttribute('src', movie.show.image.medium);
                    resultSection.append(image);
                }  
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

const removeImage = (parent) => {
  while (parent.firstChild) {
      parent.firstChild.remove();
  }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = form.children[0].value;
    removeImage(resultSection);
    getMovies(searchText);
    form.children[0].value = "";
});







// CHANGE THEMES


const themeColors = document.querySelectorAll('[name = "theme"]');


// store themes

const storeTheme = function(theme){

    localStorage.setItem('theme',theme);
}

const applyTheme = function(){

    const activeTheme = localStorage.getItem('theme');


    themeColors.forEach((themeOption)=>{

        if(activeTheme === themeOption.id){

            themeOption.checked = true;
        }

    }) 
}
themeColors.forEach((themeOption)=>{

    themeOption.addEventListener('click',()=>{

        console.log(themeOption)

        storeTheme(themeOption.id)
    })
})