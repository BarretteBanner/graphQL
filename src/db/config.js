require('dotenv').config();
module.exports = {
  development: {
    use_env_variable: 'POSTGRES_URL',
  },
  production: {
    use_env_variable: 'POSTGRES_URL',
  },
};
