import logo from './logo.svg';
import './App.css';
import AddTodo from './features/todo/AddTodo';
import Todos from './features/todo/Todos';

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <Todos/>
    </div>
  );
}

export default App;
