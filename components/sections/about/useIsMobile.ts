import { useEffect, useLayoutEffect, useState } from "react";
import debounce from 'lodash/debounce';
import { update } from "lodash";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const updateSize = (): void => {
    setIsMobile(window.innerWidth < 768);
  };

  useLayoutEffect(() => {

    window.addEventListener('resize', debounce(updateSize, 250));
    // updateSize();
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    updateSize();
  }, []);
  return isMobile;
};

export default useIsMobile;
