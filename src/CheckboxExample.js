import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    setSelectedValue(isChecked ? 'Yes, I am a Web Developer !!!' : 'No I am not a Web Developer !!!');
  };

  return (
    <div>
      <h2>Are You a web developer ?</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Yes
      </label>
      <label>
        <input
          type="checkbox"
          checked={!isChecked}
          onChange={handleCheckboxChange}
        />
        No
      </label>
     < br/> < br/>
      <button onClick={handleSubmit}>Submit</button>
      <p
        style={{
          color: selectedValue === 'Yes, I am a Web Developer !!!' ? 'green' : 'red',
          fontWeight: 'bold'
        }}
      >
        {selectedValue}
      </p>
    </div>
  );
}

export default CheckboxExample;
