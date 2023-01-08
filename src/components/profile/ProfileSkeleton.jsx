import { Skeleton } from '@mui/material'
import React from 'react'

function ProfileSkeleton({ width, height, mt = 0, ml = 0 }) {
    return (
        <Skeleton
            className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[12px] "
            animation="wave" sx={{ ml: ml, bgcolor: "rgb(110 107 161 / 11%)", animationDuration: "0.8s !important", mt: mt }} variant="rounded" width={width} height={height} />
    )
}

export default ProfileSkeleton