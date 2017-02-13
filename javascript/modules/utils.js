var title = document.querySelector(".title");

export function displayTitle(bool=true) {
  if (title){
    if (bool) {
      title.classList.add('is-active');
    } else {
      title.classList.remove('is-active');
    }
  }
}
