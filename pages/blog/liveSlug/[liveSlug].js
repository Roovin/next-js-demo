import { useRouter } from "next/router"
import liveSluge from '../../../styles/liveSlug.module.scss';

export default function LiveSlug (data) {
    const router = useRouter();
    const {liveSlug} = router.query;
    const jsonData = data.data.articles;

    return (
        <>
            <section className={liveSluge.heroBanner}>
                <div className={liveSluge.bgImg}>
                    <img src="../../banner/cardBanner.png" alt=""/>
                </div>
            </section>
            <section className={liveSluge.cardDetail}>
                <div className="container">
                    {jsonData.map((data) => (
                        liveSlug == data.title ? 
                        <div key={data.id} >
                            <h1>{data.title}</h1> 
                            <p>{data.description}</p>
                        </div>  : ""
                    ))}
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