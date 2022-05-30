import { ref, Ref, computed, onBeforeMount,onMounted } from "vue"

type CountResultProps = {
  count: Ref<number>;
  multiple: Ref<number>;
  increase: (delta?: number) => void;
  decrease: (delta?: number) => void;
};
export default function useCount(initValue = 1): CountResultProps {
  const count = ref(initValue);

  const increase = (delta?: number): void => {
    typeof delta !== "undefined" ? count.value += delta : count.value += 1
  };

  const multiple = computed(() => count.value * 2);
  
  const decrease = (delta?: number): void => {
    typeof delta !== "undefined" ? count.value -= delta : count.value -= 1
  };
  onMounted(() => {
    console.log("------onMounted-----"); 
  });
  return {
    count,
    multiple,
    increase,
    decrease,
  };
}
