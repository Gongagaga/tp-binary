import "../App.css";

const BaseNumberInput = ({ label, value, onChangeBase }) => {
  const handleChange = (e) => {
    onChangeBase(e.target.value);
  };
  return (
    <div>
      <div className="converter">
        <label>{label}</label><br></br>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <p className="dsl">désolé Jonathan ;C</p>
    </div>
  );
}
export default BaseNumberInput;
