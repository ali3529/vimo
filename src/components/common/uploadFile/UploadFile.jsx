import {Button, Card, CardActionArea} from '@mui/material'
import {useMutation} from '@tanstack/react-query'
import React from 'react'
import {useImperativeHandle} from 'react'
import {useState} from 'react'
import {sendMessageFile} from '../../../service/ApiClient'
import CreateTicketExclamationPoint from '../../support/assets/CreateTicketExclamationPoint'
import CreateTicketMultiplySVG from '../../support/assets/CreateTicketMultiplySVG'
import CreateTicketPauseButtonSVG from '../../support/assets/CreateTicketPauseButtonSVG'
import PaperclipSVG from '../assets/PaperclipSVG'
import ErrorUpload from './ErrorUploadItem'
import SelectedItem from './SelectedItem'
import SuccessfulUpload from './SuccessfulUploadItem'
import UploadedItem from './UploadingItem'


let controller = new AbortController();
let maxUpload = 11

function UploadFile({sendCompleteRequest}, ref) {
    const [selectedFile, setSelectedFile] = useState([])
    const [percentage, setPercentage] = useState(0)
    const [error, setError] = useState(false)


    //function for call upload file with ref in other component
    useImperativeHandle(ref, () => ({
        uploadFiles(replyID) {
            handleSendMessage(replyID)
        },

        resetData() {
            setSelectedFile([])
            setError(false)
        },
    }));

    //get selected item
    const handleSelectedFile = (selectedItem) => {
        if (selectedItem.length >= maxUpload) {
            setError(true)
            return
        }
        setError(false)

        // add object status fields
        Object.entries(selectedItem)?.map(item => {
            item[1].uploading = false
            item[1].hasError = false
            item[1].errorMessage = ""
            item[1].cancelFile = false
            item[1].UploadedSuccessful = false
            setSelectedFile(prev => [...prev, item[1]])
        })
        maxUpload = maxUpload - selectedItem.length

    }

    // delete selected item
    const handleDeleteFile = (itemIndex) => {
        setSelectedFile(prev => prev.filter((item, index) => index != itemIndex))
        maxUpload++
    }

    //send selected data to endpoint
    const sendMessageFileQuery = useMutation(({
                                                  id,
                                                  file,
                                                  signal
                                              }) => sendMessageFile(id, {file}, (e) => handlePercent(e), signal), {
        onSuccess: (res) => {
        }
    })

    //percent for show upload status
    const handlePercent = (event) => {
        const percentage = Math.round((100 * event.loaded) / event.total);
        setPercentage(percentage)
    }

    //send item to request queue and handle upload status or cancel item
    const handleSendMessage = async (id) => {
        for (let index = 0; index < selectedFile.length; index++) {
            selectedFile[index].uploading = true
            const formData = new FormData()
            formData.append("file", selectedFile[index])
            await sendMessageFileQuery.mutateAsync({id, file: formData, signal: controller.signal}).then(res => {
                if (res?.data?.done) {
                    selectedFile[index].uploading = false
                    selectedFile[index].UploadedSuccessful = true
                } else {
                    selectedFile[index].uploading = false
                    selectedFile[index].hasError = true
                    selectedFile[index].errorMessage = res?.data?.error?.message
                }
                setPercentage(0)
            }).catch(err => {
                setPercentage(0)
                selectedFile[index].uploading = false
                selectedFile[index].hasError = true
                selectedFile[index].cancelFile = true
                controller = new AbortController();
            })
        }
        maxUpload = 11
        sendCompleteRequest()
    }

    //function for set jsx item whit status code
    const setUploadStatusItem = (item, index) => {
        if (item.uploading) {
            return <UploadedItem controller={controller} percentage={percentage}
                                 deleteItem={(item) => handleDeleteFile(item)} index={index} item={item}/>
        } else if (item.UploadedSuccessful) {
            return <SuccessfulUpload deleteItem={(item) => handleDeleteFile(item)} index={index} item={item}/>
        } else if (item.hasError) {
            return <ErrorUpload deleteItem={(item) => handleDeleteFile(item)} index={index} item={item}/>
        } else {
            return <SelectedItem deleteItem={(item) => handleDeleteFile(item)} index={index} item={item}/>
        }
    }

    return (
        <div
            dir="rtl"
            className=' bg-[#28242D] w-[100%] mx-auto flex flex-col gap-4  rounded-[20px] !z-30 relative'
        >
            <p className="text-[1.4rem]  text-gray-A fa-format-300 -mb-[4px] mt-[4px] ">
                افزودن فایل
            </p>
            <input onChange={(e) => handleSelectedFile(e.target.files)} multiple className="hidden" id="uploadFile"
                   type={"file"}/>

            <CardActionArea
                className={`!w-full  !bg-black-box !flex !flex-row justify-between items-center !rounded-[15px]
                    !border-dashed !border-[1px] !border-blue !h-[48px] !mt-2 
                    `}
            >
                <label
                    for="uploadFile"
                    variant='outlined'
                    className='w-full h-full z-10  !rounded-[15px] !text-[1.4rem] !text-white !fa-format-200 !flex !items-center !justify-center !gap-2'
                >
                    <PaperclipSVG/>
                    <p className='text-white'> افزودن فایل</p>
                </label>
            </CardActionArea>

            <p className="text-[1.2rem] mb-4 text-gray-A fa-format-300  ">
                بیشترین حجم مجاز ۱۰۰Mb
            </p>
            {
                error &&
                <div className='h-[70px] rounded-[16px] px-8 border-[1px] border-red   flex items-center gap-4'>
                    <CreateTicketExclamationPoint/>
                    <div className=' flex items-start flex-col'>
                        <p className='text-red text-[1.4rem] fa-format-400'>بیش از حد مجاز انتخاب کرده اید</p>
                        <p className='text-gray-A text-[1.4rem] fa-format-400'>
                            شما مجاز به بارگذاری حداکثر ۱۰ فایل هستید
                        </p>
                    </div>
                </div>
            }
            {
                sendMessageFileQuery.isLoading &&
                <p className="text-[1.4rem]  text-gray-A fa-format-300 -mb-[4px] mt-[4px] ">
                    در حال بارگذاری
                </p>
            }
            <div className='flex flex-col w-full gap-4 '>
                {selectedFile?.map((item, index) => setUploadStatusItem(item, index))}
            </div>
        </div>
    )
}

export default React.forwardRef(UploadFile)