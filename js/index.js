const toggle_dark_box = document.querySelector('.toggle_dark_box')
const toggle_button = toggle_dark_box.children[0]
sessionStorage.setItem('mode', 'dark')

const toggle_dark = () => {
  toggle_button.classList.toggle('change')
  if (sessionStorage.getItem('mode') === 'dark') {
    sessionStorage.setItem('mode', 'light')
    document.documentElement.style.setProperty('--var-bg', 'white');
    document.documentElement.style.setProperty('--var-color', 'black');
  } else {
    sessionStorage.setItem('mode', 'dark')
    document.documentElement.style.setProperty('--var-bg', '#2f2f2f');
    document.documentElement.style.setProperty('--var-color', 'white');
  }
}

const info_holder = document.querySelector('.head_box .right')
const page = document.querySelector('.page')
window.onload = () => {
  var val = window.innerWidth
  fixInfoHolder(val)
}

window.onresize = () => {
  var val = window.innerWidth
  fixInfoHolder(val)
}

const fixInfoHolder = (val) => {
  if (val < 1001) {
    if (!document.querySelector('.info_holder_box')) {
      var info_holder_clone = info_holder.cloneNode(true)
      info_holder.style.display = 'none'
      info_holder_clone.classList.remove('right')
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
    audio_file.ontimeupdate = () => {
      audio_progress.style.width = `${(audio_file.currentTime / audio_file.duration) * 100}%`
    }
    el.id = 'pause'
    el.innerHTML = 'pause'
  } else {
    audio_file.pause
    audio_file.ontimeupdate = () => {
      audio_progress.style.width = audio_progress.style.width
    }
    el.id = 'play'
    el.innerHTML = 'play_arrow'
  }
}  