import * as React from "react";
import PropTypes from "prop-types";
import {Global} from "@emotion/react";
import {styled} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const drawerBleeding = 56;
const Root = styled("div")(({theme}) => ({
    height: "100%",
    fontFamily: "iranSans",
}));

const StyledBox = styled(Box)(({theme}) => ({
    backgroundColor: "#28242D",
}));

const Puller = styled(Box)(({theme}) => ({
    width: 88,
    height: 4,
    backgroundColor: "#5E6272",
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 88px/2 - 2px)",
}));

function SwipeBottomSheet(props) {
    const {window, Content, Header, toggleDrawer, open, contentPaddingBottom} = props;
    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div className="fa-format-500">
            <Root>
                <CssBaseline/>
                <Global
                    styles={{
                        ".MuiDrawer-root > .MuiPaper-root": {
                            overflow: "visible",
                        },
                    }}
                />
                <SwipeableDrawer
                    sx={{
                        "& .MuiPaper-root": {
                            maxWidth: "480px",
                            margin: "auto",
                            borderRadius: 30,
                            backgroundColor: "#28242D",
                        },
                    }}
                    transitionDuration={{
                        enter: 100,
                        exit: 200,
                    }}
                    container={container}
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={true}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <StyledBox
                        sx={{
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                            right: 0,
                            left: 0,
                            px: "22px",
                            pt: "36px",
                            pb: "24px",
                            fontSize: "20px",
                        }}
                    >
                        <Puller/>
                        {Header}
                    </StyledBox>

                    <StyledBox
                        sx={{
                            px: "22px",
                            pb: contentPaddingBottom ? '0' : "32px",
                            height: "100%",
                            overflow: "auto",
                        }}
                    >
                        <Box sx={{fontSize: 24}}>{Content}</Box>
                    </StyledBox>
                </SwipeableDrawer>
            </Root>
        </div>
    );
}

SwipeBottomSheet.propTypes = {
    window: PropTypes.func,
};

export default SwipeBottomSheet;
