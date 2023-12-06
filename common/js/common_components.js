
imagesPath = '../assets/images'

$('#navbar')[0].innerHTML = `<div class="container"><div class="row">
<div class="col-12 d-flex justify-content-between">
  <a class="px-3 py-1" href="../home/homepage.html" >
    <img height="40px" src="${imagesPath}/logo.png" alt="">
  </a>  

  <ul class="d-none d-md-flex align-items-center nav">
    <li class="nav-item">
      <a class="nav-link" href="../home/homepage.html">HOME</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../storia/storia.html">LA STORIA</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="../vigneti/vigneti.html">VIGNETI</a>
    </li>
    <li id="viniDropdown" class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        VINI
      </a>
      <ul style="padding-top:12px" class="dropdown-menu animate__fadeInDown animate__animated animate__faster" aria-labelledby="navbarDropdown">
        <li style="margin-top:-5px"><a class="dropdown-item" href="../vini/tascaioso.html">Tascaioso</a></li>
        <li style="margin-top:-5px"><a class="dropdown-item" href="../vini/orior.html">Orior</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#footer">CONTATTI</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">EN</a>
    </li>
  </ul> 
    <div class=" d-flex d-md-none flex-column justify-content-center">
      <a onclick="action('openMenu')" class="btn d-flex flex-column justify-content-center">
        <img src="${imagesPath}/icons/hamburger.svg" alt="">
      </a>  
    </div>
  </div>
</div></div>
`

$('footer')[0].innerHTML = `<div class="container"><div class="row">
<div id="footer" class="col-12">
  <div class="card py-4 border-0 bg-transparent text-light text-center">
    <div class="card-title text-grey">
      AlfaPrivativo
    </div>
    <div class="card-body">
      Via Bla Bla (Italia) <br>
PI: 0000000000000 <br>
Tel.: +39 3210987654 - Email: mail@mail.com
    </div>
  </div>
</div>
</div></div>`

$('footer')[1].innerHTML = ` <div class="container"><div class="row">
<div class="col-12">
  <div class="card py-4 border-0 bg-transparent text-light text-center d-flex flex-column justify-content-center">
    <div class="d-flex justify-content-center text-white">
      <!--<button style="min-width: 38px;" class="btn btn-light rounded rounded-pill m-2">
        <span class="fa fa-facebook"></span>
      </button>-->
      <button style="min-width: 38px;" class="btn btn-light rounded rounded-pill m-2">
        <span class="fa fa-instagram"></span>
      </button>
      <button style="min-width: 38px;" class="btn btn-light rounded rounded-pill m-2">
        <span class="fa fa-whatsapp"></span>
      </button>
    </div>
    <small class="small">
      © 2023 AlfaPrivativo
    </small>
  </div>
</div>
</div></div>`

$('.menu')[0].innerHTML = `<div class="container h-100 d-flex flex-column justify-content-between">
<a onclick="action('closeMenu')" class="p-3 btn d-flex justify-content-end">
  <img src="${imagesPath}/icons/close_white.svg" alt="">
</a>
<ul id="menuList" class="accordion bg-transparent animate__animated animate__fast nav d-flex flex-column text-center animate__fadeInUp" style="font-size:xx-large;">
  <li class="home nav-item">
    <a class="nav-link" href="../home/homepage.html"><h2 class="btn-link-dark">HOME</h2></a>
  </li>
  <li class="storia nav-item">
    <a class="nav-link" href="../storia/storia.html"><h2 class="btn-link-primary">LA STORIA</h2></a>
  </li>
  <li class="storia nav-item">
    <a class="nav-link" href="../vigneti/vigneti.html"><h2 class="btn-link-primary">VIGNETI</h2></a>
  </li>
  <li class="collapse-vini nav-item" data-bs-toggle="collapse" data-bs-target="#collapseVini" >
    <a class="nav-link" href="#"><h2 class="btn-link-primary">VINI</h2></a>
  </li>
    <div id="collapseVini" class="accordion-collapse collapse" data-bs-parent="#menuList">   
      <ul class="nav d-flex flex-column text-center">
        <li class="vini nav-item"><a class="nav-link" href="../vini/tascaioso.html">Tascaioso</a></li>
        <li class="vini nav-item"><a class="nav-link" href="../vini/orior.html">Orior</a></li>
      </ul>
    </div>
  <li class="contatti nav-item">
    <a class="nav-link" href="#footer"><h2 class="btn-link-primary" onclick="action('closeMenu')" >CONTATTI</h2></a>
  </li>
  <li class="en nav-item">
    <a class="nav-link" href="#"><h2 class="btn-link-primary">EN</h2></a>
  </li>
</ul> 
<div class="p-3"></div>
</div>`



