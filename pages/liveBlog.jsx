import Image from 'next/image'
import Link from 'next/link'

import { Darker_Grotesque, Inter } from '@next/font/google'
// import jsonData from '../json/blogData.json'
import jsonCard from '../styles/jsonCard.module.scss'

// import { useEffect } from 'react'
// import { useState } from 'react'

export default function liveData(data) {
    const jsonData = data.data.articles;
    return (
        <>
            <section className={jsonCard.cards}>
                <div className='container'>
                    <div className={jsonCard.wrapper}>
                        {jsonData.map((data, index) => (
                            <div key={index} className={`${jsonCard.card} ${jsonCard.warmBlue}`} >
                                <Link href={"blog/liveBlug/" + data.title} className="emptyLink">.</Link>
                                <div className={jsonCard.titleWrap}>
                                    <h3>{data.title}</h3>
                                    <p>{data.description.substr(0, 40)}...</p>
                                </div>
                                <div className={jsonCard.cardLink}>
                                <Link href={"blogpost/" + data.title}>Card Link</Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
            
    )
}


export async function getServerSideProps() {
        const apiData = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=114108a5afd24b699d8b743cf0578f6f");
        const data = await apiData.json();
        return {props: {data}}

    
}