import '../scss/add-ons.scss';

const ADD_ONS = [{
    id: 1,
    name: "Online service",
    cost: "1",
    desc: "Access to multiplayer games",
    checkboxValue: "online-service",
  }, {
    id: 2,
    name: "Large storage",
    cost: "2",
    desc: "Extra 1TB of cloud save",
    checkboxValue: "large-storage",
  }, {
    id: 3,
    name: "Customizable Profile",
    cost: "2",
    desc: "Custom theme on your profile",
    checkboxValue: "customizable-profile",
  },
]

function AddOns(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <ul className="add-ons">
        {ADD_ONS.map((item) => 
          <li key={item.id} className={`add-on add-on-${item.id}`}>
            <input type="checkbox" name="add-on-checkbox" value={item.checkboxValue} className="add-on-checkbox" />
            <div className="add-on-info">
              <div className="add-on-name">{item.name}</div>
              <div className="add-on-desc">{item.desc}</div>
            </div>
            <div className="add-on-cost">+${item.cost}/mo</div>
          </li>
        )}
      </ul>
    </>
  );
}

export default AddOns;
