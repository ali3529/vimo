import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './redux/store/Store';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { registerSW } from 'virtual:pwa-register'
const persistor = persistStore(store);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));


const updateSW = registerSW({
    onNeedRefresh() {
        console.log("SDfdsfsdfdsfdsfsd");
    },
    onOfflineReady() {  console.log("SDfdsfsdfdsfdsfsd onOfflineReady");},
  })


// const intervalMS = 60 * 60 * 1000

// const updateSW = registerSW({
//   onRegistered(r) {
//     console.log("fsdfsdfsdsdf",r);
//     r && setInterval(() => {
//       r.update()
//     }, intervalMS)
//   },
// })

// if ('serviceWorker' in navigator) {
//     const wb = new Workbox('/sw.js');
//     wb.addEventListener('installed', event => {
//         /**
//          * We have the condition - event.isUpdate because we don't want to show
//          * this message on the very first service worker installation,
//          * only on the updated
//          */
//         if (event.isUpdate) {
//           if (confirm(`New app update is available!. Click OK to refresh`)) {
//             window.location.reload();
//           }
//         }
//       });
//     wb.register();
//   }

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/src/service-worker.js')
//     .then(ress=>{
//         console.log("SERVICE WORKER REGISTERS");
//     })
// }




root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    </BrowserRouter>
);



