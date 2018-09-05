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
  var node = document.getElementById('grand-node')
  var next = node.children[0]
  
  while (next) {
    node = next 
    next = node.children[0]
  }
  return node 
}


/* Remember that the div's are all defined because they include the children div's */