import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  onInputChange = (evt) => {
    const term = evt.target.value;

    this.setState({term: term});
    this.props.onSearchInput(term);
  }

  render() {
    return (
      <input 
        className="form-control search-input" 
        type="text" 
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.onInputChange} />
    );
  }
};

export default SearchPanel;