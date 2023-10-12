import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const votes = Object.values(feedback);
    return votes.reduce((acc, vote) => acc + vote, 0);
  };

  const countPositiveFeedbackPercentage = (totalVotes, good) => {
    return Math.round((good / totalVotes) * 100);
  };

  const onLeaveFeedback = key => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [key]: prevFeedback[key] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);
  const totalVotes = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(totalVotes, good);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      {totalVotes ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalVotes={totalVotes}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
