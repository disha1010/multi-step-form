import '../scss/form.scss';
import '../scss/personal-info.scss';

function PersonalInfo() {
  return (
    <>
      <h2 className="title">Personal Info</h2>
      <p className="subtitle">Please provide your name, email address and phone number.</p>
      <form action="" className="form">
        <label htmlFor="name">Name<input type="text" name="name" id="name" placeholder="e.g. Stephen King" /></label>
        <label htmlFor="email">Email Address<input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" /></label>
        <label htmlFor="phone">Phone Number<input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890" /></label>
      </form>
      <button className="button primary">Next step</button>
    </>
  );
}

export default PersonalInfo;
