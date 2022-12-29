import { useEffect, useState } from "react";
import ToDoItem from "./toDoItem";

function ToDoList() {
    const [toDos, setToDos] = useState([]);
    const [errorRelod, seterrorRelod] = useState();

    useEffect(() => {
        fetch("http://localhost:9898/todo")
            .then(res => res.json())
            .then(data => { setToDos(data); })
            .catch(err => seterrorRelod(Math.random));
    });
    return (
        <>
            {toDos.map((todo, index) => <ToDoItem todo={todo} c={index} />)}
        </>
    );
}

export default ToDoList;