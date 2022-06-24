import Style from "./DateInput.module.css"

export default function DateInput(props) {
  return (
    <div className={Style.DateInput}>
      <input
        placeholder="(DD-MM-YYY)..."
        maxLength={50}
        onChange={(e) => props.dateChange(e)}
      />
    </div>
  );
}
