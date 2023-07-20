const sideBar = document.querySelector('.sideBar')
const main = document.querySelector('.main')

const toggleSideBar = () => {
  sideBar.classList.toggle('change')
  main.classList.toggle('change')
}

document.querySelectorAll('.stat').forEach((el,i)=>{
  anime({
    targets : el,
    translateY : [40,0],
    duration : 1000,
    opacity : [0,1],
    delay : 100 * i
  })
})


document.querySelector('.sideBar').innerHTML += `
<button class="material-symbols-outlined" onclick="toggleSideBar()">linear_scale</button>
<header>
  <img src="images/logo.png" id="logo">
</header>
<nav>
  <a href="dashboard.html"> <i class="material-symbols-outlined">dashboard</i> <span>Dashboard</span> </a>
  <a href="programs.html"> <i class="material-symbols-outlined">radio</i> <span>Programs</span> </a>
  <a href="competitions.html"> <i class="material-symbols-outlined">trophy</i> <span>Competitions</span> </a>
  <a href=""> <i class="material-symbols-outlined">podcasts</i> <span>Podcasts</span></a>
  <a href=""> <i class="material-symbols-outlined">tag</i> <span>Blogs</span></a>
  <a href=""> <i class="material-symbols-outlined">news</i> <span>News</span></a>
</nav>
<footer>
  <a class="material-symbols-outlined">power_settings_new</a>
</footer>
`