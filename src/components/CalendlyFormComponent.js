import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Company Name is required'),
  phoneNumber: Yup.number().typeError('Phone Number must be a number').required('Phone Number is required').min(1, 'Must be at least 1').max(999999, 'Cannot be more than 999999'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
});


const initialValues = {
  companyName: '',
  phoneNumber: 0,
  firstName: '',
  lastName: '',
  email : ''
};


export const CalendlyFormComponent = ({ CALENDLY_LINK }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  
  const onSubmit = async (values) => {  
  axios.defaults.baseURL = 'http://localhost:3001'; 

    try {
      await axios.post('/', values);
      console.log('Successful Registration');
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error Registering:', error);
      setSubmitError(true);
    }
    console.log('Registration submitted with values:', values);
  };


  return (
    <div className="p-4 h-full w-full">

      <div className="overflow-y-auto shadow-lg rounded-lg h-[85vh] min-w-[30vw] bg-gray-100"> 
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center pt-6"
      style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}>
      Registration Form
    </h1>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto pb-6"> 
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>First Name</label>
            <Field type="text" id="firstName" name="firstName" className="w-full border-gray-300 rounded-md p-2  placeholder-black-500"  />
            <ErrorMessage name="firstName" component="div" className="text-red-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Last Name</label>
            <Field type="text" id="lastName" name="lastName" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500"  />
            <ErrorMessage name="lastName" component="div" className="text-red-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Email</label>
            <Field type="text" id="email" name="email" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500"  />
            <ErrorMessage name="email" component="div" className="text-red-600" />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Company Name</label>
            <Field type="text" id="companyName" name="companyName" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" rows="2" />
            <ErrorMessage name="companyName" component="div" className="text-red-600" />
          </div>
          <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Phone Number (optional)</label>
          <Field type="text" id="phoneNumber" name="phoneNumber" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" inputMode="numeric" pattern="[0-9]*" />
          <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
        </div>
        

          {submitSuccess && (
            <div className="mb-4 text-black">
              Thank you for registering to our webinar.
            </div>
          )}
                        {submitError && (
            <div className="mb-4 text-black">
              There was an error registering you for the webinar. Please email jethro@thermalvisionresearch.co.uk with your details. Thank you!
            </div>
          )}

          <div className="flex justify-center w-full"> 
    <button type="submit" className="bg-black text-white px-4 py-2 rounded-md flex justify-center items-center">Register</button>
  </div>
        </Form>
      )}
    </Formik>
      </div>
      </div>
      );
    };




    // const [key, setKey] = useState(0);

    // // Whenever CALENDLY_LINK changes, update the key to force a re-render of the iframe
    // useEffect(() => {
    //   setKey(prevKey => prevKey + 1);
    // }, [CALENDLY_LINK]);

    // <iframe 
    //   key={key} // Add key prop to force iframe reload when CALENDLY_LINK changes
    //   title="Webinar Sign Up Form"
    //   src={CALENDLY_LINK} 
    //   width="100%" 
    //   height="100%" 

    // >
    //   Loading…
    // </iframe>