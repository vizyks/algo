import { useCallback, useState } from "react";

export function useToggle(defaultValue?: boolean): [boolean, () => void] {
  // defaultValue if let undefined will turn true because of !!
  const [value, setValue] = useState<boolean>(!!defaultValue);

  const toggle = () => {
    setValue((x) => !x);
  };

  /*
  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);
 */

  return [value, toggle];
}
