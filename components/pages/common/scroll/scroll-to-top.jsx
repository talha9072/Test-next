"use client"
import React, { useEffect } from "react";
import useScrollToTop from "./use-scroll-to-top";

const ScrollToTop = () => {
    const { stick, onClickHandler } = useScrollToTop();
    useEffect(() => {
        const scrollPath = document.querySelector(".scroll-up path");
        const pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = "none";
        scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = "stroke-dashoffset 10ms linear";
        const updateScroll = () => {
            const scroll = window.scrollY;
            const docHeight = document.body.offsetHeight;
            const winHeight = window.innerHeight;
            const height = docHeight - winHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            scrollPath.style.strokeDashoffset = progress;
        };
        updateScroll();
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return (
        <div
  className={`scroll-up d-flex align-items-center justify-content-center ${stick ? "active-scroll" : ""}`}
  onClick={onClickHandler}
  role="button"
  aria-label="Scroll to top"
>
  <i className="bi bi-arrow-up-circle-fill"></i>
</div>
    );
};

export default ScrollToTop;