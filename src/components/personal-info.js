import '../scss/form.scss';
import '../scss/personal-info.scss';
  
function PersonalInfo(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <form action="" className="form" id="personal-info-form">
        <label htmlFor="name">Name<span id="name-error" className="error-label">This field is required</span><input type="text" name="name" id="name" placeholder="e.g. Stephen King" required /></label>
        <label htmlFor="email">Email Address<span id="email-error" className="error-label">This field is required</span><input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" required /></label>
        <label htmlFor="phone">Phone Number<span id="phone-error" className="error-label">This field is required</span><input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890" required /></label>
      </form>
    </>
  );
}

export default PersonalInfo;
