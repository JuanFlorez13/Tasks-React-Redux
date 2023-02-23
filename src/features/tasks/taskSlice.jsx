import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { 
        id: "1", 
        title: "Take out the trash",
        description: "Take out the trash and recycling", 
        completed: false
    },
    { 
        id: "2", 
        title: "Grocery shopping",
        description: "Buy milk, eggs, and bread",
        completed: false
    },
    {
        id: "3",
        title: "Clean gecko tank",
        description: "Clean gecko tank and feed geckos",
        completed: false
    }
];

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const taskFound = state.find( task => task.id === id );
            if (taskFound) {
                taskFound.title = title;
                taskFound.description = description;
            }
        },
        deleteTask: (state, action) => {
            const taskFound = state.find( task => task.id === action.payload );
            if (taskFound) {
                state.splice( state.indexOf(taskFound), 1 );
            }
        }
    }
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;