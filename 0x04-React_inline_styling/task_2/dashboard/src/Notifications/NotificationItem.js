import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, html, value, markAsRead, id } = this.props;

    // Define styles based on the 'type' prop
    const notificationStyles = type === 'urgent' ? styles.urgent : styles.default;

    let li;

    if (value) {
      li = (
        <li
          className={`${css(notificationStyles)} ${styles.notificationItem}`}
          data-notification-type={type}
          onClick={() => markAsRead(id)}
        >
          {value}
        </li>
      );
    } else {
      li = (
        <li
          className={`${css(notificationStyles)} ${styles.notificationItem}`}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        ></li>
      );
    }

    return li;
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

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },

  notificationItem: {
    cursor: 'pointer',
  },
});

export default NotificationItem;
