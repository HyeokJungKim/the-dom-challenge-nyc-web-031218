document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById('counter')
  const plus = document.getElementById('+')
  const minus = document.getElementById('-')
  const heart = document.getElementById('<3')
  const pause = document.getElementById('pause')
  const likes = document.querySelector('ul.likes')
  const comment_form = document.getElementById('comment-form')
  const comments = document.getElementById('list')

  let paused = false
  let numberTracker = {}

  let interval = setInterval(incrementCounter, 1000)
  plus.addEventListener("click", incrementCounter)
  minus.addEventListener("click", decrementCounter)
  pause.addEventListener("click", togglePaused)
  heart.addEventListener("click", addLike)

  function incrementCounter(event){
    counter.innerText = parseInt(counter.innerText) + 1
  }

  function decrementCounter(){
    counter.innerText = parseInt(counter.innerText) - 1
  }

  function togglePaused(){
    paused = !paused
    if (paused) {
      clearInterval(interval)
      pause.innerText = "resume"
    } else {
      interval = setInterval(incrementCounter, 1000)
      pause.innerText = "pause"
    }
  }

  function addLike(){
    let second = counter.innerText
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
    renderLikes()
  }

  function renderLikes(){
    comments.innerHTML = ""
    for (let key in numberTracker){
      const li = document.createElement("li")
      li.innerText = `${key} has been liked ${numberTracker[key]} times.`
      comments.append(li)
    }
  }

})
