import {hot} from 'react-hot-loader';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Global} from '@emotion/core';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import {addTodo} from '../store/actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(todoText) {
    try {
      this.props.addTodo(todoText);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {todos} = this.props;

    return (
      <React.StrictMode>
        <Global
          styles={{
            body: {
              fontFamily: '"Helvetica Neu",Helvetica,Arial',
              padding: '25px',
              backgroundColor: '#f9f9f9'
            }
          }}
        />

        <TodoList todos={todos} />
        <AddTodoForm onSubmit={this.onFormSubmit} />
      </React.StrictMode>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  todos: store.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: todoText => dispatch(addTodo(todoText))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  hot(module)
)(App);
