import React from 'react';
import Grid from '@material-ui/core/Grid';
import TodoComponent from './TodoComponent';
import back from "../img/mir.png";

const TodoListComponent = (props) => {
    const {todos, updateTodo, deleteTodo} = props;

    return (
        <Grid item 
            xs={12}>
            <div><img src={back} className={"backcon"}/></div>
            {todos.map((item) => (
                <TodoComponent status={item.status}
                               title={item.title}
                               description={item.description}
                               key={item.id}
                               id={item.id}
                               updateTodo={updateTodo}
                               deleteTodo={deleteTodo}
                />
            ))}
        </Grid>
    );
};

export default TodoListComponent;