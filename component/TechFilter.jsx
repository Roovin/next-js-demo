import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Data from '../json/technologies.json'

export default function TechFilter() {
    const [open, setOpen] = useState(0);
    const [isResourceList, setIsResourceList] = useState([]);
    const [resData, setResData] = useState([]);
    const [isSolutionList, setIsSolutionList] = useState();
    const [solData, setSolData] = useState([]);
    const [isAuthorList, setIsAuthorList] = useState();
    const [aurData, setAurData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [wholeData, setWholeData] = useState(Data);
    const [isPage, setIsPage] = useState();
    const [totalPage, setTotalPage] = useState(1);
    const [totalResource, setTotalResource] = useState(0);
    const [totalSolution, setTotalSolution] = useState(0);
    const [totalAuthor, setTotalAuthor] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [clickResVal, setClickResVal] = useState();
    const [clickSolVal, setClickSolVal] = useState();
    const [clickAurVal, setClickAurVal] = useState();
    
    const pageButton = [];

    function resourceList(val) {
        const resList = [];
        val?.map((item) => {
            item.resources && resList.push(item.resources);
        });
        const resourcesSet = new Set(resList);
        const uniqueResourceList = Array.from(resourcesSet);
        setIsResourceList(uniqueResourceList);
    }
    function solutionList(val) {
        const solList = [];
        val?.map((item) => {
            item.solution && solList.push(item.solution);
        });
        const solutionsSet = new Set(solList);
        const uniqueSolutionList = Array.from(solutionsSet);
        setIsSolutionList(uniqueSolutionList);
    }
    function authorList(val) {
        const aurList = [];
        val?.map((item) => {
            item.author && aurList.push(item.author);
        });
        const authorSet = new Set(aurList);
        const uniqueAuthorList = Array.from(authorSet);
        setIsAuthorList(uniqueAuthorList);
    }
    useEffect(() => {
        resourceList(Data);
        solutionList(Data);
        authorList(Data);
    }, [])

    const resourceHandlerData = (val, index) => {
        const resourceData = [];
        const solutionData = [];
        const authorData = [];
        var resBothData;
        setClickResVal(val)

        if (solData.length > 0 && aurData.length > 0) {
            if (solData.length > aurData.length) {
                resBothData = aurData;
            } else if (solData.length < aurData.length) {
                resBothData = solData;
            } else if (solData.length == aurData.length) {
                resBothData = solData
            }
            resBothData?.map((item) => {
                item.resources === val ? resourceData.push(item) : '';
            })
        } else if (!solData.length > 0 && !aurData.length > 0) {
            Data?.map((item) => {
                item.resources === val ? resourceData.push(item) : '';
            })
        } else if (solData.length > 0 && !aurData.length > 0) {
            solData?.map((item) => {
                item.resources == val ? resourceData.push(item) : '';
            })
        }
        else if (!solData.length > 0 && aurData.length > 0) {
            aurData?.map((item) => {
                item.resources == val ? resourceData.push(item) : '';
            })
        }

        setWholeData(resourceData);
        setResData(resourceData);
        setTotalResource(resourceData.length)
        resourceData.map((val, i) => {
            solutionData.push(val.solution);
            authorData.push(val.author);
        })
        const solutionList = new Set(solutionData);
        const uniqueSolution = Array.from(solutionList);
        setIsSolutionList(uniqueSolution);

        const authorList = new Set(authorData);
        const uniqueAuthor = Array.from(authorList);
        setIsAuthorList(uniqueAuthor);
    }
    const solutionHandlerData = (val, index) => {
        const resourceData = [];
        const solutionData = [];
        const authorData = [];
        var authBothData;
        console.log(val);
        setClickSolVal(val)
        if (resData.length > 0 && aurData.length > 0) {
            var s = resData.concat(aurData);
            const r = new Set(s);
            const a = Array.from(r);
            if (aurData.length > resData.length) {
                authBothData = resData;
            } else if (aurData.length < resData.length) {
                authBothData = aurData;
            } else if (aurData.length == resData.length) {
                authBothData = aurData
            }
            authBothData?.map((item) => {
                item.solution === val ? solutionData.push(item) : '';
            })
        }
        else if (!resData.length > 0 && !aurData.length > 0) {
            console.log('test');
            Data?.map((item) => {
                item.solution == val ? solutionData.push(item) : '';
            })
        }
        else if (resData.length > 0 && !aurData.length > 0) {
            console.log('test1');
            resData.map((item) => {
                item.solution == val ? solutionData.push(item) : '';
            })
        }
        else if (!resData.length > 0 && aurData.length > 0) {
            console.log('test2');
            aurData.map((item) => {
                item.solution == val ? solutionData.push(item) : '';
            })
        }


        setWholeData(solutionData);
        setSolData(solutionData)
        setTotalSolution(solutionData.length)
        solutionData.map((val) => {
            resourceData.push(val.resources);
            authorData.push(val.author);
        })
        const resourceList = new Set(resourceData);
        const uniqueResourceList = Array.from(resourceList);
        setIsResourceList(uniqueResourceList);

        const authorList = new Set(authorData);
        const uniqueAuthor = Array.from(authorList);
        setIsAuthorList(uniqueAuthor);
    }

    const authorHandlerData = (val, index) => {
        const resourceData = [];
        const solutionData = [];
        const authorData = [];

        var authBothData;
        setClickAurVal(val)

        if (resData.length > 0 && solData.length > 0) {

            if (solData.length > resData.length) {
                authBothData = resData;
            } else if (solData.length < resData.length) {
                authBothData = solData;
            } else if (solData.length == resData.length) {
                authBothData = solData
            }

            authBothData?.map((item) => {
                item.author === val ? authorData.push(item) : '';
            })
        } else if (!resData.length > 0 && !solData.length > 0) {
            Data.map((item) => {
                item.author === val ? authorData.push(item) : '';
            })
        } else if (resData.length > 0 && !solData.length > 0) {
            resData.map((item) => {
                item.author == val ? authorData.push(item) : '';
            })
        }
        else if (!resData.length > 0 && solData.length > 0) {
            solData.map((item) => {
                item.author == val ? authorData.push(item) : '';
            })
        }

        setWholeData(authorData);
        setAurData(authorData);
        setTotalAuthor(authorData.length)
        authorData.map((val) => {
            resourceData.push(val.resources);
            solutionData.push(val.solution);
        })

        const resourceList = new Set(resourceData);
        const uniqueResourceList = Array.from(resourceList);
        setIsResourceList(uniqueResourceList);

        const solutionList = new Set(solutionData);
        const uniqueSolution = Array.from(solutionList);
        setIsSolutionList(uniqueSolution);

    }

    const listHandler = (i) => {
        if (open === i) {
            setOpen(0)
        } else {
            setOpen(i)
        }
    }

    /* Start pagination */
    const pagination = (newPage) => {
        setCurrentPage(newPage)
    }

    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(wholeData.length / itemsPerPage);
    for (let index = 1; index <= totalPages; index++) {
        pageButton.push(index)
    }
    useEffect(() => {
        const t = (totalResource + totalSolution + totalAuthor)
        setTotalCount(t);
    }, [totalResource, totalSolution, totalAuthor])

    useEffect(() => {
        setIsPage(pageButton)
        setTotalPage(totalPages)
    }, [wholeData])

    const prev = () => {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const next = () => {
        if (currentPage >= 1 && currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    /* End pagination */

    const crossHandler = (val) => {
        const resourceData = [];
        const solutionData = [];
        const authorData = [];
        console.log(val);
        if(val == 'res') {
            if(totalSolution == 0 && totalAuthor == 0) {
                setWholeData(Data)
                resourceList(Data)
                solutionList(Data)
                authorList(Data)
                setTotalResource(0)
            } else if(totalSolution != 0 && totalAuthor == 0) {
                console.log('cross');
                setAurData([])
                setResData([])
                setTotalResource(0)
                solutionHandlerData(clickSolVal)
                // setWholeData(Data)
                // solData.map((val) => {
                //     resourceData.push(val.resources);
                //     authorData.push(val.author);
                // })
                // const resourceList = new Set(resourceData);
                // const uniqueResourceList = Array.from(resourceList);
                // setIsResourceList(uniqueResourceList);
        
                // const authorList = new Set(authorData);
                // const uniqueAuthor = Array.from(authorList);
                // setIsAuthorList(uniqueAuthor);
                // console.log(solData);
                // setWholeData(solData)
                // solutionList(Data)
                // authorList(solData)
            }
           
        } else if(val == 'sol') {
            resourceList(Data)
            authorList(Data)
            setTotalSolution(0)
        } else if (val == 'aur') {
            resourceList(Data)
            solutionList(Data)
            setTotalAuthor(0)
        }
    }

    const clearAll = () => {
        setWholeData(Data)
        resourceList(Data)
        solutionList(Data)
        authorList(Data)
        setResData(Data)
        setAurData(Data)
        setSolData(Data)
        setTotalResource(0)
        setTotalAuthor(0)
        setTotalSolution(0)
        setOpen(0)
    }

    return (
        <section className="techFilter">
            <div className="container">
                <div className="cardWithFilter">
                    <div className="filterWrapper flex flex-wrap justify-center  mx-auto">
                        <div className={`filterWrap relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                            <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(1)}></div>
                            <p className=''>Resources</p>
                            <div className="listWrap">
                                <ul className={`absolute  ${open == 1 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                    } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic  w-[236px] p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                    {
                                        isResourceList?.map((item, index) => {
                                            return (
                                                <li key={index} className={`mb-[16px] hover:text-pink`} data-val={`data item`} onClick={() => resourceHandlerData(item, index)} ><p className={` text-[16px] font-[500] leading-[24px]`}>{item}</p></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={`filterWrap relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                            <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(2)}></div>
                            <p className=''>Solutions</p>
                            <div className="listWrap">
                                <ul className={`absolute  ${open == 2 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                    } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic  w-[236px] p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                    {
                                        isSolutionList?.map((item, index) => {
                                            return (
                                                <li key={index} className={`mb-[16px] hover:text-pink`} data-val={`das item `} onClick={() => solutionHandlerData(item, index)} ><p className={` text-[16px] font-[500] leading-[24px]`}>{item}</p></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={`filterWrap relative inline-block filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer sm:mr-[5px] sm:py-[5px] sm:mb-[10px]`}>
                            <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(3)}></div>
                            <p className=''>Author</p>
                            <div className="listWrap">
                                <ul className={`absolute  ${open == 3 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                    } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic  w-[236px] p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:w-[130px] sm:p-[10px]`}>
                                    {
                                        isAuthorList?.map((item, index) => {
                                            return (
                                                <li key={index} className={`mb-[16px] hover:text-pink`} data-val={`das item `} onClick={() => authorHandlerData(item, index)} ><p className={` text-[16px] font-[500] leading-[24px]`}>{item}</p></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`counterWrap justify-between ${totalResource == '' && totalSolution == '' && totalAuthor == '' ? 'hidden' : 'flex'}`}>
                        <ul className={`flex-wrap flex `}>
                            {
                                totalResource && (
                                    <li className='mr-[20px] last:mr-0 relative before:hidden px-[10px] py-[5px] border-[1px] border-black rounded-[50px]'>
                                        {
                                            <div className="resourceWrap flex relative pr-[20px]">
                                                <p className=''>Resources {totalResource > 0 ? totalResource : ''}</p>
                                                {/* <div className="crossBtn ml-[5px] absolute top-[0] right-0 w-[10px] h-[10px]" onClick={() => crossHandler('res')}>
                                                    <p className='inline-block cursor-pointer text-black'>x</p>
                                                </div> */}
                                            </div>
                                        }
                                    </li>
                                )
                            }
                            {
                                totalSolution && (
                                    <li className='mr-[20px] last:mr-0 before:hidden px-[10px] py-[5px] border-[1px] border-black rounded-[50px]'>

                                        {
                                            <div className="resourceWrap flex relative pr-[20px]">
                                                <p className=''>Solutions {totalSolution > 0 ? totalSolution : ''}</p>
                                                {/* <div className="crossBtn ml-[5px] absolute top-[0] right-0 w-[10px] h-[10px]" onClick={() => crossHandler('sol')}>
                                                    <p className='inline-block cursor-pointer text-black'>x</p>
                                                </div> */}
                                            </div>
                                        }
                                    </li>
                                )
                            }
                            {
                                totalAuthor && (
                                    <li className='mr-[20px] last:mr-0 before:hidden px-[10px] py-[5px] border-[1px] border-black rounded-[50px]'>
                                        {
                                            <div className="resourceWrap flex relative pr-[20px]">
                                                <p className=''>Author {totalAuthor > 0 ? totalAuthor : ''}</p>
                                                {/* <div className="crossBtn ml-[5px] absolute top-[0] right-0 w-[10px] h-[10px]" onClick={() => crossHandler("aur")}>
                                                    <span className='inline-block cursor-pointer text-black'>x</span>
                                                </div> */}
                                            </div>
                                        }

                                    </li>
                                )
                            }
                        </ul>
                        <div className="totalWrap flex">
                            <p>Result {wholeData.length}</p>
                            <div className="clearWrap cursor-pointer ml-[20px]" onClick={() => clearAll()}>
                                <p className=''>Clear</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardWrapper flex flex-wrap mt-[30px]">
                        {
                            (wholeData.length != 0 ? wholeData.slice(startIndex, endIndex).map((item, i) => {
                                return (
                                    <div key={item?.id + i} className="card w-[calc(33.33%-30px)] mx-[15px] mb-[30px] relative border border-black p-[20px] rounded-[10px]">
                                        <Link href="#" className='emptyLink'>.</Link>
                                        <div className="contentWrap">
                                            <div className="description mb-[20px]">
                                                <h3>{item.id}</h3>
                                                <p>{item?.title}</p>
                                            </div>
                                            <div className="btnWrap bottom-0">
                                                <Link href="#" className='default'>Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : '')
                        }
                    </div>
                    {
                        isPage?.length > 1 ?
                            <div className="pagination">
                                <ul className='flex justify-center relative p-0 mt-[30px]'>
                                    <li className={`mx-[10px] my-0 relative cursor-pointer before:hidden inline-block text-[$000] ${currentPage == 1 ? 'opacity-[0.2]' : 'opacity-1'}`} onClick={() => prev()}>
                                        Prev
                                    </li>
                                    {isPage?.map((listItem) => {
                                        return (
                                            <li key={listItem} className={`mx-[10px] my-0 relative cursor-pointer before:hidden inline-block ${listItem == currentPage ? 'text-[#FF0000]' : '!text-[#000]'}`} onClick={() => pagination(listItem)}>
                                                {listItem}
                                            </li>
                                        );
                                    })}
                                    <li className={`mx-[10px] my-0 relative cursor-pointer before:hidden inline-block text-[$000] ${currentPage == totalPage ? 'opacity-[0.2]' : 'opacity-1'}`} onClick={() => next()}>
                                        Next
                                    </li>
                                </ul>
                            </div> : ''
                    }
                </div>

            </div>
        </section>
    )
}
