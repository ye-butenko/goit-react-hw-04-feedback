import css from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.statList}>
      {options.map((option, index) => {
        return (
          <li className={css.item} key={index}>
            <button
              type="button"
              className={css.label}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
