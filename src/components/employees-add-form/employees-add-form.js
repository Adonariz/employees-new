import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  generateID() {
    return new Date().valueOf();
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();

    const {name, salary} = this.state;
    const {onAdd} = this.props;

    if (name && salary) {
      const newEmployee = {
        id: this.generateID(),
        name: name,
        salary: salary,
        increase: false,
      }
  
      onAdd(newEmployee);
      this.resetState();
    }
  }

  resetState = () => {
    this.setState({
      name: '',
      salary: '',
    });
  }

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form 
          className="add-form d-flex"
          onSubmit={this.onFormSubmit}>
          <input 
              type="text"
              className="form-control new-post-label"
              placeholder="Как его зовут?"
              name='name'
              value={name}
              onChange={this.onValueChange} />
          <input 
              type="number"
              className="form-control new-post-label"
              placeholder="З/П в $?"
              name='salary'
              value={salary}
              onChange={this.onValueChange} />
  
          <button 
              type="submit"
              className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    );
  }
};

export default EmployeesAddForm;