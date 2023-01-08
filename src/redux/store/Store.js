import {configureStore} from '@reduxjs/toolkit'
import loginReducer from '../login/LoginSlice'
import initializeReducer from '../initialize/InitializeSlice'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import SelectedTicketReducer from '../ticket/SelectedTicketSlice'
import SearchSliceReducer from '../search/SearchSlice'
import SelectedSortReducer from "../profile/SelectedSort"
const userDataPersistConfig = {
    key: 'userDate',
    storage: storage,
}
const initializeDataPersistConfig = {
    key: 'initialize',
    storage: storage,
};
const CategoryPersistConfig = {
    key: 'category',
    storage: storage,
};const SearchPersistConfig = {
    key: 'search',
    storage: storage,
};
const SortPersistConfig = {
    key: 'sorting',
    storage: storage,
}

export const store = configureStore({
    reducer:
        {
            // category:SelectedTicketReducer,
            sort:persistReducer(SortPersistConfig,SelectedSortReducer),
            category:persistReducer(CategoryPersistConfig,SelectedTicketReducer),
            search:persistReducer(SearchPersistConfig,SearchSliceReducer),
            user: persistReducer(userDataPersistConfig, loginReducer),
            initialize: persistReducer(initializeDataPersistConfig, initializeReducer),
        },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false

        })
})