import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {

    const todos = useSelector((state) => state.todos.data)
    const filter = useSelector((state) => state.todos.filter)

    return <>
        <div className='mx-auto my-3' style={{ maxWidth: 760 }}>
            <ListGroup>
                {
                    todos.length > 0
                        ?
                        todos
                            .filter(todo => {
                                if (filter == 'active') return todo.completed == false
                                else if (filter == 'completed') return todo.completed == true
                                else return todo
                            })
                            .map(todo => <TodoItem item={todo} key={todo.id} />)
                        : <ListGroup.Item>No items yet</ListGroup.Item>
                }
            </ListGroup>
        </div>
    </>
}

export default TodoList
