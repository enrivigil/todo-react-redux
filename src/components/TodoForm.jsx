import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/todosSlice'

const TodoForm = () => {

    const todos = useSelector((state) => state.todos.data)
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')

    const handleAddtodo = (e) => {
        e.preventDefault()

        if (description == '') {
            alert('Fill the filed')
            return
        }

        let item = {
            id: todos.length + 1,
            description,
            completed: false
        }

        dispatch(addTodo(item))

        setDescription('')
    }

    const handleChageDescription = (e) => {
        const { value } = e.target

        setDescription(value)
    }

    return <>
        <div className='mx-auto' style={{ maxWidth: 760 }}>
            <Form onSubmit={handleAddtodo}>
                <Form.Group className='mb-3'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' onChange={handleChageDescription} value={description} />
                </Form.Group>

                <Button type='submit' variant='dark'>Add todo</Button>
            </Form>
        </div>
    </>
}

export default TodoForm
