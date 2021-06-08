import {v4} from 'uuid';
const { createSlice } = require("@reduxjs/toolkit");

const initalState = [
    {
        id: v4(),
        title: 'This is title 1',
        categoryId: 1,
        photo: 'https://picsum.photos/id/299/250/250'
    },
    {
        id: v4(),
        title: 'This is title 2',
        categoryId: 3,
        photo: 'https://picsum.photos/id/302/250/250'
    },
    {
        id: v4(),
        title: 'This is title 3',
        categoryId: 4,
        photo: 'https://picsum.photos/id/549/250/250'
    },
    {
        id: v4(),
        title: 'This is title 4',
        categoryId: 1,
        photo: 'https://picsum.photos/id/69/250/250'
    },
    {
        id: v4(),
        title: 'This is title 5',
        categoryId: 2,
        photo: 'https://picsum.photos/id/10/250/250'
    },
    {
        id: v4(),
        title: 'This is title 6',
        categoryId: 3,
        photo: 'https://picsum.photos/id/415/250/250'
    },
    {
        id: v4(),
        title: 'This is title 7',
        categoryId: 3,
        photo: 'https://picsum.photos/id/804/250/250'
    },
    {
        id: v4(),
        title: 'This is title 8',
        categoryId: 2,
        photo: 'https://picsum.photos/id/405/250/250'
    }
];

const photoSlice = createSlice({
    name: "photoSlice",
    initialState: initalState,
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            state = state.filter(o => o.id !== action.payload);
            return state;
        },
        updatePhoto: (state, action) => {
            const photoIdx = state.findIndex(o => o.id === action.payload.id);
            if(photoIdx >= 0){
                state[photoIdx] = action.payload;
            }
        }
    }
});

const {reducer, actions} = photoSlice;
export const {addPhoto, removePhoto, updatePhoto} = actions;
export default reducer;