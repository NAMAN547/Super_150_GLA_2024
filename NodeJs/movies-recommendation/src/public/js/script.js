let result = document.getElementById("main")


async function searchDb(searchText){

   const res = await fetch(`/search?q=${searchText}`);

    const data = await res.json();

    data.forEach(ele => {


        let newDiv = document.createElement("div");

        newDiv.setAttribute("id","main-div");

       newDiv.textContent = ele.name;

       result.append(newDiv);
   
    });

   
}

const searchInput = document.getElementById("searchinput");

const removeSeries = (parent) => {
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
  }
  



searchInput.addEventListener("keyup",(e)=>
{

    let searchText = searchInput.value;
    removeSeries(result);

    if(searchText.length > 0){

        searchDb(searchText);
    }
})

