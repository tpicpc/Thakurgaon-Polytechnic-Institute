
import React, { useState } from 'react';

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="dropdown px-1 text-white rounded-md bg-[#8AD024]">
      <button className="dropdown-button" onClick={toggleDropdown}>
      <i className='bx bx-menu text-xl'></i>
      </button>
      {isOpen && (
          <Nav></Nav>
      )}
    </div>
  );
}
export default DropDown;

function Nav() {
    return (
        <ul className="h-full justify-end gap-6 w-10/12 mx-auto bg-slate-500 text-white px-5">
            <li><a href="#"></a>class </li>
            <li><a href="#"></a>class </li>
        </ul>
    )
  }