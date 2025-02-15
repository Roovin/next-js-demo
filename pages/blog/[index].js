// import React from "react";
import { useRouter } from 'next/router'
import slugCss from "../../styles/slug.module.scss"
import jsonData from '../../json/blogData.json'
// import { FocusEvent } from "react";
// import { use } from "react-hooks/rules-of-hooks"


export default function Post () {
    const  router = useRouter();
    const slug = router.query.index;
    return (
        <>
           <div className={slugCss.slug}>
                <div className="container">
                    {jsonData.map((data) => (
                        slug == data.id ? 
                        <div key={data.id}>
                            <h1>{data.title}</h1>
                            <p>{data.content}</p>
                        </div>  : ""
                    ))}
                </div>
           </div>
        
        </>
            
            
       
    )
}