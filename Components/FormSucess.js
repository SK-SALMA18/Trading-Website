import React from 'react';
import '../CSS/Login.css';
import image from '../Images/1.jpeg';


const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={image} alt='success-image' />
    </div>
  );
};

export default FormSuccess;