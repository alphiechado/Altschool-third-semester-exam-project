<template>
    <div class="NotFound">
      <h1 class="animate__animated animate__rubberBand">404</h1>
      <h3>Page Not Found</h3>
      <p>The page you requested could not be found.</p>
    </div>
  </template>
  
  <script>
  import 'animate.css';
  export default {
    name: 'NotFound',
  }
  </script>
  
<style>
* {
  margin: 0;
  padding: 0;
}
.NotFound{
  height: 80vh;
}
.NotFound h1{
  text-align: center;
  font-size: 200px;
  font-family: 'Raleway', sans-serif;
  margin-top: 10%;
}
.NotFound h3{
  text-align: center;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
}
.NotFound p{
  text-align: center;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  margin-top: 5%;
}
@media screen and (max-width: 768px) {
  .NotFound h1 {
    font-size: 150px;
    margin-top: 40%;
  }
  .NotFound h3,
  .NotFound p {
    font-size: 16px;
  }
}
</style>
  