const counter = document.getElementById('counter')
const plus = document.getElementById('+')
const minus = document.getElementById('-')
const heart = document.getElementById('<3')
const pause = document.getElementById('pause')
const likes = document.querySelector('ul.likes')
const comment_form = document.getElementById('comment-form')
const comments = document.getElementById('list')


let notpaused = true

window.addEventListener("load", function(){
  setInterval(function(){if(notpaused){counter.innerText = (parseInt(counter.innerText) + 1).toString()}}, 1000)
  }
)

plus.addEventListener( "click", () => {if(notpaused){counter.innerText = (parseInt(counter.innerText) + 1).toString()}} )

minus.addEventListener( "click", () => {if(notpaused){counter.innerText = (parseInt(counter.innerText) - 1).toString()}} )

pause.addEventListener( "click", () => {
  if(pause.innerText == "pause"){
    pause.innerText = "resume"
    notpaused = false
  } else {
    pause.innerText = "pause"
    notpaused = true;
  }
  })

let tracker = {}

heart.addEventListener( "click", () => {
  {if(notpaused){
  if(!tracker[counter.innerText]){
    tracker[counter.innerText] = 1
  } else {
   ++tracker[counter.innerText]
  }
  likes.innerHTML = " ";
  for(const element in tracker) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${element} has been liked ${tracker[element]} times`))
    likes.appendChild(li)
  }}
}})

comment_form.addEventListener("submit", function(){
  event.preventDefault()
  const comment = document.getElementById("comment")
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(`${comment.value}`))
  comments.appendChild(li)

  console.log(comment)
})
