import { useCallback, useState } from "react";

export function useToggle(defaultValue?: boolean): [boolean, () => void] {
  // defaultValue if let undefined will turn true because of !!
  const [value, setValue] = useState<boolean>(!!defaultValue);

  // resets state to default between different algorithms
  const toggle = () => {
    setValue(!value);
  };

  /* keeps state between different algorithms
  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);
 */

  console.log(value);
  return [value, toggle];
}
