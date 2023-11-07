import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const bgColor1 = { backgroundColor: '#f5f5f5ab' };
  const bgColor2 = { backgroundColor: '#deb5b545' };
  let bgColor = undefined;
  let content = undefined;

  if (isHeader === true) {
    bgColor = bgColor2;
    if (textSecondCell === null) {
      content = <th colSpan='2'>{textFirstCell}</th>;
    } else {
      content = (
        <Fragment>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </Fragment>
      );
    }
  }
  if (isHeader === false) {
    bgColor = bgColor1;
    content = (
      <Fragment>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </Fragment>
    );
  }

  return <tr style={bgColor}>{content}</tr>;
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

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#deb5b545',
  },
  headerBgColor: '#deb5b545',
  th: {
    textAlign: 'left',
    borderTop: '2px solid gray',
    borderBottom: '2px solid gray',
    fontWeight: 'bold',
  },
  td: {
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
  },
});

export default CourseListRow;
