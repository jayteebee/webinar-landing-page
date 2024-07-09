import React from 'react';

const WebinarThankYou = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Thank you for registering to our Thermal Vision Ecology webinar!</h1>
        <p className="text-lg text-center">
          Check your email for confirmation and your calendar invite.
        </p>
        <div className='pt-12'>
        <img src="https://i.ibb.co/zXtQ8Rt/Eco-Thank-You-Flyer-Bat-1.png" alt="Webinar-Thank-You-Flyer-2" border="0" />
        </div>
        </div>
    </div>
  );
}

export default WebinarThankYou;
