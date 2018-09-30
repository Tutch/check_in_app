'use strict';
const moment = require('moment');

module.exports = {
    // Returns the difference in minuts from the current time
    // to the time passed on the timestamp.
    minutesFromTimeToNow: (time) => {
        let current = moment(new Date().getTime());
        var duration = moment.duration(current.diff(time));
        let diff = duration.asMinutes();

        return diff;
    }
}