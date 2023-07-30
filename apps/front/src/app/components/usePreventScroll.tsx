import { useCallback, useEffect, useState } from 'react';

export const usePreventScroll = <T extends Element>() => {
  const [element, setElement] = useState<T | null>(null);

  const ref = useCallback((element: T) => {
    if (!element) {
      return;
    }

    setElement(element);
  }, []);

  // prevent the native browser from scrolling when zooming on the map and the mouse cursor is on a `InfoWindow`.
  // React uses passive event handlers by default which is why we need to attach the event listener
  // manually with the `passive` attribute set to `false` by default for `event.preventDefault` to work
  const onWheel = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    if (!element) {
      return;
    }

    element.addEventListener('wheel', onWheel);
    return () => {
      element.removeEventListener('wheel', onWheel);
    };
  }, [element, onWheel]);

  return ref;
};
