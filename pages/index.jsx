import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
// import React from 'react'
import styles from '../styles/Home.module.css'
import slugCss from '../styles/slug.module.scss'
import bannerCss from '../styles/banner.module.scss'
import accdCss from '../styles/accourdian.module.scss'
import acJsonData from '../json/jsonAcc.json'
import { useState } from 'react'
import tabJson from '../json/tabs.json'
import tabCss from '../styles/tabCss.module.scss'
import BlogComponent from "./blog"

const inter = Inter({ subsets: ['latin'] })

export default function Home(data) {
  const [display, setDisplay] = useState(0);
  const [tab, tabValue] = useState(0);
  //This is accourdian function
  function toggle(x) {
  // const toggle = (x) => {
    if (display == x ) {
      setDisplay(null);
    } 
    setDisplay(x);
  }
  //This is Tabs
  const tabClick = (value) => {
    if (tab == value) {
      tabValue(null);
    }
    tabValue(value);
  }

  return (
    <>
      <main className={styles.main}>
        <section className={bannerCss.hero_banner}>
             <div className={bannerCss.bgImg}>
                <img src="../banner/coding-banner.jpeg" alt="Banner"/>
            </div>
            <div className="container">
                <div className={bannerCss.content}>
                    <h1>All data is fetching from API</h1>
                    {/* <p>TRS-RenTelco’s catalogue contains a wide range of 
                        electronic test equipment for any hobbyist engineer, 
                        researcher, or a freelance technician. Keep up with the 
                        rapidly evolving electronics industry by renting or 
                        purchasing the most up to date electronic test equipment 
                        for your projects. At TRS-RenTelco you also have the 
                        freedom to decide if you need to rent, lease, or purchase 
                        test equipment. Find your electronic testing device, and 
                        request a quote today!</p> */}
                </div>
            </div>
        </section>
        <BlogComponent />
         <section className={accdCss.ac_wrap}>
            <div className="container">
              <div className={accdCss.itemWrap}>
                {acJsonData.map((data, index) => (
                    <div key={index} className={display === index ? `${accdCss.item} ${accdCss.active}` : accdCss.item }>
                      <div className={accdCss.titleWrap} onClick={() => toggle(index)}>
                        <h2>{data.title}</h2>
                      </div>
                      <div className={accdCss.contentWrap} >
                        <p>{data.content}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        </section>
        <section className={tabCss.tabs}>
          <div className="container">
            <div className={tabCss.rowContent}>
              <div className={tabCss.tabsWrapper}>
                <ul>
                  {tabJson.map((dataLi, tabIndex) => (
                    <li key={tabIndex} onClick={()=> tabClick(tabIndex)} className={tab === tabIndex ? `${tabCss.active}` : "" }>
                      {dataLi.title}
                    </li>
                  ))}
                </ul>
              </div>
              {tabJson.map((tabCon, tabIndex) => (
                <div key={tabIndex} className={tab === tabIndex ? `${tabCss.tabsWrap} ${tabCss.tabActive}` : tabCss.tabsWrap }>
                  <h3>{tabCon.title}</h3>
                  <p>{tabCon.content}</p>
                </div> 
              ))}
            </div>
          </div>
        </section>
        
      </main>
    </>
  )
}
