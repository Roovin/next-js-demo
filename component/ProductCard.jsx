import { useState } from 'react';
import productJson from '../json/product.json'
import filterCss from '../styles/filter.module.scss'
import Image from 'next/image';

export default function ProductCard (props) {
    const [pgValue, setPage] = useState(1);
    
    const fndValue = props.Cvalue;
    const rows = 6;
    let pageButton = [];


    const dataLength = fndValue.length;
    const trim = [pgValue - 1] * rows;
    const endCard = trim + rows;
    const sliData = fndValue.slice(trim, endCard)
    let pages = Math.ceil(dataLength / rows)

    for (var i = 1; i <= pages; i++) {
        pageButton.push(i);
    }
    function pagination (x) {
        setPage(x);
    }

    return (
        <section className={filterCss.filterCard}>
            <div className="container">
                <div className={filterCss.cardWrap}>
                    {sliData.map((data, index) => (
                        <div key={index} className={filterCss.card}>
                            <div className={`${filterCss.imgWrap} p-0`}>
                                <Image src={data.image} alt="" width={300} height={200} className='object-cover' />
                            </div>
                            <div className={filterCss.contentWrap}>
                                
                                <h4>{data.title}</h4>
                                <p>{data.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={filterCss.pagination}>
                    <ul>
                        {pageButton.map((data, index) => (
                            <li key={index} onClick = {() => pagination(data)}>
                                {data}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>  
    )
}