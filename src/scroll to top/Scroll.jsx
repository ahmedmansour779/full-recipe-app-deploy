
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Scroll() {
    const [visible, setVisible] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 50) {
                return setVisible(true)
            }
            return setVisible(false)
        };
        window.addEventListener('scroll', toggleVisible);
    }, [])

    return (
        <>
            <button
                className="to-top"
                id="myBtn"
                title="Go to top"
                style={{ display: visible ? 'flex' : 'none' }}
                onClick={scrollToTop}>
                <FaArrowUp fontSize={"1.5rem"} />
            </button>
        </>
    )
}
