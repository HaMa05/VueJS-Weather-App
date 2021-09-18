import apis from '@/utils/apis';
import axios from '@/utils/axios.config.js';

export const namespaced = true;

export const state = {
  weather: null,
  forecast: null,
};

export const mutations = {
  ADD_INFO(state, payload) {
    state.weather = payload;
    state.forecast = payload.forecast;
  },
};

export const actions = {
  async getCurrentWeather(ctx, { query }) {
    try {
      const res = await axios.get(apis.forecast, {
        params: {
          ...query,
          days: 3,
          aqi: 'no',
          alerts: 'no',
        },
      });
      console.log(res.data);
      ctx.commit('ADD_INFO', res.data);
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
