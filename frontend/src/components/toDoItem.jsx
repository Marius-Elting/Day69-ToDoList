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


function ToDoItem({ todo, c }) {
    const removeItem = (index) => {
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
    return (
        <div onClick={() => {
            removeItem(c);
        }}>
            <p className={todo.state === "solved" ? "solved" : "unsolved"} key={c}>{todo.todo}</p>
        </div>
    );
}

export default ToDoItem;