

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

document.onload = applyTheme();










var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var filter = document.getElementById('filter');



form.addEventListener('submit',addEvent)

itemList.addEventListener('click',removeEvent);

filter.addEventListener('keyup', filterItems);



function addEvent(e){
    e.preventDefault();


var item = document.getElementById('main-input').value;


var newItem = document.createElement('li');


newItem.className = 'list-group-item';


newItem.appendChild(document.createTextNode(item));



var deleteBtn = document.createElement('button');

deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


deleteBtn.appendChild(document.createTextNode('X'));

newItem.appendChild(deleteBtn);


itemList.appendChild(newItem);


}


// Remove Items

function removeEvent(e){

    if(e.target.classList.contains('delete')){

        if(confirm('delete krna hai?')){

            var li = e.target.parentElement;

         itemList.removeChild(li);

       }
    }
}





// Filter Items
function filterItems(e){

    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');


    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }








