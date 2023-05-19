import IconThankYou from '../images/icon-thank-you.svg';

function ThankYouStep() {
  return (
    <div className="thank-you-step">
      <img src={IconThankYou} alt="svg with confirm picture" className="icon-thank-you" />
      <h2 className="title">Thank you!</h2>
      <p className="subtitle">
        Thanks for confirming your subscription! We hope you have fun using our platform. 
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThankYouStep;
