import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const styles = {
    th: {
      textAlign: 'left',
      borderTop: '1px solid gray',
      borderBottom: '1px solid gray',
    },
    evenRow: {
      backgroundColor: '#f5f5f5ab',
    },
    oddRow: {
      backgroundColor: '#deb5b545',
    },
  };

  const rowStyle = isHeader ? {} : isEvenRow ? styles.evenRow : styles.oddRow;
  const content = isHeader ? (
    textSecondCell === null ? (
      <th colSpan='2'>{textFirstCell}</th>
    ) : (
      <>
        <th className={css(styles.th)}>{textFirstCell}</th>
        <th className={css(styles.th)}>{textSecondCell}</th>
      </>
    )
  ) : (
    <>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </>
  );

  return <tr style={rowStyle}>{content}</tr>;
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
