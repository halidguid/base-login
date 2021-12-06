const config = {
  env: "development",
  port: 5000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUrl:
    "mongodb+srv://samsung:samsung@cluster0.gpp4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
};

export default config;
