// import React from "react"
import productJson from '../json/product.json'
import ProductCards from '../component/ProductCard'
import filterCss from '../styles/filter.module.scss'
import { use, useState } from "react"


export default function Product () {

    const [setDown, togleDown] = useState(1);
    const [liData, inputValue] = useState("All");
    const [fndValue, filterData] = useState(productJson);
    const [predata, multLiData] = useState([]);
    const [liAcv, LiClicked] = useState();
    const [inCheck, inUncheck] = useState("unchecked");
    const fltData = [];
    const [inputChecked, inputUncheck] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const className = "";
    let [listLi, listLiData] = useState([]);
   
    // let multLiData = [];
    // const [a, b] = useState(c);
    listLi = productJson.filter((item, index, self) => (
        index === self.findIndex((t) => (
            t.title == item.title
        ))
    ));

    console.log(listLi);
    function dropDown (x) {
        if(setDown == x) {
            togleDown(1);
        } else {
            togleDown(0); 
        }
    }
    function liClick(liValue, x, y) {
        inputValue(liValue);
        console.log(y.target);
        const { name, checked } = y.target;
        console.log(checked);
        console.log(name);
        let getValue = inputChecked.map(user => user.title === name ? {...user, isChecked : checked} : user ); 
        listLiData(getValue);
        console.log(getValue);

        console.log(y.target.checked);

        // if(y.target.checked === true) {
        //     if(!inputChecked.includes(x)) {
        //         inputChecked.push(x);
        //     }
            
        // }

        // console.log(inputChecked);
        // if(y.target.checked === true) {
        //     // console.log("test");
        //     inUncheck("");

        // } else {
        //     console.log("unchecked");
        // }
        if (liValue === "All") {
            for (var i = 0; i < productJson.length; i++) {
                fltData.push(productJson[i]);
            }
            filterData(fltData);
        } else {
            if(predata.length === 0) {
                predata.push(liValue);
            } else {
                if(predata.includes(liValue)) {
                    var indexOfPredata = predata.indexOf(liValue)
                    predata.splice(indexOfPredata, 1);
                } else {
                    predata.push(liValue);
                }
            }
            // console.log(predata.length);
            if(predata.length === 0) {
                filterData(productJson);
            } else {
                //Multiple filter code
                for (var i = 0; i < predata.length; i++) {
                    for (var j = 0; j < productJson.length; j++) {
                        if(productJson[j].title === predata[i]) {
                            fltData.push(productJson[j]);
                        }
                    }
                }
                filterData(fltData);
            }
        }

    }
    function clodeButton (g, ind) {
       
        for (var k = 0; k < predata.length; k++) {
            // console.log(predata[k]);
            if(g === predata[k]) {
                // console.log(predata[k]);
                // predata[k].
                var indexOfPredata = predata.indexOf(g)
                predata.splice(indexOfPredata, 1);
                if(predata.length === 0) {
                    filterData(productJson);
                } else {
                    //Multiple filter code
                    for (var i = 0; i < predata.length; i++) {
                        for (var j = 0; j < productJson.length; j++) {
                            if(productJson[j].title === predata[i]) {
                                fltData.push(productJson[j]);
                            }
                        }
                    }
                    filterData(fltData);
                }
            } 
        }
    }
    
    return (
        <>
            <section className={`${filterCss.fltList} p-0`}>
                <div className="container">
                    <div className={filterCss.fltWrapper}>
                        <div className={filterCss.fltWrap} >
                            <input type="input" onClick={()=> dropDown(0)} placeholder="Select Any Food "  readOnly/>
                        </div>
                        <div className={setDown === 0 ? `${filterCss.ulList} ${filterCss.active}` : filterCss.ulList }>
                            <ul>
                                {/* <li onClick={() => liClick("All")}>
                                    <input type="checkbox" id="All" />
                                    <label for="All">All</label>
                                </li> */}
                                {listLi.map((dataLi, dataIndex) => (
                                    <li key={dataIndex}  className={liAcv === dataIndex ?  filterCss.active : '' }> 
                                        <input type="checkbox" name={dataLi.title} id={dataLi.title}  onChange={(e) => liClick(dataLi.title, dataIndex, e, )} checked={dataLi?.isChecked || false }/>
                                        <label for={dataLi.title}>{dataLi.title}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={filterCss.selectLi}>
                        <ul>
                            {predata.map((fltLi, indexData) => (
                                <li key={indexData}>
                                    <p>{fltLi}</p>
                                    <span className={filterCss.closeButton} onClick={() => clodeButton(fltLi, indexData) }>.</span>
                                </li>
                            ))}
                          
                        </ul>
                    </div>
                </div>
            </section>
            <ProductCards Cvalue = {fndValue}/>
            
        </>
    )
}