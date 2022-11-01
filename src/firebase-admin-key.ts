import { appConfig } from "./config/config";

const config = {
  type: "service_account",
  project_id: appConfig.PROJECT_ID,
  private_key_id: appConfig.private_key_id,
  private_key: appConfig.private_key,
  client_email: appConfig.client_email,
  client_id: appConfig.client_id,
  auth_uri: appConfig.auth_uri,
  token_uri: appConfig.token_uri,
  databaseURL: appConfig.databaseURL,
  auth_provider_x509_cert_url: appConfig.auth_provider_x509_cert_url,
  client_x509_cert_url: appConfig.client_x509_cert_url,
};

export default config;
