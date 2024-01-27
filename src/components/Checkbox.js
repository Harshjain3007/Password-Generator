const checkbox = ({ title, state, onchange }) => {
  return (
    <div>
      <input type="checkbox" onChange={onchange} checked={state} />
      <label>{title}</label>
    </div>
  );
};

export default checkbox;
