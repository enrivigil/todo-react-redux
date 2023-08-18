import { Button, ListGroupItem } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeTodo, markTodoAsCompleted } from '../features/todosSlice'

const TodoItem = ({ item }) => {

    const dispatch = useDispatch()

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }

    const handleMarkTodoAsCompleted = (id) => {
        console.log('click');
        dispatch(markTodoAsCompleted(id))
    }

    return <>
        <ListGroupItem>
            <div className='d-flex align-items-center justify-content-between'>
                <div>
                    <p className='mb-0'>{item.description}</p>
                    {
                        !item.completed
                            ? <Button type='button' variant='link' className='p-0' onClick={() => handleMarkTodoAsCompleted(item.id)}>Mark as completed</Button>
                            : <span className='text-success'>Completed</span>
                    }
                </div>
                <div>
                    <Button type='button' variant='dark' onClick={() => handleRemoveTodo(item.id)}>Remove</Button>
                </div>
            </div>
        </ListGroupItem>
    </>
}

export default TodoItem
