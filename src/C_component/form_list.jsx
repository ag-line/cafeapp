/* eslint-disable */

function ListForm(props) {
  return (
    <div className="card">
      <b>{props.name}</b>
      <small> ({props.th})</small>
      <br />
      <h5 className="area">{props.a}</h5>
      <h5 className="gu_si">{props.gu_si}</h5>
      <small>
        <h5 className="dong">({props.d})</h5>
      </small>
      <br />
      <small>
        parking: {props.p} / off: {props.off}
      </small>
    </div>
  );
}
export default ListForm;
