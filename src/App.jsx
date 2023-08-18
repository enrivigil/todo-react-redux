import { Container } from 'react-bootstrap'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'

const App = () => {
    return <>

        <Container className='my-4'>
            <h4 className='text-center fw-bold'>Todo with React & Redux</h4>

            <TodoForm />
            <TodoList />
            <TodoFilters />

        </Container>

    </>
}

export default App
