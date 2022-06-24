export default function TopicInput(props) {
  return (
    <div>
      <input
        placeholder="Enter Topic Here..."
        maxLength={50}
        onChange={(e) => props.topicChange(e)}
      />
    </div>
  );
}
