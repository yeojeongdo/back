import { counter } from "stores/counterStore";
import stores from "stores/stores";

const useStore = () => {
  return { stores };
};

export default useStore;
