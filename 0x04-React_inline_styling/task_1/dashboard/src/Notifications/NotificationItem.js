import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const itemStyle = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <li
        className={css(itemStyle)}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html}
      >
        {!html && value}
      </li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;
