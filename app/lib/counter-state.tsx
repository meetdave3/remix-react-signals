import { signal } from "@preact/signals-react";

export function countState() {
  const count = signal(0);

  const increment = () => count.value++;
  const decrement = () => count.value--;

  return { count, increment, decrement }
}