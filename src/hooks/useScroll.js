import {useEffect, useRef} from "react";

// parentRef - list with scroll
// childrenRef - last element ander list
export const useScroll = (parentRef, childrenRef, callback) => {
    // observer - track element appearance in browser visibility area
    const observer = useRef();

    useEffect(() => {
        if (!parentRef.current || !childrenRef.current) return

        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }

        observer.current = new IntersectionObserver(([target]) => {
            if (target?.isIntersecting) callback();
        }, options)

        observer.current.observe(childrenRef.current);

        return (() => {
            observer.current.unobserve(childrenRef.current);
        })
    }, [callback])

}