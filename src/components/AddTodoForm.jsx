/** @jsx jsx */
import {jsx} from '@emotion/core';

const stylesForInput = {
  fontSize: '20px',
  width: '300px',
  padding: '15px',
  marginBottom: '10px',
  border: '1px solid #90d1ff',
  outline: 'none',
  borderRadius: '5px'
};

const stylesForButton = {
  fontSize: '20px',
  display: 'block',
  width: '120px',
  padding: '7px',
  backgroundColor: '#90d1ff',
  border: '1px solid #0e9bff',
  outline: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

class AddTodoForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmit(event) {
    this.props.onSubmit(this.state.inputValue);

    this.setState({
      inputValue: ''
    });

    event.preventDefault();
  }

  onInputChange(event) {
    const {value} = event.target;

    if (value.length > 100) {
      return;
    }

    this.setState({
      inputValue: value
    });
  }

  render() {
    const {loader} = this.props;
    const {inputValue} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <textarea
          css={stylesForInput}
          cols='30'
          rows='3'
          value={inputValue}
          onChange={this.onInputChange}
          disabled={loader}
        />
        <button css={stylesForButton} type='submit' disabled={loader}>
          {loader ? 'Loading...' : 'Save'}
        </button>
      </form>
    );
  }
}

AddTodoForm.propTypes = {
  loader: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddTodoForm;
