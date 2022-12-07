import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export const useClickOutside = handler => {
  document.body.style.overflow = '';
    const ref = useRef();

    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        document.addEventListener("click", listener);

        return () => document.removeEventListener("click", listener);
    }, [ref, handler]);

    return [ref];
};