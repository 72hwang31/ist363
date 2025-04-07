import { useState } from "react";

const items = [
    {id: 101, to_do_item: "Complete Lab 11", status: "not completed"},
    {id: 102, to_do_item: "Review JSX Events and State", status: "not completed"}
];

function App() {
    const [status, setStatus] = useState("not completed");
    let handleClick=()=>{
        setStatus("completed")
    };
    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {items.map(function(item){
                    return (
                        <li key={item.id}>
                            {item.to_do_item}
                            <button onClick={handleClick}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default App;