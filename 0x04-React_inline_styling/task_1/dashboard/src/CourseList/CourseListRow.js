import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  th: {
    textAlign: 'left',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
  let content = undefined;

  if (isHeader === true) {
    if (textSecondCell === null) {
      content = <th colSpan='2' className={css(styles.th)}>{textFirstCell}</th>;
    } else {
      content = (
        <Fragment>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </Fragment>
      );
    }
  } else {
    content = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  return <tr className={css(rowStyle)}>{content}</tr>;
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
