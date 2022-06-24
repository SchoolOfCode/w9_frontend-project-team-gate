export default function DateInput(props) {
  return (
    <div>
      <input
        placeholder="(DD-MM-YYY)..."
        maxLength={50}
        onChange={(e) => props.dateChange(e)}
      />
    </div>
  );
}
