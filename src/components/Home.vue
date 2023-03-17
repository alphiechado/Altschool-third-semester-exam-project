<template>
    <div class="Home">
      <h1 class="animate__animated animate__headShake">Count with confidence</h1>
      <p class="animate__animated animate__fadeInUp">the ultimate counter app for all your tallying needs! <br>
         counting has never been so effortless.
      </p>
      
    </div>
  </template>
  
  <script>
  import 'animate.css';
  export default {
    name: 'App',
    created() {
    setTimeout(() => {
      this.$router.push('/counter');
    }, 10000); 
  },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500&display=swap');
* {
  margin: 0;
  padding: 0;
}
.Home{
  height: 80vh;
}
.Home h1{
  text-align: center;
  font-size: 80px;
  font-family: 'Raleway', sans-serif;
  margin-top: 15%;
}
.Home p{
  text-align: center;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  margin-top: 5%;
}
@media screen and (max-width: 768px) {
  .Home h1 {
    font-size: 80px;
    margin-top: 30%;
  }
  .Home p {
    font-size: 18px;
  }
  .Home{
  height: 69vh;
}
}

@media screen and (max-width: 480px) {
  .Home h1 {
    font-size: 50px;
    margin-top: 50%;
  }
  .Home p {
    font-size: 14px;
  }
  .Home{
  height: 69vh;
}
}

@media screen and (max-width: 360px) {
  .Home h1 {
    font-size: 30px;
  }
  .Home p {
    font-size: 12px;
  }
}

  </style>
  