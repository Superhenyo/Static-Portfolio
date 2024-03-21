// MorphingBackground.jsx
import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

function MorphingBackground() {
    const interBubbleRef = useRef(null);

    useEffect(() => {
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        }

        const handleMouseMove = (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        move(); // Start the animation

        return () => {
            window.removeEventListener('mousemove', handleMouseMove); // Cleanup event listener
        };
    }, []);

    return (
        <>
            <Container className='img-fluid m-0 p-0'>
                <div className="text-container d-flex flex-column">
                   <h1>Good Day Humans</h1>
                   <h6>(Portfolio incomplete)</h6>
                </div>
                    
                <div className="gradient-bg">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                    <div className="gradients-container">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="g3"></div>
                        <div className="g4"></div>
                        <div className="g5"></div>
                        <div className="interactive" ref={interBubbleRef}></div>
                    </div>
                </div>

            </Container>

        </>
    );
}

export default MorphingBackground;
