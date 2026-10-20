import { Span } from 'next/dist/trace';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Markqueue = async() => {

    const ref = await fetch('http://localhost:3000/api/hot-news')
    const data = await ref.json()
    const hotNews = data.data
    return (
        <div className='bg-red-700'>
            <div className='flex max-w-7xl mx-auto'>
                <div className='bg-red-700 p-1'>
                    <h2 className='text-white pl-10 pr-10'>সর্বশেষ</h2>
                </div>
                <MarqueeText direction = 'right' duration = {10} className='bg-red-400 p-1'> 
                    {
                        hotNews.map(headline => <span key={headline.id}>
                            <span> {headline.title}</span> <span className='mx-3'>•</span>
                        </span>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Markqueue;