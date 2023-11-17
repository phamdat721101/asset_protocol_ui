"use client";
import React, { useState } from 'react';

const DepositForm = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();

    // Submit the form data to the server
    const data = {
      amount: amount,
    };

    console.log(amount)
    console.log(data)

    // fetch('/api/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       // Handle successful submission
    //       console.log('Form submitted successfully');
    //     } else {
    //       // Handle submission error
    //       console.error('Form submission failed:', data.error);
    //     }
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DepositForm;