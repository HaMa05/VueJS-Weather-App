const url = (json) => {
  return `${json}.json?key=${process.env.VUE_APP_KEY}`;
};
export default {
  current: url('current'),
  forecast: url('forecast'),
};
