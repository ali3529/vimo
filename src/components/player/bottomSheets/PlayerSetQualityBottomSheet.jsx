import React from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import CameraIconSVG from "../../common/assets/CameraIconSVG";
import SettingCheckedIconSVG from "../../setting/assets/SettingCheckedIconSVG";

function PlayerSetQualityBottomSheet(props) {
    return (
        <FormControl sx={{ width: "100%" }}>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <div dir="rtl" className="flex flex-col items-start w-full">
                    <Button
                        sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                        className="!flex !gap-4 !items-center !w-full !p-0"
                    >
                        <FormControlLabel
                            sx={{ width: "100%" }}
                            label={
                                <div className="flex items-center gap-4 justify-center">
                                    <div className="w-[24px] h-[16px]">
                                        <CameraIconSVG />
                                    </div>
                                    <Typography sx={{ fontSize: 14, color: "white" }}>
                                        4k
                                    </Typography>
                                </div>
                            }
                            value="4k"
                            control={
                                <Radio
                                    sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 25 },
                                        color: "#6B7280",
                                    }}
                                    checkedIcon={<SettingCheckedIconSVG />}
                                />
                            }
                        />
                    </Button>
                    <Button
                        sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                        className="!flex !gap-4 !items-center !w-full !p-0"
                    >
                        <FormControlLabel
                            sx={{ width: "100%" }}
                            label={
                                <div className="flex items-center gap-4 justify-center">
                                    <div className="w-[24px] h-[16px]">
                                        <CameraIconSVG />
                                    </div>
                                    <Typography sx={{ fontSize: 14, color: "white" }}>
                                        1080p
                                    </Typography>
                                </div>
                            }
                            value="1080p"
                            control={
                                <Radio
                                    sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 25 },
                                        color: "#6B7280",
                                    }}
                                    checkedIcon={<SettingCheckedIconSVG />}
                                />
                            }
                        />
                    </Button>
                    <Button
                        sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                        className="!flex !gap-4 !items-center !w-full !p-0"
                    >
                        <FormControlLabel
                            sx={{ width: "100%" }}
                            label={
                                <div className="flex items-center gap-4 justify-center w-full flex-1">
                                    <div className="w-[24px] h-[16px]">
                                        <CameraIconSVG />
                                    </div>
                                    <Typography sx={{ fontSize: 14, color: "white" }}>
                                        720p
                                    </Typography>
                                </div>
                            }
                            value="720p"
                            control={
                                <Radio
                                    sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 25 },
                                        color: "#6B7280",
                                    }}
                                    checkedIcon={<SettingCheckedIconSVG />}
                                />
                            }
                        />
                    </Button>
                    {/* true code formatting for jsx files */}
                    <Button
                        className="!flex !gap-4 !items-center !w-full !p-0"
                        sx={{ "&:hover": { backgroundColor: "#201d24" } }}
                    >
                        <FormControlLabel
                            sx={{ width: "100%" }}
                            label={
                                <div className="flex items-center gap-4 justify-center">
                                    <div className="w-[24px] h-[16px]">
                                        <CameraIconSVG />
                                    </div>
                                    <Typography sx={{ fontSize: 14, color: "white" }}>
                                        480p
                                    </Typography>
                                </div>
                            }
                            value="480p"
                            control={
                                <Radio
                                    sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 25 },
                                        color: "#6B7280",
                                    }}
                                    checkedIcon={<SettingCheckedIconSVG />}
                                />
                            }
                        />
                    </Button>
                    {/* true format for jsx files */}
                </div>
            </RadioGroup>
        </FormControl>
    );
}

export default PlayerSetQualityBottomSheet;
