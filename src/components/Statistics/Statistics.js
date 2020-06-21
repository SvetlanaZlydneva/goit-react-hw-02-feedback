import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';

class Statistics extends Component {
  static props = {
    statistics: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  };

  render() {
    const { statistics } = this.props;
    return (
      <ul className={styles.list}>
        {statistics.map((statisticItem, index) => (
          <li className={styles.item} key={index}>
            <StatisticsItem name={statisticItem[0]} value={statisticItem[1]} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Statistics;
