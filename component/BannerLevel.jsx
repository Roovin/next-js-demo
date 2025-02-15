import React from 'react'
import Image from 'next/image'

export default function BannerLavel() {
  return (
    <section className="BannerLavel min-h-[500px] bg-black">
        <video autoPlay muted loop playsInline className={`object-cover absolute top-[0] left-[0] bottom-[0] w-[100%] h-[100%]`}>
            <source src={'/banner/Veritone_Homepage_Animation.mp4'} type="video/mp4" />
        </video>
    </section>
  )
}
