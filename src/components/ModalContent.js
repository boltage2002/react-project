import React, { useState } from 'react';

const ModalContent = ({ handleSubmit, handleCloseModal }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ name, age, email });
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <div className="modal fade" id="modal-content" tabIndex="-1" aria-labelledby="modal-title" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modal-title">Add Information</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name-input">Name:</label>
                <input type="text" id="name-input" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="age-input">Age:</label>
                <input type="text" id="age-input" className="form-control" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="email-input">Email:</label>
                <input type="text" id="email-input" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
