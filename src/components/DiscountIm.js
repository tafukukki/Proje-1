
import React, { useState, useEffect, useRef } from 'react';
import { isInViewport } from './handleScroll'; 

function DiscountIm() {
    const [zoomed, setZoomed] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (isInViewport(imageRef.current)) {
                setZoomed(true);
            } else {
                setZoomed(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        
       
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <img 
        
            ref={imageRef}
            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png" 
            style={{
                marginTop: `50px`,
                transform: zoomed ? 'scale(1)' : 'scale(0.8)',
                transition: 'transform 0.5s ease-in-out',
                
            }}
        />
    );
}

export default DiscountIm;