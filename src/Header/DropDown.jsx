
function Dropdown({setIsOpen,isOpen}) {
  // const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown block lg:hidden">
      <button className="dropdown-button px-2 py-1 rounded-lg mr-3 bg-[#8AD024] text-white text-xl" onClick={toggleDropdown}>
        {isOpen ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
      </button>
    </div>
  )
}

export default Dropdown;
