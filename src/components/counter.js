import { computed } from 'vue';
import { useStore } from 'vuex';

export default function useCounter() {
  const store = useStore();

  const count = computed(() => store.getters.getCount);

  const increment = () => {
    store.dispatch('incrementCount', 1);
  };

  const decrement = () => {
    store.dispatch('decrementCount', -1);
  };

  const reset = () => {
    store.dispatch('reset');
  };

  const setValue = (value) => {
    store.dispatch('setValue', value);
  };
  

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}
