/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} RemainingTime
 * @property {number} years
 * @property {number} days
 * @property {number} hours
 * @property {number} minutes
 * @property {number} seconds
 */

/**
 * Returns the years, days, hours, minutes, and seconds until a given date
 * @param {Date} eventDate
 * @returns {RemainingTime}
 */
export const getRemainingTime = (eventDate) => {
    var now = new Date().getTime();
    const isEventDateInTheFuture = eventDate.getTime() - now > 0 ? true : false;

    let distance;
    if (isEventDateInTheFuture) {
        distance = eventDate.getTime() - now;
    } else {
        distance = now - eventDate.getTime();
    }

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let remainingTime;
    if (isEventDateInTheFuture) {
        remainingTime = {
            years,
            days,
            hours,
            minutes,
            seconds
        };
    } else {
        remainingTime = {
            years: years * -1,
            days: days * -1,
            hours: hours * -1,
            minutes: minutes * -1,
            seconds: seconds * -1
        };
    }
    return remainingTime;
};