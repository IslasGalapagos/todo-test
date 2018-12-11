/** @jsx jsx */
import {jsx} from '@emotion/core';

import TodoItem from './TodoItem';

const stylesForMessage = {
  fontSize: '30px',
  padding: '0 0 25px 0',
  margin: 0
};

const stylesForList = {
  listStyle: 'none',
  padding: 0,
  margin: '0 0 25px 0'
};

class TodoList extends React.PureComponent {
  render() {
    const {todos} = this.props;

    if (!todos.length) {
      return <p css={stylesForMessage}>You haven't any todos yet.</p>;
    }

    const todosElements = todos.map((todo, index) => (
      <TodoItem text={todo} key={index} />
    ));

    return <ul css={stylesForList}>{todosElements}</ul>;
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
