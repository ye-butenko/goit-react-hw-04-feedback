export const Statistics = ({
  good,
  neutral,
  bad,
  totalVotes,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <li>
          <span>Good:</span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral:</span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad:</span>
          <span>{bad}</span>
        </li>
        <li>
          <span>Total:</span>
          <span>{totalVotes}</span>
        </li>
        <li>
          <span>Positive feedback:</span>
          <span>{positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
};
