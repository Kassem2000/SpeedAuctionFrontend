import React, { useState } from 'react'


const SignupPage = () => {
  return (
    <div className="register-form">
      <form>
        <h1>Sign up</h1>
        <div className="input-group">
          <label>
            <input type="text" name="Username" placeholder='Usename'/>
          </label>
          <label>
            <input type="text" name="Firstname" placeholder='FirstName'/>
          </label>
          <label>
            <input type="text" name="lastname"placeholder='LastNAme' />
          </label>
          <label>
            <input type='text' name="phone number" placeholder='Phone'/>
          </label>
          <label>
            
            <input type="text" name="email" placeholder='Email'/>
          </label>
          
        </div>
        <div className="input-group">
        <label>
            <input type="text" name="Adress" placeholder='Address'/>
          </label>
          <label>
            <input type="text" name="Country" placeholder='Country'/>
          </label>
          <label>
            
            <input type="text" name="City" placeholder='City'/>
          </label>
          <label>
            <input type='text' name="postal code" placeholder='Postal Code'/>
          </label>
          <label>
            <input type='text' name="postal code" placeholder='Postal Code'/>
          </label>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  
  )
}

export default SignupPage
