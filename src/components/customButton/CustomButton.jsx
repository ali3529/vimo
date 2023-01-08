import * as React from 'react';
import {Button} from '@mui/material';
import CircularProgress from "@mui/material/CircularProgress";
import {Box} from '@mui/system';

export const CustomButton = ({id, children, color, onClick, Loading = false, size = 30, ...rest}) => {
    return (
        <div>
            <Button
                onClick={onClick}
                className='!bg-blue !w-[148px] !h-[48px] !text-white !fa-format-300 !text-[1.6rem] !rounded-full flex items-center justify-center'
                sx={{fontFamily: "iransansXV", color: "white !important"}}
            >
                {Loading ?
                    (
                        <Box sx={{display: "flex"}}>
                            <CircularProgress color="inherit" size={size}/>
                        </Box>
                    )
                    :
                    (
                        children
                    )
                }
            </Button>
        </div>

    );
};