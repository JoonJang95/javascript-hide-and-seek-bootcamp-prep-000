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

/*function deepestChild() {
  
  const lis = document.getElementById("grand-node").querySelectorAll("div")
  
  var current = []
  var next = []
  
  for (let i = 0; i < lis.length; i++) {
   current.push(lis[i].innerHTML) 
  }
  
  while (current) {
    
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
      next.push(current[i])
    }
  }  
    current = next.shift()
    
    if (current.innerHTML != undefined) {
      return current[0].innerHTML
    }
 }
}*/

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