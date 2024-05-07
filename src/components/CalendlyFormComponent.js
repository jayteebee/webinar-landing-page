import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Modal from 'react-modal';
import { GDPR } from "../content/content";


import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const GDPRModalContent = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md overflow-y-auto" style={{ maxHeight: '50vh' }}> 
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {GDPR}
      </ReactMarkdown>
    </div>
  );
};

export default GDPRModalContent;


const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Company Name is required'),
  phoneNumber: Yup.number().typeError('Phone Number must be a number').min(1, 'Must be at least 1').max(99999999999, 'Cannot be more than 11 digits. Area Code (+) not required.'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
  gdprConsent: Yup.boolean().oneOf([true], 'You must accept the GDPR terms to register'),
});


const initialValues = {
  companyName: '',
  phoneNumber: 0,
  firstName: '',
  lastName: '',
  email: '',
  gdprConsent: false,
};

Modal.setAppElement('#root');

export const CalendlyFormComponent = ({ CALENDLY_LINK }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
      ? "https://webinarbackend.netlify.app/.netlify/functions"

      : "http://localhost:8888/.netlify/functions",
    headers: {
      'Content-Type': 'application/json',

    },
  });

  const onSubmit = async (values) => {

    try {
      const submissionWithDate = {
        ...values,
        submittedAt: new Date().toISOString() // Adds the current date and time in ISO format
      };
      await axiosInstance.post('/add-row', submissionWithDate);
      console.log('Successful Registration');
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error Registering:', error);
      setSubmitError(true);
    }
    console.log('Registration submitted with values:', values);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      background: 'white',
      overflow: 'hidden', // Hide overflow
      borderRadius: '0.5rem',
      padding: '1rem', // Adjust padding as necessary
      maxWidth: '30%', // Reduce the width to one-third of the full width
      maxHeight: '60vh', // Manage the height to ensure it doesn't take the full screen
      zIndex: '50',
      display: 'flex',
      flexDirection: 'column' // Ensures the button is pushed to the bottom
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: '40'
    }
  };
  

  return (
    <div className="p-4 h-full w-full">

    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="GDPR Terms"
    style={customStyles}

  >
    <h2>GDPR Terms and Conditions</h2>
    <div>

    </div>
    <GDPRModalContent />

    <button onClick={closeModal}>Close</button>
  </Modal>

      <div className="overflow-y-auto shadow-lg rounded-lg h-[85vh] min-w-[30vw] bg-gray-100" style={{minHeight: "75vh"}}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center pt-6"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}>
          Registration Form
        </h1>
        <h3 className="text-lg text-center mb-4">Please fill out the form below to register for the Introduction to Thermal Imaging webinar.<br /> Registration for future webinars will be released soon.</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isValid }) => (
            <Form className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto pb-6">
              <div className="mb-4">
                <label htmlFor="firstName" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>First Name</label>
                <Field type="text" id="firstName" name="firstName" className="w-full border-gray-300 rounded-md p-2  placeholder-black-500" />
                <ErrorMessage name="firstName" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Last Name</label>
                <Field type="text" id="lastName" name="lastName" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" />
                <ErrorMessage name="lastName" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Email</label>
                <Field type="text" id="email" name="email" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" />
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

              <div className="mb-4">
              <label htmlFor="gdprConsent" className="flex items-center">
                <Field type="checkbox" name="gdprConsent" className="mr-2" />
               <p> I accept the {" "} <span onClick={openModal} className="underline cursor-pointer text-blue-600 hover:text-blue-800"> GDPR terms</span>.</p>
              </label>
              <ErrorMessage name="gdprConsent" component="div" className="text-red-600" />
            </div>


              {submitSuccess && (
                <div className="mb-4 text-black">
                  Thank you for registering to our webinar. Check your email for confirmation.
                </div>
              )}
              {submitError && (
                <div className="mb-4 text-black">
                  There was an error registering you for the webinar. Please email jethro@thermalvisionresearch.co.uk with your details. Thank you!
                </div>
              )}


              <div className="flex justify-center w-full pb-4 mb-4">
                <button type="submit" className="bg-black text-white px-4 py-2 rounded-md flex justify-center items-center" >Register</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

