import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {id: 1, name: 'John Smith', salary: 800, increase: true, promotion: true},
        {id: 2, name: 'Alex Shepard', salary: 3000, increase: false, promotion: false},
        {id: 3, name: 'Biggus Dickus', salary: 5000, increase: false, promotion: false},
      ],
    }
  }

  addItem = (newItem) => {
    this.setState(({data}) => {      
      return {
        data: [...data, newItem],
      }
    });
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(item => item.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after]; 
      
      return {
        data: data.filter(item => item.id !== id),
      }
    });
  }

  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(item => item.id === id);

    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};

    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return {
    //     data: newArr,
    //   };
    // });

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }

        return item;
      })
    }));
  }
  
  onTogglePromotion = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, promotion: !item.promotion}
        }

        return item;
      })
    }));
  }
  
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }

        return item;
      })
    }));
  }

  render() {
    const {data} = this.state;
    const employees = data.length;
    const withBonus = data.filter(item => item.increase === true).length;

    return (
      <div className="app">
        <AppInfo employees={employees} withBonus={withBonus} />
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        
        <EmployeesList 
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployeesAddForm 
          onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;