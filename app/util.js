const moment = require('moment');

module.exports = {
    minutesFromTimeToNow: (time) => {
        let current = moment(new Date().getTime());
        var duration = moment.duration(current.diff(time));
        let diff = duration.asMinutes();

        return diff;
    }
}