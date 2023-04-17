import '../scss/form.scss';
import '../scss/personal-info.scss';

const steps = document.querySelectorAll(".step");
steps.forEach(btn => btn.addEventListener("click",(e) => {
  e.preventDefault();
  document.querySelector(".step .active").classList.remove("active");
  btn.classList.add("active")
}));
  
function PersonalInfo(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <form action="" className="form">
        <label htmlFor="name">Name<input type="text" name="name" id="name" placeholder="e.g. Stephen King" /></label>
        <label htmlFor="email">Email Address<input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" /></label>
        <label htmlFor="phone">Phone Number<input type="tel" name="phone" id="phone" placeholder="e.g. +1 234 567 890" /></label>
      </form>
    </>
  );
}

export default PersonalInfo;
