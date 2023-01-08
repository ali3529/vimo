import {useMutation, useQueryClient} from '@tanstack/react-query'
import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import FavoriteVideoBlueHeartSVG from '../../components/profile/assets/FavoriteVideoBlueHeartSVG'
import FavoriteVideoEmptyBlueHeartSVG from '../../components/profile/assets/FavoriteVideoEmptyBlueHeartSVG'
import FavoriteVideoPlaceHolderSVG from '../../components/profile/assets/FavoriteVideoPlaceHolderSVG'
import {postLike, deleteLike} from '../../service/ApiClient'

function VideoCard({item, index}) {
    const queryClient = useQueryClient()
    const [liked, setLiked] = useState(false)
    //handle like video
    const addLikeMutation = useMutation((likeData) => postLike(likeData), {
        onSuccess: () => {
            queryClient.invalidateQueries(["getVideosQuery"]);
        }
    })
    //handle disLike video
    const unLikeMutation = useMutation((unLikeData) => deleteLike(unLikeData), {
        onSuccess: (res) => {
            queryClient.invalidateQueries(["getVideosQuery"]);
        }
    })
    const handleVideoLike = (id, isLiked) => {
        if (isLiked) {
            unLikeMutation.mutate({model_id: id, model_type: "video"})
            setLiked((prev) => !prev)
        } else {
            addLikeMutation.mutate({model_id: id, model_type: "video"})
            setLiked((prev) => !prev)
        }
    }

    useEffect(() => {
        setLiked(!!item.is_liked)
    }, [])

    return (
        <div
            key={index}
            className='bg-black-box h-[92px] rounded-[15px] mt-[12px] flex items-center pr-[12px] pl-[17px] justify-between'
        >
            <div className='flex gap-3'>
                <div className='relative w-[100px] h-[68px]'>
                    <LazyLoadImage
                        className='w-[100px] h-[68px] object-cover rounded-[10px] absolute top-0 left-0'
                        src={item?.cover?.optimized}
                    />
                    <FavoriteVideoPlaceHolderSVG className="absolute top-0 left-0"/>
                </div>
                <div className='flex flex-col mr-2'>
                    <p dir='ltr'
                       className='text-[1rem] min-[400px]:text-[1.4rem] text-white fa-format-400 truncate w-20 min-[400px]:w-60 text-right'>
                        {item?.artists.map((artist, index) => {
                            return (
                                <span key={index}>
                                    {artist?.name} {index !== (item?.artists?.length - 1) && '، '}
                                </span>
                            )
                        })}
                    </p>
                    <p className='text-gray-A text-[1rem] min-[400px]:text-[1.2rem] fa-format-300 mt-1'>
                        {item?.music_title}
                    </p>
                    <p className='text-gray-B text-[1rem] fa-format-300 mt-[10px]'> پخش
                        {item?.view_count}
                    </p>
                </div>
            </div>
            {
                liked ?
                    <div onClick={() => handleVideoLike(item?.id, item?.is_liked)}>
                        <FavoriteVideoBlueHeartSVG/>
                    </div>
                    :
                    <div onClick={() => handleVideoLike(item?.id, item?.is_liked)}>
                        <FavoriteVideoEmptyBlueHeartSVG/>
                    </div>
            }
        </div>
    )
}

export default VideoCard