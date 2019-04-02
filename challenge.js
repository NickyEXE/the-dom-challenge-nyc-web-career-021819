// BEST GROUP EVER

let i = 0
let pause = false
const likes = {}

function countUp(){
  if (!pause) {
    i++
  }
  document.getElementById("counter").innerText = i
}

function subtractNum(){
  i--
  document.getElementById("counter").innerText = i
}

function addNum(){
  i++
  document.getElementById("counter").innerText = i
}

function pauseUnpause(){
  pause = !pause
  document.getElementById("submit").disabled = pause;
}

function likeUponClick() {
  if (likes[i]){
    ++ likes[i]
  }
  else {
    likes[i] = 1
  }
  let like = document.querySelector(`*[data-num='${i}']`)
  if (like) {
    like.innerText = `${i} has been liked ${likes[i]} times.`
  }
  else {
    like = document.createElement("li")
    like.setAttribute('data-num', `${i}`)
    like.innerText = `${i} has been liked 1 time.`
    likeUl.appendChild(like)
  }
}

function addComment(e){
  e.preventDefault()
  let comment = document.createElement("p")
  comment.innerText = document.querySelector("input[type='text']").value
  commentList.appendChild(comment)
}

const likeUl = document.querySelector(".likes")
const commentList = document.getElementById('list')
window.setInterval(countUp, 1000);
const minus = document.getElementById('-')
minus.addEventListener("click", subtractNum)
const add = document.getElementById('+')
add.addEventListener("click", addNum)
const likeButton = document.getElementById("<3")
likeButton.addEventListener("click", likeUponClick)
const pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", pauseUnpause)
const commentButton = document.getElementById("submit")
commentButton.addEventListener("click", addComment)
