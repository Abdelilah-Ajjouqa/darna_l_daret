import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        searchQuery: '',
        user: null as any,
        notifications: [] as any[]
    },
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload
        }
    }
})

export const store = configureStore({
    reducer: {
        app: appSlice.reducer
    }
})

export const { setSearchQuery, setUser } = appSlice.actions