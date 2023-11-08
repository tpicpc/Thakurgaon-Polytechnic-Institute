import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isOpen ?<i className='bx bx-x' ></i> :  <i className='bx bx-menu'></i>}
      </button>
      {isOpen && (
        <ul className="dropdown-menu  bg-slate-300 w-full">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;