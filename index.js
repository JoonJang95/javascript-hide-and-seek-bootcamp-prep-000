function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector(`div.target`)
}

<<<<<<< HEAD
function increaseRankBy(n) {
  const hey = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  
  for (let i = 0; i < hey.length; i++) {
    hey[i].innerHTML = parseInt(hey[i].innerHTML) + n
  }
  return hey
}

function deepestChild() {
  const lis = document.getElementById("grand-node").querySelectorAll("div")
  var full = []
  
  for (let i = 0; i < lis.length; i++) {
    full.push(lis[i].innerHTML) 
  }
  
  
  return lis.innerHTML
=======
function increaseRankBy() {
  const 
}

function deepestChild() {
>>>>>>> b5f8561f70c257f079b4297f7aa1bee62d9ef048
  
}