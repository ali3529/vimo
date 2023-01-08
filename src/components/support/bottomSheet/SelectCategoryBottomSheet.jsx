import {useQueryClient} from '@tanstack/react-query';
import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import {setCategory} from '../../../redux/ticket/SelectedTicketSlice';
import SelectedCategorySVG from '../assets/SelectedCategorySVG';

function SelectCategoryBottomSheet({category, setOpenSelectCategory}) {
    const [Faq, setFaq] = useState([])
    const queryClient = useQueryClient()
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (queryClient.getQueriesData(["getFaqQuery"]).length != 0)
            setFaq(queryClient.getQueriesData(["getFaqQuery"])[0][1]?.data?.result?.faq_categories)

    }, [])

    const handleSelectCategory = (item) => {
        dispatch(setCategory({category: item}))
        setOpenSelectCategory(false)
        //trick for handle steps
        if (location?.pathname == "/support/create-ticket") {
            if (!item?.direct_ticket) {
                navigate(-1)
            }
        } else if (location?.pathname == "/support/ticket-subcategory") {
            if (item?.direct_ticket) {
                navigate("/support/create-ticket", {replace: true})
            }
        }
    }

    return (
        <div dir='rtl' className='w-full flex flex-col'>
            {
                Faq?.map(item =>
                        <div className='text-[1.4rem] mb-6 fa-format-400 text-white flex flex-row gap-6'
                             onClick={() => handleSelectCategory(item)}
                        >
                            {item?.title}
                            {
                                category?.id == item?.id &&
                                <span>
                                    <SelectedCategorySVG/>
                                 </span>
                            }
                        </div>
                )
            }
        </div>
    )
}

export default SelectCategoryBottomSheet