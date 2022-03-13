module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9dc6bac0d1a1dbb66620841cb0ced629'),
  },
});
