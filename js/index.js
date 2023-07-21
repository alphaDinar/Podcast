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


const audio_file = document.querySelector('audio')
const audio_progress = document.querySelector('.player_bar .progress')

const play_btn = document.querySelector('.play_btn')

const togglePlay = () => {
  if (play_btn.id === 'play') {
    audio_file.play()
    audio_file.muted = false
    play_btn.id = 'pause'
    play_btn.innerHTML = 'stop'
    document.querySelectorAll('.head_box .mid span small').forEach(bar=>{
      bar.style.background = '#ea5e21'
    })
  } else {
    audio_file.pause()
    play_btn.id = 'play'
    play_btn.innerHTML = 'play_arrow'
    document.querySelectorAll('.head_box .mid span small').forEach(bar=>{
      bar.style.background = 'white'
    })
  }
}  


document.querySelectorAll('.bar_box small').forEach((el, i) => {
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