import { useState } from "react";
function AddToDoItem() {
    const [todo, setTodo] = useState();
    const state = "unsolved";
    const addNewItem = () => {
        fetch("http://localhost:9898/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ todo, state })
        });
    };
    return (
        <>
            <input onChange={(e) => setTodo(e.target.value)} placeholder="New Todo Item"></input>
            <button onClick={addNewItem}>Add new Item</button>
        </>
    );
}

export default AddToDoItem;