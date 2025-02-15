import Link from 'next/link'
import Head from "next/head"
import Router from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
// import { NextResponse, NextRequest } from 'next/server'


import headerCss from '../../styles/global/Header.module.scss'
export default function Header () {

    const [scrollY, setScrollY] = useState(0);
    const [hamChange, hamClassActive] = useState(1);
    var [scollPostion, oldPosition] = useState(0);
    // const scollPostion = [];
    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };

        handleScroll();
    
        window.addEventListener("scroll", handleScroll);
        // return () => {
        //   window.removeEventListener("scroll", handleScroll);
        // };
        // console.log(scrollY);
      }, []);
    //   console.log(scrollY);
      //Class add in body
      useEffect(() => {
        // console.log(scollPostion);
        // console.log(scrollY);
        // if (scrollY == 0) {
        //     console.log('test1');
        //     document.body.classList.add('showNav');
        //     document.body.classList.remove('hideNav');
        //   } else if(scrollY[scrollY-1] > scollPostion) {
        //     document.body.classList.remove('hideNav');
        //   } else {
        //     // console.log('test4');
        //     // document.body.classList.add('hideNav');
        //   }
          
        //   oldPosition(scrollY);
        // scollPostion = scrollY;
        //   else if(scollPostion - 1){
        //     console.log('test');
        //     document.body.classList.add('hideNav');
        //   }
        
      })
      

     

      function hamBurger (x) {
        if(hamChange == x) {
            hamClassActive(1);
        } else {
            hamClassActive(0);
        }

      }

    return (
        <>
       
            <header className={ scrollY < 1 ? headerCss.header  : `${headerCss.header} ${headerCss.hideNav}` } >
                <div className="container">
                    <div className={headerCss.mainMenu}>
                        <div className={headerCss.logo}>
                            <Link href="/" className='emptyLink'>.</Link>
                            <Image src="/header/logo.png" alt="Logo" width={150} height={52} />
                        </div>
                        <div className= {hamChange === 0 ? `${headerCss.mainNav} ${headerCss.openNav}` : headerCss.mainNav}>
                            <ul>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/liveBlog">LiveBlog</Link>
                                </li>
                                <li>
                                    <Link href="/filter">Filter</Link>
                                </li>
                                <li>
                                    <Link href="/technologies">Technologies</Link>
                                </li>
                                <li>
                                    <Link href="/checkFilters" >Check Filter</Link>
                                </li>
                                <li>
                                    <Link href="/clearFilter">Clear Filter</Link>
                                </li>
                                <li>
                                    <Link href="/images">Bulk Images</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={ hamChange === 0 ? `${headerCss.hamburger} ${headerCss.active}` : headerCss.hamburger } onClick={() => hamBurger(0)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}