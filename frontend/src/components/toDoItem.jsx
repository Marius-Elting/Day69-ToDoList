// Der auskommentierte Code ist aus der Version 1.0

// import { useState } from "react";

// function ToDoItem({ todo, c }) {
//     const [removedItems, setremovedItems] = useState([]);
//     return (
//         <div onClick={() => {
//             setremovedItems(prev => ([...prev, c]));
//         }}>
//             <p className={removedItems.includes(c) ? "solved" : "unsolved"} key={c}>{todo.todo}</p>
//         </div>
//     );
// }

// export default ToDoItem;
// import FontAwesomeIcon

function ToDoItem({ todo, c }) {
    const solveItem = (index) => {
        fetch("http://localhost:9898/todo")
            .then(res => res.json())
            .then(data => {
                data[index].state = "solved";
                console.log(data);
                fetch("http://localhost:9898/todo", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });
            });
    };
    const unsolvItem = (index) => {
        fetch("http://localhost:9898/todo")
            .then(res => res.json())
            .then(data => {
                data[index].state = "unsolved";
                console.log(data);
                fetch("http://localhost:9898/todo", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });
            });
    };

    const removeItem = (index) => {
        fetch("http://localhost:9898/todo")
            .then(res => res.json())
            .then(data => {
                data.splice(index, 1);
                console.log(data);
                fetch("http://localhost:9898/todo", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data)
                });
            });
    };
    return (
        <div className={todo.state === "solved" ? "solved todoItem" : "unsolved todoItem"}>
            <p key={c}>{todo.todo}</p>
            <div className="todoItemButtons">
                <button onClick={() => {
                    solveItem(c);
                }}>✔️</button>
                <button onClick={() => {
                    unsolvItem(c);
                }}>❌</button>
                <button onClick={() => {
                    removeItem(c);
                }}>🗑️</button>
            </div>
        </div>
    );
}

export default ToDoItem;