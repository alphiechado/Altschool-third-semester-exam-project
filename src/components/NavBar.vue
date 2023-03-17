<template>
  <div class="App">
    <nav class="navigation">
      <h1><router-link to="/">CounterPoint</router-link></h1>
      <ul class="navLinks">
        <li><router-link to="/counter">Counter</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </div>
    
</template>
  
  <script>
  export default {
    name: 'NavBar',
  };
  </script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap");
* {
  margin: 0;
  padding: 0;
}
.navigation{
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #232323;
  color: #fff;
}
nav h1{
  letter-spacing: 3px;
  font-size: 20px;
}
nav h1 a{
  text-decoration: none;
  color: #fff;
}
.navLinks{
  display: flex;
  justify-content: space-around;
  width: 20%;
  font-size: 12px;
}
.navLinks li{
  list-style: none;
  margin: 0;
}
.navLinks li a{
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
}
.navLinks li a:hover{
  color: #fcae1e;
  transition: .3s;
}
a:hover{
  color: #fcae1e;
  transition: .3s;
}
@media screen and (max-width: 768px) {
  .navLinks {
    width: 40%;
    font-size: 10px;
  }
}

@media screen and (max-width: 480px) {
  nav h1 {
    font-size: 16px;
  }
}
</style>
