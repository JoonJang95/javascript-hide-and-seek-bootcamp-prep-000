function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector(`div.target`)
}

function increaseRankBy(n) {
  const hey = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  
  for (let i = 0; i < hey.length; i++) {
    hey[i].innerHTML = parseInt(hey[i].innerHTML) + n
  }
  return hey
}

function deepestChild() {
  
}