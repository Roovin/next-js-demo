import Image from "next/image";
import allImg from "../styles/allimages.module.scss";
// import imgs from "../public/multiImage/*.jpg";
// import imgJson from "../json/img.json";
// import useSWR from 'swr';
import { NextRequest } from "next/server";
import getConfig from "next/config";



export default function allImage (images) {
    // console.log(NextRequest);
    console.log(getConfig);
    var mainImg = images.images;
    return (
        <>
            <section className={allImg.allImages}>
                <div class="container">
                    <div className={allImg.cardImagWrap}>
                        {mainImg.map((ele, id) => (
                            <div key={id} className={allImg.imgWrap} > 
                                <img src={ele} alt="" />
                            </div>
                         ))} 
                    </div>
                </div>
                
            </section>
        </>
    )

}
export async function getServerSideProps(content) {

    const res = await fetch("http:/localhost:3000/api/img");

    const images = await res.json();
    return {
        props: {images}
    } 
}

