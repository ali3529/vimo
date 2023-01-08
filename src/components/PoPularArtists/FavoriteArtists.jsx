import React from 'react'
import FavoriteArtistsCardItem from './FavoriteArtistsCardItem';
import FavoriteArtistsShimmer from './FavoriteArtistsShimmer';

function FavoriteArtists({items, loading}) {
    return (
        <>
            <div className={`flex flex-row w-full  justify-between px-[22px]`}>
                <p className='text-white fa-format-500 text-[18px]'
                >
                    هنرمندان محبوب
                </p>
            </div>
            <div
                className="!w-full mt-[12px] "
            >
                <div className='w-full grid grid-cols-2  m-auto  gap-3 px-[22px] justify-between items-center '>
                    {loading ? Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) =>
                            <>
                                <FavoriteArtistsShimmer/>
                            </>
                        ))
                        : items?.map(item =>
                            <FavoriteArtistsCardItem item={item}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default FavoriteArtists