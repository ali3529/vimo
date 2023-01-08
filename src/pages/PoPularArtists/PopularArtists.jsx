import {useMutation} from '@tanstack/react-query'
import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG'
import FavoriteArtists from '../../components/PoPularArtists/FavoriteArtists'
import LastPopularArtist from '../../components/PoPularArtists/LastPopularArtist'
import SearchMagnifierSVG from '../../components/search/assets/SearchMagnifierSVG'
import {ToolBar} from '../../components/ToolBar/ToolBar'
import {getArtists} from '../../service/ApiClient'

function PopularArtists() {
    const [search, setSearch] = useState("")
    const [artist, setArtist] = useState({})
    const getArtistsQuery = useMutation(["getArtistsQuery"], (s) => getArtists(s), {
        onSuccess: (res) => {
            setArtist(res?.data?.result)
        }
    })

    useEffect(() => {
        getArtistsQuery.mutate(search)
    }, [search])

    const handleSearchArtist = (s) => {
        setSearch(s)
    }

    return (
        <div dir="rtl" className='w-full h-full '>
            <div className='w-full h-full overflow-scroll max-w-[480px] mx-auto relative '>
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG/>
                </div>
                <ToolBar title="هنرمندان"/>
                <div className='relative z-10 px-[22px]   mt-28'>

                    <div className="bg-[#28242D] h-[48px] z-20 mt-1 pr-10 rounded-[15px] flex items-center">
                        <SearchMagnifierSVG/>
                        <input
                            className="bg-transparent text-white py-4 pr-4 mb-1 flex-1 mr-1 focus:outline-none text-[1.4rem] fa-format-400 placeholder:text-gray-A"
                            placeholder="جستجو در هنرمندان"
                            value={search}
                            onChange={(e) => handleSearchArtist(e.target.value)}
                        />
                    </div>
                </div>
                <div className='mt-[24px] relative z-20'>
                    <LastPopularArtist
                        loading={getArtistsQuery.isLoading}
                        items={artist?.recently_seen_artists?.artists}
                    />
                </div>
                <div className='mt-[40px] relative z-20  mb-24'>
                    <FavoriteArtists
                        loading={getArtistsQuery.isLoading}
                        items={artist?.popular_artists?.artists}
                    />
                </div>
            </div>
        </div>
    )
}

export default PopularArtists