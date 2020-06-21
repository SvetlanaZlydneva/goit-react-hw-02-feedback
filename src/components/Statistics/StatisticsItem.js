import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatisticsItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {
    const { name, value } = this.props;
    return (
      <>
        {name} : {name === 'positive feedback' ? value + '%' : value}
      </>
    );
  }
}

export default StatisticsItem;
