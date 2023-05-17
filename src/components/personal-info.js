import React from "react";

import '../scss/form.scss';
import '../scss/personal-info.scss';
  
function PersonalInfo(props) {
  const updateInputValue = (key, value) => {
    props.onUpdateInputValue('personal', key, value);
  };

  return (
    <>
      <h2 className="title">{props.title}</h2>
      <p className="subtitle">{props.subtitle}</p>
      <form action="" className="form" id="personal-info-form">
        <label htmlFor="name">
          Name
          <span id="name-error" className="error-label">{props.errorMessage.fullName}</span>
          <input value={props.model.fullName} type="text" name="name" id="name" placeholder="e.g. Stephen King" onChange={e => updateInputValue('fullName', e.target.value)} required />
        </label>
        <label htmlFor="email">
          Email Address
          <span id="email-error" className="error-label">{props.errorMessage.email}</span>
          <input value={props.model.email} type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" onChange={e => updateInputValue('email', e.target.value)} required />
        </label>
        <label htmlFor="phone">
          Phone Number
          <span id="phone-error" className="error-label">{props.errorMessage.phone}</span>
          <input value={props.model.phone} type="tel" name="phone" id="phone" placeholder="e.g. 1234567890" onChange={e => this.updateInputValue('phone', e.target.value)} required />
        </label>
      </form>
    </>
  );
}

export default PersonalInfo;
