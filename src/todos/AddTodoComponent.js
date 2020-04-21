import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddTodoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onClickAddTodo = this.onClickAddTodo.bind(this);
    }

    onChangeInput(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    onClickAddTodo() {
        const newTodo = {
            status: false,
            description: "",
            title: this.state.inputValue
        };
        this.props.addTodo(newTodo);
        this.setState({
            inputValue: ''
        });
    }

    render() {
        return (
            <Grid container
                  item
                  xs={12}
                  spacing={3}
                  alignItems="center"
            >
                <Grid item xs={8}>
                    <TextField label="Todo title"
                               variant="outlined"
                               fullWidth
                               value={this.state.inputValue}
                               onChange={this.onChangeInput}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained"
                            color="primary"
                            onClick={this.onClickAddTodo}
                    >
                        Add todo
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

export default AddTodoComponent;