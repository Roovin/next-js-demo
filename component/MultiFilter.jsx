import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import data from '../public/checkFilter/checkFilter.json'

export default function MultiFilter() {

    const [open, setOpen] = useState(0);
    const [isTopic, setIsTopic] = useState([])
    const [isSolutions, setIsSolutions] = useState([])
    
    const [isContent, setIsContent] = useState([])
    const [isTopicList, setIsTopicList] = useState([])
    const [isSolutionsList, setIsSolutionsList] = useState([])
    const [isContentList, setIsContentList] = useState([])
    const [wholeData, setWholeData] = useState(data)
    const [currentPage, setCurrentPage] = useState(1);
    const [isPage, setIsPage] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const [isCheck, setIsCheck] = useState()
    const [myTopicArray, setMyTopicArray] = useState([]);
    const [myTopicArrayValue, setMyTopicArrayValue] = useState([]);
    const [mySolutionArray, setMySolutionArray] = useState([]);
    const [mySolutionArrayValue, setMySolutionArrayValue] = useState([]);
    const [isTopicData, setIsTopicData] = useState([]);
    const [isSolutionData, setIsSolutionData] = useState([]);
    const [isContentData, setIsContentData] = useState([]);
    const [isTwoData, setIsTwoData] = useState([])
    const [myContentArray, setMyContentArray] = useState([]);
    const [myContentArrayValue, setMyContentArrayValue] = useState([]);
    const [isRemoveSolutionData, setIsRemoveSolutionData] = useState(0)


    // const istopicData = []
    const pageButton = []
    const selectList = []

    function byTopic(val) {
        const topicList = []
        val.map((item) => {
            item.topicType && topicList.push(item.topicType)
        })
        const topicSet = new Set(topicList)
        const uniqueTopic = Array.from(topicSet)
        setIsTopicList(uniqueTopic)
    }
    function bySolution(val) {
        const solList = [];
        val.map((item) => {
            item.solutionType && solList.push(item.solutionType)
        })
        const solutionSet = new Set(solList);
        const uniqueSolution = Array.from(solutionSet)
        setIsSolutionsList(uniqueSolution);
    }
    function byContent(val) {
        const contentList = []
        val.map((item) => {
            item.contentType && contentList.push(item.contentType)
        })
        const setContent = new Set(contentList)
        const uniqueContent = Array.from(setContent)
        setIsContentList(uniqueContent)

    }

    useEffect(() => {
        byTopic(data)
        bySolution(data)
        byContent(data)
    }, [])

    const topicListClick = (val, listIndex) => {
        let topic = []
        const topicData = []
        const solData = []
        const contData = []

        if (myTopicArrayValue.includes(val)) {
            const filteredArray = myTopicArray.filter(item => item !== listIndex);
            setMyTopicArray(filteredArray);
            const filteredArrayValue = myTopicArrayValue.filter(item => item !== val);
            setMyTopicArrayValue(filteredArrayValue);
        } else {
            setMyTopicArray([...myTopicArray, listIndex]);
            setMyTopicArrayValue([...myTopicArrayValue, val])
        }

        if (!mySolutionArray.length > 0 && !myContentArray.length > 0) {
            if (isTopicData.length > 0 && myTopicArrayValue.includes(val)) {
                const myTopicRemove = isTopicData.filter(item => item.topicType !== val);
                setIsTopicData(myTopicRemove)
                topic = myTopicRemove;
                if (topic.length > 0) {
                    myTopicRemove.map((item) => {
                        solData.push(item.solutionType)
                        contData.push(item.contentType)
                    })

                    const setSolData = new Set(solData)
                    const setSolUniqueList = Array.from(setSolData)
                    setIsSolutionsList(setSolUniqueList)

                    const setConteData = new Set(contData)
                    const setContentUnique = Array.from(setConteData)
                    setIsContentList(setContentUnique)
                } else {
                    byTopic(data)
                    bySolution(data)
                    byContent(data)
                }
            } else {
                if (myTopicArrayValue.length >= 0 && isTopicData.length >= 0) {
                    data.map((item) => {
                        item.topicType == val ? isTopicData.push(item) : ''
                    })
                    isTopicData.map((item) => {
                        solData.push(item.solutionType)
                        contData.push(item.contentType)
                    })
                }
                const setSolData = new Set(solData)
                const setSolUniqueList = Array.from(setSolData)
                setIsSolutionsList(setSolUniqueList)

                const setConteData = new Set(contData)
                const setContentUnique = Array.from(setConteData)
                setIsContentList(setContentUnique)
            }
        } else if (mySolutionArray.length > 0 && !myContentArray.length > 0) {
            if (isTopicData.length > 0 && myTopicArrayValue.includes(val)) {
                const myTopicRemove = isTopicData.filter(item => item.topicType !== val);
                setIsTopicData(myTopicRemove)
                topic = myTopicRemove;
                if (topic.length > 0) {
                    isSolutionData.map((item) => {
                        solData.push(item.solutionType)
                        contData.push(item.contentType)
                    })

                    const setSolData = new Set(solData)
                    const setSolUniqueList = Array.from(setSolData)
                    setIsSolutionsList(setSolUniqueList)

                    const setConteData = new Set(contData)
                    const setContentUnique = Array.from(setConteData)
                    setIsContentList(setContentUnique)
                } else {
                    mySolutionArrayValue?.map((val) => {
                        isSolutionData.map((item) => {
                            item.solutionType == val ? isTopicData.push(item) : ''
                        })
                    })
                    isSolutionData.map((item) => {
                        solData.push(item.solutionType)
                        contData.push(item.contentType)
                    })
                    const setSolData = new Set(solData)
                    const setSolUniqueList = Array.from(setSolData)
                    setIsSolutionsList(setSolUniqueList)

                    const setConteData = new Set(contData)
                    const setContentUnique = Array.from(setConteData)
                    setIsContentList(setContentUnique)
                }
            } else {
                if (myTopicArrayValue.length >= 0 && isTopicData.length >= 0) {

                    isSolutionData.map((item) => {
                        item.topicType == val ? isTopicData.push(item) : ''
                    })
                    console.log(isTopicData);
                    isTopicData.map((item) => {
                        solData.push(item.solutionType)
                        contData.push(item.contentType)
                    })
                }
                const setSolData = new Set(solData)
                const setSolUniqueList = Array.from(setSolData)
                setIsSolutionsList(setSolUniqueList)

                const setConteData = new Set(contData)
                const setContentUnique = Array.from(setConteData)
                setIsContentList(setContentUnique)

            }
        }
    }

    const solutionClickHandler = (val, solIndex) => {
        const solutionData = []
        const contentData = []
        const topicData = []
        if (mySolutionArray.includes(solIndex)) {
            const filteredArray = mySolutionArray.filter(item => item !== solIndex);
            setMySolutionArray(filteredArray);
            const filteredArrayValue = mySolutionArrayValue.filter(item => item !== val);
            setMySolutionArrayValue(filteredArrayValue);
        } else {
            setMySolutionArray([...mySolutionArray, solIndex]);
            setMySolutionArrayValue([...mySolutionArrayValue, val])
        }

        // if(isTopicData.length > 0 && !isContentData > 0) {
        //     data.map((item) => {
        //         item.solutionType == val ? isSolutionData.push(item) : ''
        //     })
        // }
        // if (!topicData.length > 0 && !contentData.length > 0) {
        if (isSolutionData.length > 0 && mySolutionArrayValue.includes(val)) {
            const solutionRemoveData = isSolutionData.filter(item => item.solutionType !== val)
            setIsSolutionData(solutionRemoveData)
            if (isTopicData.length > 0 && !isContentData.length > 0) {
                if (solutionRemoveData.length > 0) {
                    isTopicData.map((item) => {
                        solutionData.push(item.solutionType)
                        contentData.push(item.contentType)
                    })
                } else {
                    byTopic(data)
                    isTopicData.map((item) => {
                        solutionData.push(item.solutionType)
                        contentData.push(item.contentType)
                    })
                }
                const setTopiData = new Set(solutionData)
                const setTopicUniqueList = Array.from(setTopiData)
                setIsSolutionsList(setTopicUniqueList)

                const setConteData = new Set(contentData)
                const setContentUnique = Array.from(setConteData)
                setIsContentList(setContentUnique)
                setIsRemoveSolutionData(1)
            } else if (!isTopicData.length > 0 && !isContentData.length > 0) {
                if (solutionRemoveData.length > 0) {
                    solutionRemoveData.map((item) => {
                        topicData.push(item.topicType)
                        contentData.push(item.contentType);
                    })
                    const setTopiData = new Set(topicData)
                    const setTopicUniqueList = Array.from(setTopiData)
                    setIsTopicList(setTopicUniqueList)

                    const setConteData = new Set(contentData)
                    const setContentUnique = Array.from(setConteData)
                    setIsContentList(setContentUnique)
                } else {
                    byTopic(data)
                    byContent(data)
                }
            }

        } else {
            if (!isTopicData.length > 0 && !isContentData.length > 0) {
                if (mySolutionArrayValue.length >= 0 && isSolutionData.length >= 0) {
                    data.map((item) => {
                        item.solutionType == val ? isSolutionData.push(item) : ''
                    })
                    isSolutionData.map((item) => {
                        topicData.push(item.topicType)
                        contentData.push(item.contentType);
                    })
                    const setTopiData = new Set(topicData)
                    const setTopicUniqueList = Array.from(setTopiData)
                    setIsTopicList(setTopicUniqueList)

                    const setConteData = new Set(contentData)
                    const setContentUnique = Array.from(setConteData)
                    setIsContentList(setContentUnique)
                }
            } else if (isTopicData.length > 0 && !isContentData.length > 0) {

                isTopicData.map((item) => {
                    item.solutionType == val ? isSolutionData.push(item) : ''
                })
                isSolutionData.map((item) => {
                    topicData.push(item.topicType)
                    contentData.push(item.contentType);
                })
                const setTopiData = new Set(topicData)
                const setTopicUniqueList = Array.from(setTopiData)
                const mergeTwoList = [...setTopicUniqueList, ...myTopicArrayValue];
                const setTopiDataMerge = new Set(mergeTwoList)
                const setTopicUniqueListMerge = Array.from(setTopiDataMerge)
                setIsTopicList(setTopicUniqueListMerge)

                const setConteData = new Set(contentData)
                const setContentUnique = Array.from(setConteData)
                setIsContentList(setContentUnique)
            }
        }
        // }
    }

    const contentClickHandler = (val, conIndex) => {
        const solutionData = []
        const contentData = []
        const topicData = []

        if (myContentArray.includes(conIndex)) {
            const filteredArray = myContentArray.filter(item => item !== conIndex);
            setMyContentArray(filteredArray);
            const filteredArrayValue = myContentArrayValue.filter(item => item !== val);
            setMyContentArrayValue(filteredArrayValue);
        } else {
            setMyContentArray([...myContentArray, conIndex]);
            setMyContentArrayValue([...myContentArrayValue, val])
        }

        if (!topicData.length > 0 && !solutionData.length > 0) {
            if (isContentData.length > 0 && myContentArrayValue.includes(val)) {
                const ContentRemoveData = isContentData.filter(item => item.contentType !== val)
                setIsContentData(ContentRemoveData)
                if (ContentRemoveData.length > 0) {
                    ContentRemoveData.map((item) => {
                        topicData.push(item.topicType)
                        solutionData.push(item.solutionType);
                    })
                    const setTopiData = new Set(topicData)
                    const setTopicUniqueList = Array.from(setTopiData)
                    setIsTopicList(setTopicUniqueList)

                    const setConteData = new Set(solutionData)
                    const setContentUnique = Array.from(setConteData)
                    setIsSolutionsList(setContentUnique)
                } else {
                    byTopic(data)
                    bySolution(data)
                }
            } else {
                if (myContentArrayValue.length >= 0 && isContentData.length >= 0) {
                    data.map((item) => {
                        item.contentType == val ? isContentData.push(item) : ''
                    })
                    isContentData.map((item) => {
                        topicData.push(item.topicType)
                        solutionData.push(item.solutionType);
                    })
                }
                const setTopiData = new Set(topicData)
                const setTopicUniqueList = Array.from(setTopiData)
                setIsTopicList(setTopicUniqueList)

                const setSolData = new Set(solutionData)
                const setSolutionUnique = Array.from(setSolData)
                setIsSolutionsList(setSolutionUnique)
            }
        }
    }

    useEffect(() => {
        if (!isSolutionData.length > 0 && !isContentData.length > 0) {
            setMyTopicArrayValue(myTopicArrayValue);
            if (isTopicData.length == 0) {
                setWholeData(data)
            } else {
                setWholeData(isTopicData)
                setIsTwoData(isTopicData)
            }
        } else if (!isTopicData.length > 0 && !isContentData.length > 0) {
            if (isSolutionData.length == 0) {
                setWholeData(data)
            } else {
                setWholeData(isSolutionData)
            }
        }  else if (!isTopicData.length > 0 && !isSolutionData.length > 0) {
            setMyContentArrayValue(myContentArrayValue)
            if (isContentData.length == 0) {
                setWholeData(data)
            } else {
                setWholeData(isContentData)
            }
        }else if (isTopicData.length > 0 && !isContentData.length > 0) {
            console.log('test1');
            setMySolutionArrayValue(mySolutionArrayValue)
            if (isSolutionData.length == 0) {
                setWholeData(data)
            } else{
                setWholeData(isSolutionData)
            }
        }  else if (isSolutionData.length > 0 && !isContentData.length > 0 ) {
            console.log('test2');
            setMyTopicArrayValue(myTopicArrayValue);
            if (isTopicData.length == 0) {
                setWholeData(data)
            } else {
                setWholeData(isTopicData)
                setIsTwoData(isTopicData)
            }
        } 
    }, [myTopicArrayValue, myTopicArray, isRemoveSolutionData, mySolutionArrayValue, mySolutionArray, myContentArray, myContentArrayValue])
console.log("isTopicData",isTopicData.length);
    const listHandler = (val) => {
        open === val ? setOpen(0) : setOpen(val)
    }
    const pageHandler = (pageVal) => {
        setCurrentPage(pageVal)
    }

    /** Pagination **/
    const itemPerPage = 9
    const startIndex = (currentPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const totalPage = Math.ceil(wholeData.length / itemPerPage)

    for (let index = 1; index <= totalPage; index++) {
        pageButton.push(index)
    }

    useEffect(() => {
        setIsPage(pageButton)
    }, [wholeData, myTopicArray, mySolutionArray, myContentArray])

    const prev = () => {
        currentPage != 1 ? setCurrentPage(currentPage - 1) : ''
    }
    const next = () => {
        currentPage != totalPage ? setCurrentPage(currentPage + 1) : ''
    }

    return (
        <section className="multiFilter py-[200px]">
            <div className="container">
                <h2>{wholeData.length}</h2>
                <div className="selectorWrapper text-center">
                    <h1 className='text-[40px]'>Multi Filter</h1>
                    <div className="multiFlt text-center mt-[30px]">
                        <div className={`filterWrap relative inline-block max-w-[200px] w-full filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer mr-[20px]`}>
                            <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(1)}></div>
                            <p className=''>Topic Type</p>
                            <div className="listWrap">
                                <ul className={`absolute  ${open == 1 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                    } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 w-full left-0 topic p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:p-[10px]`}>
                                    {
                                        isTopicList?.map((item, listIndex) => {
                                            return (
                                                <li key={listIndex} className={`mb-[16px] hover:text-pink before:hidden flex items-start text-left`} data-val={`data item`} onClick={() => topicListClick(item, listIndex)} >
                                                    <div className="checkWrap relative text-black">
                                                        <input type="checkbox" id={listIndex} className='mt-[5px] w-[18px] h-[18px]' checked={myTopicArrayValue.includes(item)} />
                                                        <label htmlFor={listIndex} className='text-black pl-[10px] text-[0]'>.</label>
                                                        {item}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={`filterWrap relative inline-block max-w-[200px] w-full filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033]  hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer mr-[20px]`}>
                            <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(2)}></div>
                            <p className=''>Solutions Type</p>
                            <div className="listWrap">
                                <ul className={`absolute  ${open == 2 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                    } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 w-full left-0 topic p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:p-[10px]`}>
                                    {
                                        isSolutionsList?.map((item, solIndex) => {
                                            return (
                                                <li key={solIndex + 1} className={`mb-[16px] hover:text-pink before:hidden flex items-start text-left`} data-val={`das item `} onClick={() => solutionClickHandler(item, solIndex + 1)} >
                                                    <div className="checkWrap relative text-black">
                                                        <input type="checkbox" id={solIndex + 1} className='mt-[5px] w-[18px] h-[18px]' checked={mySolutionArray.includes(solIndex + 1)} />
                                                        <label htmlFor={solIndex + 1} className='text-black pl-[10px] text-[0]'>.</label>
                                                        {item}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={`filterWrap relative inline-block max-w-[200px] w-full filter_wrap pl-[15px] pr-[41px] pt-[6px] pb-[8px] rounded-[4px] border-[1px] border-[#00000033] mr-[16px] sm:mr-[10px] hover:border-black ${open === 1 ? 'border-black' : ''} cursor-pointer mr-[20px]`}>
                            <div className='facet absolute z-[11] w-full h-full top-0 left-0' onClick={() => listHandler(3)}></div>
                            <p className=''>Content Type</p>
                            <div className="listWrap">
                                <ul className={`absolute ${open == 3 ? 'z-[1] bg-white !h-[218px] xxl-up:w-[260px] sm:!h-[214px] opacity-100 visible' : 'h-0 z-[1] opacity-0 invisible'
                                    } top-[44px] wide-screen:top-[56px] phablet:top-[42px] sm:top-[38px] duration-300 left-0 topic w-full p-[20px] overflow-auto z-[99] shadow border rounded-[4px] sm:p-[10px]`}>
                                    {
                                        isContentList?.map((item, listIndex) => {
                                            return (
                                                <li key={listIndex + 1} className={`mb-[16px] hover:text-pink before:hidden flex items-start text-left`} data-val={`das item `} onClick={() => contentClickHandler(item, listIndex + 1)} >
                                                    <div className="checkWrap relative text-black">
                                                        <input type="checkbox" id={listIndex + 1} className='mt-[5px] w-[18px] h-[18px]' checked={myContentArray.includes(listIndex + 1)} />
                                                        <label htmlFor={listIndex + 1} className='text-black pl-[10px] text-[0]'>.</label>
                                                        {item}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardsWrap flex flex-wrap mt-[100px]">
                    {
                        wholeData?.length != 0 && wholeData?.slice(startIndex, endIndex)?.map((item, dataIndex) => {
                            return (
                                <div key={dataIndex} className="cards w-[calc(33.33%-30px)] mx-[15px] mb-[30px] border-black border-[1px] rounded-[5px] relative group overflow-hidden">
                                    <Link href={'#'} className='emptyLink'>.</Link>
                                    <div className="imgWrap overflow-hidden">
                                        <Image src={item.imageSrc} alt='BackGround' width={300} height={300} className='transition-all scale-[1] group-hover:scale-[1.08] ease-in-out delay-300' />
                                    </div>
                                    <div className="contentWrap p-[20px]">
                                        <h6>{item?.caption}</h6>
                                        <h4 className='mt-[20px]'>{item?.heading}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pagination relative">
                    <ul className='flex items-center justify-center relative'>
                        <li className={`mr-[20px] last:mr-0  before:hidden ${currentPage != 1 ? 'text-black cursor-pointer' : 'opacity-[0.8]'}`} onClick={() => prev()}>
                            Prev
                        </li>
                        {
                            isPage.map((item, pageIndex) => {
                                return (
                                    <li key={pageIndex} className={`mr-[20px] relative last:mr-0 cursor-pointer before:hidden ${item == currentPage ? 'text-[#FF0000]' : 'text-[#000]'}`} onClick={() => pageHandler(item)}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                        <li className={`ml-[20px]  before:hidden ${currentPage != totalPage ? 'text-[#000] cursor-pointer' : 'opacity-[0.8]'}`} onClick={() => next()}>
                            Next
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
