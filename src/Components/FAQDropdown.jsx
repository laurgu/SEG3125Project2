import React, { useState } from 'react';
import "../Styles/FAQDropdown.css"

function FAQDropdown({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {question}
      </button>
      {isOpen && <div className="dropdown-content">{answer}</div>}
    </div>
  );
}

export default FAQDropdown;
