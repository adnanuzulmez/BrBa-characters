import BrBaAPI from "./service/BrBaAPI";
function Character({ name }) {
  return (
    <div className="info-card">
      <BrBaAPI name={name} />
    </div>
  );
}

export default Character;
