import db from "./db/connection.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

db.on("connected", () => {
  console.log("Connected to MongoDB!");
  app.listen(PORT, () =>
    process.env.NODE_ENV === "production"
      ? console.log(
          `Express server application is in production on port ${PORT}`
        )
      : console.log(`Express server application is in local on ${PORT}`)
  );
});
