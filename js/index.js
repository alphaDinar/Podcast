const runInfoAnime = () => {
  document.querySelectorAll('.info p').forEach((el, i) => {
    anime({
      targets: el,
      translateY: [-30, 0],
      duration: 1000,
      delay: i * 100,
      opacity: [0, 1]
    })
  })
  document.querySelectorAll('.info_holder nav i').forEach((el, i) => {
    anime({
      targets: el,
      delay: 100 * i,
      duration: 1000,
      opacity: [0, 1],
      translateX: [-30, 0]
    })
  })
}
runInfoAnime()

const info_holder = document.querySelector('.head_box .right')
const page = document.querySelector('.page')
window.onload = () => {
  var val = window.innerWidth
  fixInfoHolder(val)
  runInfoAnime()
}

window.onresize = () => {
  var val = window.innerWidth
  fixInfoHolder(val)
}



const fixInfoHolder = (val) => {
  if (val < 1001) {
    if (!document.querySelector('.info_holder_box')) {
      var info_holder_clone = info_holder.cloneNode(true)
      info_holder_clone.classList.remove('right')
      info_holder.style.display = 'none'
      var info_holder_clone_box = document.createElement('section')
      info_holder_clone_box.classList.add('info_holder_box')
      info_holder_clone_box.appendChild(info_holder_clone)
      page.appendChild(info_holder_clone_box)
    }
  } else {
    if (document.querySelector('.info_holder_box')) {
      info_holder.style.display = 'flex'
      document.querySelector('.info_holder_box').remove()
    }
  }
}

const audio_file = document.querySelector('audio')
const audio_progress = document.querySelector('.player_bar .progress')

const togglePlay = (el) => {
  if (el.id === 'play') {
    audio_file.play()
    audio_file.muted = false
    el.id = 'pause'
    el.innerHTML = 'stop'
    document.querySelectorAll('.head_box .mid span small').forEach(bar=>{
      bar.style.background = '#ea5e21'
    })
  } else {
    audio_file.pause()
    el.id = 'play'
    el.innerHTML = 'play_arrow'
    document.querySelectorAll('.head_box .mid span small').forEach(bar=>{
      bar.style.background = 'white'
    })
  }
}  

document.querySelectorAll('.head_box .mid span small').forEach((el, i) => {
  anime({
    loop: true,
    targets: el,
    scale: [0, 1],
    opacity: [0.5, 1],
    duration: 2000,
    delay: 50 * i,
    width: [20, 30, 20, 25, 30],
  })
})

document.querySelectorAll('.head_box .left nav i').forEach((el, i) => {
  anime({
    targets: el,
    opacity: [0, 1],
    translateX: [-30, 0]
  })
})

anime({
  loop: true,
  duration: 3000,
  targets: '#clock',
  rotate: [0, 360],
  opacity: [0, 1]
})

anime({
  targets: '.head_box .mid div',
  scale: [0.8, 1],
  duration: 300,
})