import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import data from '../public/checkFilter/checkFilter.json'

export default function CheckFilter() {

    const [open, setOpen] = useState(0);
    const [isTopic, setIsTopic] = useState([])
    const [isSolutions, setIsSolutions] = useState([])
    const [isContent, setIsContent] = useState([])

    function byTopic(val) {
        console.log(val);
    }
    function bySolution(val) {
        console.log(val);
    }
    function byContent(val) {
        console.log(val);
    }
    useEffect(() => {
        console.log(data);
        byTopic(data)
        bySolution(data)
        byContent(data)
    }, [])

    // const listHandler = (val) => {

    // }


    return (
        <section className="checkFilter py-[200px]">
            <div className="container">
                <div className="fltWrapper">
                    <div className="fltWrap">
                        <h3>Filter</h3>
                        <div className="fltWapper">
                            <div className={`filterWrap relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                                <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(1)}></div>
                                <p className=''>Topic Type</p>
                                <div className="listWrap">
                                    <ul className={`absolute  ${open == 1 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                        } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic  w-[236px] p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                        {/* {
                                            isResourceList?.map((item, index) => {
                                                return (
                                                    <li key={index} className={`mb-[16px] hover:text-pink`} data-val={`data item`} onClick={() => resourceHandlerData(item, index)} ><p className={` text-[16px] font-[500] leading-[24px]`}>{item}</p></li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </div>
                            </div>
                            <div className={`filterWrap relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                                <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(2)}></div>
                                <p className=''>Solutions Type</p>
                                <div className="listWrap">
                                    <ul className={`absolute  ${open == 2 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                        } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic  w-[236px] p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                        {/* {
                                            isSolutionList?.map((item, index) => {
                                                return (
                                                    <li key={index} className={`mb-[16px] hover:text-pink`} data-val={`das item `} onClick={() => solutionHandlerData(item, index)} ><p className={` text-[16px] font-[500] leading-[24px]`}>{item}</p></li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </div>
                            </div>
                            <div className={`filterWrap relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                                <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(3)}></div>
                                <p className=''>Content Type</p>
                                <div className="listWrap">
                                    <ul className={`absolute  ${open == 3 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                        } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic  w-[236px] p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                        {/* {
                                            isAuthorList?.map((item, index) => {
                                                return (
                                                    <li key={index} className={`mb-[16px] hover:text-pink`} data-val={`das item `} onClick={() => authorHandlerData(item, index)} ><p className={` text-[16px] font-[500] leading-[24px]`}>{item}</p></li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fltCardWrapper row w-[calc(100%+30px)] ml-[-15px] flex flex-wrap">
                        <div className="card w-[calc(33.33%-30px)] mx-[15px] relative">
                            <Link href={'/'} className='emptyLink'>.</Link>
                            <div className="imgWrap">
                                <Image src={'/'} alt='' width={300} height={400} />
                            </div>
                            <div className="content">
                                <h3>Data</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
