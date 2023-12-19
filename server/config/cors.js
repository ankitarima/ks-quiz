// CORS configuration
export const cors_options = {
  origin: ["*"],
  methods: ["GET", "POST", "DELETE", "PUT", "FETCH"],
  allowedHeaders: ["Content-Type", "authorization", "user_type"],
  credentials: true,
};
