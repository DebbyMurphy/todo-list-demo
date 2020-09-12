import React, { useState } from "react";
// useState to keep track of what people are typing into the form 

function TodoForm(props) {
    // variables
    const { addTodo } = props;
    const [value, setValue] = useState("");

    // method

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    };

    // templates
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={value}
            placeholder="Add Todo..."
            onChange={(event) => setValue(event.target.value)}
            />
        </form>
    );
}

export default TodoForm;