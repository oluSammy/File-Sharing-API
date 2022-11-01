import env from "dotenv";

env.config();

export const appConfig = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "secret",
  databaseUrl: process.env.database_url || "",
  PROJECT_ID: process.env.PROJECT_ID || "",
  private_key_id: process.env.private_key_id || "",
  private_key: process.env.private_key || "",
  client_email: process.env.client_email || "",
  client_id: process.env.client_id || "",
  auth_uri: process.env.auth_uri || "",
  token_uri: process.env.token_uri || "",
  databaseURL: process.env.databaseURL || "",
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url || "",
  client_x509_cert_url: process.env.client_x509_cert_url || "",
};
