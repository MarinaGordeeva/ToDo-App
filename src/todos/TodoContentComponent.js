import React from 'react';
import AddTodoComponent from './AddTodoComponent';
import TodoListComponent from './TodoListComponent';
import Grid from '@material-ui/core/Grid';

class TodoContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    addTodo(newTodo) {
        this.setState({
            todos: [].concat(this.state.todos,
                {
                    ...newTodo,
                    id: this.state.todos.length
                }
            )
        });
    }

    updateTodo(updatedTodo) {
        this.setState({
            todos: this.state.todos.map((item) => {
                if (item.id === updatedTodo.id) {
                    return {
                        ...item,
                        ...updatedTodo
                    };
                }
                return item;
            })
        });
    }

    deleteTodo(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)

        });

    }

    render() {
        console.log(this.state.todos);
        return (
            <div className="todo-content">
                <Grid container spacing={3}>
                    <AddTodoComponent addTodo={this.addTodo} />
                    <TodoListComponent todos={this.state.todos}
                                       updateTodo={this.updateTodo}
                                       deleteTodo={this.deleteTodo}
                    />
                </Grid>
            </div>
        );
    }
}

export default TodoContentComponent;