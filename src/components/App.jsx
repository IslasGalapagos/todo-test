import {hot} from 'react-hot-loader';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Global} from '@emotion/core';

import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

import {addTodo, getTodos} from '../store/actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  onFormSubmit(todoText) {
    this.props.addTodo(todoText);
  }

  render() {
    const {todos, loader, addTodoLoader} = this.props;

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

        {loader ? (
          <span>
            <i>Loading...</i>
          </span>
        ) : (
          <React.Fragment>
            <TodoList todos={todos} />
            <AddTodoForm onSubmit={this.onFormSubmit} loader={addTodoLoader} />
          </React.Fragment>
        )}
      </React.StrictMode>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  loader: PropTypes.bool.isRequired,
  addTodoLoader: PropTypes.bool.isRequired,
  addTodo: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  todos: store.todos,
  loader: store.loader,
  addTodoLoader: store.addTodoLoader
});

const mapDispatchToProps = dispatch => ({
  addTodo: todoText => dispatch(addTodo(todoText)),
  getTodos: todoText => dispatch(getTodos())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  hot(module)
)(App);
