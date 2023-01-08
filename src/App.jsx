import React, { useEffect } from "react";
import RouteSystem from "./routes/RouteSystem";
import {ToastContainer, Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { setSearchData } from "./redux/search/SearchSlice";

function App() {
    const dispatch=useDispatch()

    //delete Stored Data in routes not necessary just For better UserExperience
    useEffect(() => {
        storeSearchData()
    }, [])
    const storeSearchData=()=>{
        dispatch(setSearchData({search:null,searchKey:""}))
    }

    return (
        <div className="App">
            {/*<Layout>*/}
            <RouteSystem/>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Zoom}
                theme="light"
            />
            {/*</Layout>*/}
        </div>
    );
}

export default App;
