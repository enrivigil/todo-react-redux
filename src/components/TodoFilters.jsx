import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllCompletedTodos, changeFilter } from '../features/todosSlice'

const TodoFilters = () => {

    const todos = useSelector((state) => state.todos.data)
    const filter = useSelector((state) => state.todos.filter)
    const dispatch = useDispatch()

    const handleRemoveAllCompletedTodos = () => {
        dispatch(removeAllCompletedTodos())
    }

    const handleChangeFilter = (filter) => {
        dispatch(changeFilter(filter))
    }

    return <>
        <div className='my-4 mx-auto' style={{ maxWidth: 760 }}>
            <Card>
                <Card.Body>
                    <Row className='align-items-center'>
                        <Col sm={12} md={12} lg={4} className='text-start'>
                            {
                                todos
                                    .filter(todo => {
                                        if (filter == 'active') return todo.completed == false
                                        else if (filter == 'completed') return todo.completed == true
                                        else return todo
                                    }).length
                            } Item(s)
                        </Col>
                        <Col sm={12} md={12} lg={4}>
                            <Button type='button' variant='link' className={filter != 'all' ? 'text-muted' : ''}  onClick={() => handleChangeFilter('all')}>All</Button>
                            <Button type='button' variant='link' className={filter != 'active' ? 'text-muted' : ''}  onClick={() => handleChangeFilter('active')}>Active</Button>
                            <Button type='button' variant='link' className={filter != 'completed' ? 'text-muted' : ''}  onClick={() => handleChangeFilter('completed')}>Completed</Button>
                        </Col>
                        <Col sm={12} md={12} lg={4} className='text-end'>
                            <Button type='button' variant='link' onClick={handleRemoveAllCompletedTodos}>Clear completed</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    </>
}

export default TodoFilters
