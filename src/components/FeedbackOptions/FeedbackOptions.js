import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.buttons}>
        {options.map(option => (
          <button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
