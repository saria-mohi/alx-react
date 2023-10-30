// It should import React
import React from 'react';
// import the file Notifications.css.
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';



// It should export a function
export default function Notifications() {
    // It should return a div with the text Here is the list of notifications
    return (
        <div className='Notifications'>
            {/*add a button element with inline styling (without using the CSS file):show button on right side of notifications box,aria-label is Close , when user clicks on the button it logs to the console Close button has been clicked*/}
            <button style={{ float: 'right', backgroundColor: 'white', border: 'none' }} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>            
            <img src={closeIcon} alt="closeicon"  style={{ float: 'right', width:"20px" }} />
                </button>
            <p>Here is the list of notifications</p>
            {/*after the paragraph add an unordered list
the list has the following items:
The first one has a default priority and says New course available
The second one has a urgent priority and says New resume available
Add the priority to the first and second items of the list using a data attribute
The last item correctly displays the content of getLatestNotification using dangerouslySetInnerHTML  */}
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}