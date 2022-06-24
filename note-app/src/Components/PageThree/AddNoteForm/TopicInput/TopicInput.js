import Style from "./TopicInput.module.css"

export default function TopicInput(props) {
  return (
    <div className={Style.TopicInput}>
      <input
        placeholder="Enter Topic Here..."
        maxLength={50}
        onChange={(e) => props.topicChange(e)}
      />
    </div>
  );
}
