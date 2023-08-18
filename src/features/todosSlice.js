import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [{
        id: 1,
        description: '📔 Read a book',
        completed: false,
    }],
    filter: 'all'
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.data.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.data = state.data.filter(todo => todo.id != action.payload)
        },
        markTodoAsCompleted: (state, action) => {
            state.data = state.data.map(todo => {

                if (todo.id == action.payload) todo.completed = true

                return todo
            })
        },
        removeAllCompletedTodos: (state) => {
            state.data = state.data.filter(todo => todo.completed == false)
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const { addTodo, removeTodo, markTodoAsCompleted, removeAllCompletedTodos, changeFilter } = todosSlice.actions

export default todosSlice.reducer
