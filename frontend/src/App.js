import './App.css';
import ToDoList from './components/toDoList';
import AddToDoItem from './components/addToDoItem';

function App() {
  return (
    <section className="App">
      <h1>Meine TodoListe</h1>
      <AddToDoItem />
      <ToDoList />
    </section>
  );
}

export default App;
