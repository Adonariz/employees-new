import './app-filter.css';

function AppFilter(props) {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'promotion', label: 'На повышение'},
    {name: 'salary', label: 'З/П больше 1000$'},
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;

    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button 
        onClick={() => props.onFilterSelect(name)} 
        className={`btn ${clazz}`} 
        type="button" 
        data-filter={name} 
        key={name}
      >{label}</button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;
