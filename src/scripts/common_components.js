$('#navbar')[0].innerHTML = `<div class="container"><div class="row">
<div class="col-12 d-flex justify-content-between">
  <div class="px-3 py-1">
    <img height="40px" src="./src/app/images/logo_test.png" alt="">
  </div>  

  <ul class="d-none d-md-flex align-items-center nav">
    <li class="nav-item">
      <a class="nav-link" href="./index.html">HOME</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./la_storia.html">LA STORIA</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">VIGNETI</a>
    </li>
    <li id="vitigniDropdown" class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        VITIGNI
      </a>
      <ul class="dropdown-menu animate__fadeInDown animate__animated animate__faster" aria-labelledby="navbarDropdown">
        <li style="margin-top:-5px"><a class="disabled dropdown-item" href="#">- Rosso -</a></li>
        <li style="margin-top:-5px"><a class="dropdown-item" href="#">Sangiovese</a></li>
        <li style="margin-top:-5px"><a class="dropdown-item" href="#">Merlot</a></li>
        <li style="margin-top:-5px"><a class="dropdown-item" href="#">Ciliegiolo</a></li>
        <li><a class="dropdown-item disabled " href="#">- Bianco -</a></li>
        <li style="margin-top:-5px"><a class="dropdown-item" href="#">San colombano</a></li>
        <li style="margin-top:-5px"><a class="dropdown-item" href="#">Malvasia bianca</a></li>
        <li style="margin-top:-5px"><a class="dropdown-item" href="#">Trebbiano toscano</a></li>
        <li style="margin-top:-5px"><a class="dropdown-item" href="#">Alionza</a></li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">CONTATTI</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">EN</a>
    </li>
  </ul> 
    <div class=" d-flex d-md-none flex-column justify-content-center">
      <a onclick="action('openMenu')" class="btn d-flex flex-column justify-content-center">
        <img src="./src/app/images/icons/hamburger.svg" alt="">
      </a>  
    </div>
  </div>
</div></div>
`

$('footer')[0].innerHTML = `<div class="container"><div class="row">
<div class="col-12">
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
      <button style="min-width: 38px;" class="btn btn-light rounded rounded-pill m-2">
        <span class="fa fa-facebook"></span>
      </button>
      <button style="min-width: 38px;" class="btn btn-light rounded rounded-pill m-2">
        <span class="fa fa-instagram"></span>
      </button>
      <button style="min-width: 38px;" class="btn btn-light rounded rounded-pill m-2">
        <span class="fa fa-whatsapp"></span>
      </button>
    </div>
    <small class="small">
      © 2023 SantaMariaLaNave
    </small>
  </div>
</div>
</div></div>`