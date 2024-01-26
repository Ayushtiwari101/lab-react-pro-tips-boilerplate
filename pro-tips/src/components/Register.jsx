import { useState } from "react"
import './Reg.css'

function Contact () {
    
  const [ formData, setFormData] = useState({
    firstName : '',
    lastName : '',
    email : '',
    phoneNumber : '',
  })

  const [ alerts, setAlerts] = useState({
    firstName : '',
    lastName : '',
    email : '',
    phoneNumber : '',
  })

  const [ focusState, setFocusState] = useState({
    firstName : false,
    lastName : false,
    email : false,
    phoneNumber : false,
  })

  const [ registrationSuccess, setRegistrationSuccess] = useState(false)
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}))
  }

  const handleFocus = (name) => {
    setFocusState((prevfocusState) => ({...prevfocusState, [name]: true}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlerts = {};

    if(formData.firstName === '') {
      newAlerts.firstName = "Please Enter Your First Name.";
    } else {
      newAlerts.firstName = '';
    }

    if(formData.lastName === '') {
      newAlerts.lastName = "Please Enter Your Last Name.";
    } else {
      newAlerts.lastName = '';
    }

    if(formData.phoneNumber === '') {
      newAlerts.phoneNumber = "Please Enter Your Phone Number.";
    } else {
      newAlerts.phoneNumber = '';
    }

    if(formData.email === '') {
      newAlerts.email = "Please Enter Your Email.";
    } else {
      newAlerts.email = '';
    }

    setAlerts(newAlerts)

    if (
      newAlerts.firstName === ''  &&
      newAlerts.lastName === ''  &&
      newAlerts.phoneNumber === ''  &&
      newAlerts.email === ''
    ) {
      setRegistrationSuccess(true)
    }
  }

  return(
    <>
    <div className='App'>
      {registrationSuccess && (
        <div  style={{backgroundColor: 'blue', color: 'white', padding: '10px', marginTop: '10px', marginBottom: '5px', borderRadius: '8px', width: '397px', textAlign: 'center'}}>
          Registration Successful!

        </div>
      )}

       <form onSubmit={handleSubmit}>
         <label>
        <input type='text' name="firstName" value={formData.firstName} 
        onChange={handleChange} placeholder="First name"
        onFocus={() => handleFocus('firstName')}
        style={{borderColor : focusState.firstName ? 'navy' : '#ccc'}} /> 
         <div className='alert'>{alerts.firstName}</div>
        </label>
        <br />

        <label>
        <input type='text' name="lastName" value={formData.lastName} 
        onChange={handleChange} placeholder="Last name"
        onFocus={() => handleFocus('lastName')}
        style={{borderColor : focusState.lastName ? 'navy' : '#ccc'}} /> 
         <div className='alert'>{alerts.lastName}</div>
        </label>
        <br />

        <label>
        <input type='email' name="email" value={formData.email} 
        onChange={handleChange} placeholder="Email"
        onFocus={() => handleFocus('email')}
        style={{borderColor : focusState.email ? 'navy' : '#ccc'}} /> 
         <div className='alert'>{alerts.email}</div>
        </label>
        <br />

        <label>
        <input type='tel' name="phoneNumber" value={formData.phoneNumber} 
        onChange={handleChange} placeholder="Phone Number"
        onFocus={() => handleFocus('phoneNumber')}
        style={{borderColor : focusState.phoneNumber ? 'navy' : '#ccc'}} /> 
         <div className='alert'>{alerts.phoneNumber}</div>
        </label>
        <br />

         <button type='submit' style={{backgroundColor: 'green', color : 'white', padding : '10px', border : 'none', cursor : 'pointer' }}> Register </button>
       </form>
    </div>
    </>
  )
}
export default Contact