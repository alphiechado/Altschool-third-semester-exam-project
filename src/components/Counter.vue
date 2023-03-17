<template>
  <div class="Counter">
    <h1 class="animate__animated animate__bounce">{{ count }}</h1>
    <div class="input-container">
      <input type="number" v-model="newValue" required>
    </div>
    <div class="buttons-container">
    <button class="increment" @click="increment">+</button>
    <button class="decrement" @click="decrement">-</button>
    </div> 
    <div class="input-buttons-container">
      <button class="reset" @click="reset">Reset</button>
      <button class="setValue" @click="setValue(newValue)">Set Value</button>
    </div>     
  </div>
</template>

<script>
import useCounter from '@/components/counter'
import { ref, inject } from 'vue'

export default {
  name: 'CounterComponent',
  
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter()

    const newValue = ref(50)

  
    const store = inject('store')

    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      newValue,
      store
    }
  },
  beforeRouteEnter(to, from, next) {
    if (to.path === '/counter') {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.Counter{
  height: 80vh;
}
.Counter h1{
  text-align: center;
  font-size: 250px;
  font-family: 'Raleway', sans-serif;
  margin-top: 10%;
}
.Counter button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: #232323;
  color: #fff;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
}

.Counter button.increment {
  right: 20px;
}
.Counter button.decrement {
  left: 20px;
}
.Counter button:hover {
  background-color: #fcae1e;
}
.Counter input {
  margin: 20px auto;
  display: block;
  width: 200px;
  height: 40px;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}
.Counter .input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Counter .input-buttons-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.Counter .reset {
  position: relative;
  width: 100px;
  height: 40px;
  background-color: #232323;
  color: #fff;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}
.Counter .setValue {
  margin-left: 20px;
  position: relative;
  width: 100px;
  height: 40px;
  background-color: #232323;
  color: #fff;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
}
@media screen and (max-width: 768px) {
  .Counter h1 {
    font-size: 150px;
    margin-top: 30%;
  }
  .Counter input {
    width: 150px;
  }
  .Counter button {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  .Counter .reset,
  .Counter .setValue {
    width: 80px;
    height: 30px;
    font-size: 12px;
  }
}
</style>
