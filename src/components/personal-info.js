import '../scss/app.scss';

function PersonalInfo() {
  return (
    <>
      <h2 className="title">Personal Info</h2>
      <p className="subtitle">Please provide your name, email address and phone number.</p>
      <form action="" className="form">
        <label htmlFor="name"><input type="text" name="name" id="name" placeholder="e.g. Stephen King" /></label>
        <label htmlFor="email"><input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" /></label>
        <label htmlFor="phone"><input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890" /></label>
      </form>
      <button className="button primary">Next step</button>
    </>
  );
}

export default PersonalInfo;
