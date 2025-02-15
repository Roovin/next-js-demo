import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Inter } from '@next/font/google'
import jsonData from '../json/blogData.json'
import jsonCard from '../styles/jsonCard.module.scss'
// import { useEffect } from 'react'

export default function blogData () {
    let c = ""
    return (
        <>
            <section className={jsonCard.cards}>
                <div className='container'>
                    <div className={jsonCard.wrapper}>
                        {jsonData.map((data, index) => (
                            <div key={index} className={`${jsonCard.card} ${jsonCard[data.bgClass]}`} >
                                <Link href={"blog/" + data.id} className="emptyLink">.</Link>
                                <div className={jsonCard.titleWrap}>
                                    <h3>{data.title}</h3>
                                    <p>{data.content}</p>
                                </div>
                                <div className={jsonCard.cardLink}>
                                <Link href={"blogpost/" + data.title}><span>Card Link</span></Link>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section> 
        </>
            
    )
}