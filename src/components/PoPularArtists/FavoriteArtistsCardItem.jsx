import {Button, CardActionArea} from '@mui/material'
import React from 'react'
import FollowedArtistPlaceHolderSVG from '../profile/assets/FollowedArtistPlaceHolderSVG'

function FavoriteArtistsCardItem({item}) {
    return (
        <CardActionArea className='!flex !items-center !justify-between !p-2 !rounded-[15px] !w-full'>
            <div className='flex items-center gap-5'>
                <div className='relative'>
                    <img
                        src={item?.cover.optimized}
                        className='w-[80px] h-[80px]  object-cover rounded-full absolute top-0 left-0'
                    />
                    <FollowedArtistPlaceHolderSVG className="absolute top-0 left-0"/>
                </div>
                <p className='text-white text-[1.4rem] fa-format-400'>{item?.name}</p>
            </div>
        </CardActionArea>
    )
}

export default FavoriteArtistsCardItem