window.scrollTo(0,0);

const menu = document.getElementsByClassName('menu')[0];
const menuList = document.getElementById('menuList');
const loadingGlass = document.getElementById('loadingGlass');
const video = document.getElementById('video');
const main = document.getElementById('main');

if (!localStorage.getItem('alfaprivativo-cookies-accept') && window.location.href.indexOf('homepage') == -1) {
  window.location.href = "../home/homepage.html"
} else {
  loadingGlass.classList.remove('d-none')
}

setTimeout(t=>{
  loadingGlass.classList.add('animate__animated')
  loadingGlass.classList.add('animate__fadeOut')
},1500)

setTimeout(t=>{   
      action('activateScroll')
      loadingGlass.classList.add('d-none');
      showCookiesModal();
      main.classList.add('animate__animated')
},2000)

$('#parallax1').parallax({imageSrc: `${imagesPath}/vitigno.jpeg`});
$('#parallax2').parallax({imageSrc: `${imagesPath}/vigna.jpeg`});
$('#parallax3').parallax({imageSrc: `${imagesPath}/vitigno.jpeg`});
$('#parallax4').parallax({imageSrc: `${imagesPath}/vitigno2.jpeg`});
$('#parallax5').parallax({imageSrc: `${imagesPath}/vitigno2.jpeg`});
const menuItems = [
  'home','storia','collapse-rosso','rosso',
  'collapse-bianco','bianco',
  'collapse-vini','vini','contatti','en'
]

$('.nav-item').on('click',e=>{
  let stringToSwitch = e.target.innerText.replace(" ","_").toUpperCase();
  
  removeClasses('disabled',menuItems,[])
  switch (stringToSwitch) {
    case 'VINI':
    case 'VINI_':
      applyClasses('disabled',menuItems,
      ['collapse-vini','vini'])
      break;
    default:
      removeClasses('disabled',menuItems,[])
  }
  
})

function showCookiesModal() {
  $('button[data-bs-toggle="modal"]').click()
}

function acceptCookies() {
  localStorage.setItem('alfaprivativo-cookies-accept','true')
}

function denyCookies() {
  localStorage.removeItem('alfaprivativo-cookies-accept')
}

function applyClasses(kl, elements, exceptions) {
  for (let e of elements) {  
    for (let j of document.getElementsByClassName(e)) {
      if (exceptions.some(r => 
        j.classList.value.split(" ")
        .indexOf(r) >= 0)) { } else {
          j.classList.add(kl)
      }
    }
  }
}

function removeClasses(kl, elements, exceptions) {
  for (let e of elements) {
    for (let j of document.getElementsByClassName(e)) {
      if (exceptions.some(r => 
        j.classList.value.split(" ")
        .indexOf(r) >= 0)) { } else {
          j.classList.remove(kl)
      }
    }
  }
}
function action(action) {
  switch (action) {
    case 'openVideo': 
      video.classList.remove('d-none')
      video.classList.remove('animate__animated')
      break;
    case 'closeVideo': 
      video.classList.add('d-none')
      video.classList.add('animate__animated')
      break;
    case 'closeMenu': 
      menu.classList.add('d-none')
      menuList.classList.remove('animate__animated')
      break;
    case 'openMenu':
      menu.classList.remove('d-none')
      menuList.classList.add('animate__animated')
      break;
    case 'activateScroll':
      document.body.setAttribute('style','overflow-y:auto')
      break;
  }
}
    function reveal() {
      var allReveals = [
        document.querySelectorAll(".reveal"),
        document.querySelectorAll(".revealSlideIn")
      ];
      
      for (let reveals of allReveals) {
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        } 
      }

    }