
 title = document.querySelector('#title');
 CLICKED_CLASS = "clicked";

function handClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click",handClick);

}
init();``