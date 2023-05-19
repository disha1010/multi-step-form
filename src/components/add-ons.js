import '../scss/add-ons.scss';

const ADD_ONS = [{
    id: 1,
    name: "Online service",
    cost: "1",
    desc: "Access to multiplayer games",
  }, {
    id: 2,
    name: "Large storage",
    cost: "2",
    desc: "Extra 1TB of cloud save",
  }, {
    id: 3,
    name: "Customizable Profile",
    cost: "2",
    desc: "Custom theme on your profile",
  },
]

function AddOns(props) {
  const title = props.title;
  const subtitle = props.subtitle;

  const handleSelectAddon = (isChecked, name, cost) => {
    props.onSelectAddon('addons', isChecked, name, cost);
  }

  return (
    <>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <ul className="add-ons">
        {ADD_ONS.map((item) => 
          <li key={item.id} className={`add-on add-on-${item.id} ${props.model[item.name].isAddonChecked ? 'selected' : ''}`}>
            <input 
              className="add-on-checkbox" 
              type="checkbox" 
              name="add-on-checkbox" 
              onChange={e => handleSelectAddon(e.target.checked, item.name, item.cost)} 
              checked={props.model[item.name].isAddonChecked}
            />
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
