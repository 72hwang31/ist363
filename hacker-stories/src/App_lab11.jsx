import { useState } from "react";

function App() {
    let items = [
        {id: 101, to_do_item: "Complete Lab 11", status: "not completed"},
        {id: 102, to_do_item: "Review JSX Events and State", status: "not completed"}
    ];
    let property="text-decoration:none;"
    const handleClick=()=>{
        items.status="completed";
        property="text-decoration:line-through;"
    };
    const handleChange=()=>{

    };
    return (
        <div>
            <head>
            <style>
                li {property}
            </style>
            </head>
            <body>
            <h1>To-Do List</h1>
            <br/>
            <label htmlFor="newtask">Add Task</label>
            <input id="newtask" type="text" onChange={handleChange}/>
            <br/>
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
            </body>
        </div>
    );
};

export default App;