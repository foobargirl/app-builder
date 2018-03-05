import React from 'react';
import PropTypes from 'prop-types';
import WidgetListRow from 'ui/widgets/list/WidgetListRow';

export const renderRow = item => (
  <WidgetListRow
    key={item.code}
    name={item.name}
    type={item.type}
  />
);

const RowList = ({ tableRow }) =>
  (
    tableRow.map(item => (
      renderRow(item)
    )));
WidgetListRow.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default RowList;
