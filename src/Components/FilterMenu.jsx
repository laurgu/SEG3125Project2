function FilterMenu({ title, options, handleFilterSelection }) {
    const handleCheckboxChange = (event) => {
      const selectedOption = event.target.value;
      handleFilterSelection(title, selectedOption);
    };
  
    return (
      <div className='filter-menu'>
        <h2>{title}</h2>
        <div className='filter-options'>
          {options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type='checkbox'
                  name={title}
                  value={option}
                  onChange={handleCheckboxChange}
                />{' '}
                {option}
              </label>
            </div>
          ))}
        </div>
        <br />
      </div>
    );
  }
  
  export default FilterMenu;
  