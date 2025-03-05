'use client'
import React, {useEffect, useState} from 'react';

function Welcome() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 2000); // Hide after 3s
        return () => clearTimeout(timer);
    }, []);
    if(!show) return null;
    return (
        <img src={'/images/welcome.gif'}
             className={'z-[99999999] fixed top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-full lg:w-[50vw] h-auto lg:h-[70vh]'}/>
    );
}

export default Welcome;