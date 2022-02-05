import { useState, useEffect } from "react";

export const useOnLoadImages = (ref) => {
  const [status, setStatus] = useState(false);

  let imgRef = ref?.current?.complete;
  useEffect(() => {
    if (imgRef) {
      setStatus(true);
    }
  }, [imgRef]);

  return status;
};
