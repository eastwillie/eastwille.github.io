/**
 * @param  {} {format: 'seconds' | 'minutes' | 'hours'}
 */
export const getTimestamp = ({ format }) => {
  const timestamp = new Date().getTime();

  if (['seconds', 'minutes', 'hours'].indexOf(format) === -1) return timestamp;

  const timestampSeconds = Math.floor(timestamp / 1000);

  if (format === 'seconds') return timestampSeconds;

  const timestampMinutes = Math.floor(timestampSeconds / 60);

  if (format === 'minutes') return timestampMinutes;

  const timestampHours = Math.floor(timestampMinutes / 60);

  return timestampHours;
};

export default {
  getTimestamp,
};
