/** @jsx jsx */
import {jsx} from '@emotion/core';

const styles = {
  fontSize: '20px',
  width: '300px',
  padding: '15px',
  marginBottom: '10px',
  backgroundColor: '#FFF',
  border: '1px solid #DDD',
  borderRadius: '5px'
};

class TodoItem extends React.PureComponent {
  render() {
    const {text} = this.props;

    return <li css={styles}>{text}</li>;
  }
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default TodoItem;
