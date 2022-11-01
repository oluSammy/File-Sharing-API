import env from "dotenv";

env.config();

export const appConfig = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "secret",
  databaseUrl: process.env.database_url || "",
  PROJECT_ID: process.env.PROJECT_ID || "",
  private_key_id: process.env.private_key_id || "",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCphL/ER7X59lhq\nt15Rg6HKmme3KKAHU3IOfuf8cw2axk03jPuOh5gq4DU9qP33kmfVMeNWv8Fg8IQJ\ntFNNyqCxsC/uN9HU1EoU+SNmkpWnIOXIt9uNF2kSnKtulddwZA3EfZ6olZNQH+Cs\ntSe+DwbG5U2+GkrPzZfMiQbxqsxg1oufE/P51lrKYTP/5JF0d58d2p0VIySxxMJN\nONuYfcFB3OV1jNgQVs13nWNQ+FGamPKqM6EA0LHNTxQhLIe1HLSjKEBkHE41n9d7\nzizhp5Z9bAh9iEXAa1H/ljDrsX5VTXIdvdD+/G0a7pAhPvzHwPZsK3TA76um6TPp\nrSZKyNg1AgMBAAECggEAKdidRiS1pVjMhrtxSwoFfHAVPj+HEYfl1fI57jWwnA5r\nrVTeHFcYlyz1t5zp5J19iEFib12yrO1yirq6/a8RcAugKVwaLkGhb//4Xy+8RZ93\nWc8ZIYEv7OpD326Z2iK4y1J/Qfp6fQMBgWDOyLoI4DxmrpDq+tUzrcf9sNaK0TR+\nMaC8Rd41hU6+NSKdgiXGCvOYh2KtXmH82Vj5gCsIIzGRCbALC9iXAGOKKMHDAAG+\nyfrh1Ky9njUBhGxTuBazWxP8+Z+YXUhKg9uF09+3vcITf+dbZACy/JBao/XviBWM\nHlsI7LLkdPkc1Uiipc7AbEvqsh0hU5G0wfBSW0vnwQKBgQDT3MyFcKk0bZpjQf7q\n30rtN9mr5RfODX3Kv/PdPnN78sTPWO6z8XCpmJisoN3VcGnue8y58RqaGrIAJy+v\nGRjNEQT5Bf5Htr0eimIZpY3j06BKQ6hfRbth/hDFFsotllEaxaXVO43DwmGzsSb0\nezRjSwt0/6bxHhR454PfPKUEKQKBgQDM1aICevV1jZrtaq6Chg7pRVU6kExU0i1H\n8rQw4BefDxM1fJa5T4wu7rUMEb0QcF3wBqAwNOuSqqDhUTY4t7NWd/mxTKN8Hfgm\nujIqGBedf8U0JYLuDaCKfbfROgJyGkXbKMMFKsP/ZhIaFOy1HwyGCs7OcnOvCQU1\nvqOfrOnVLQKBgEAWreO75eOPOEHIaAXC0FacK4OdRKs3V5Mqp+mIh8S59qFGpMbY\nRZ14JM8rxo9XdyQGXTLuZX6yjqAPOpR8Qg1elaODFZ26ANGpSO27MAX4MafleZyA\naqPFCGumbjiGHTi9C2JKpqLOPWHvN/qC/qD+xZN59pU/5S+B0VmJbd2pAoGASY1I\n0JUwgNapVCljopDa197CnPXlwut5wQUguRAuyznRjvo+8SnkT5H9xuizuCxxPthS\nOx01ngPRIzdTPgiQyDLqoUTAy7fDPLzNeJoQGMkhmfkCS9Lu2+wKzoGDEU/n16uK\nY9eYa6ROSblLyjns+FD3M+CbM7YMfeEHxjWD/b0CgYB2fafBCNi78PH2Igxs0z8a\n0C+ixul++1+dNVE5oq6uDxmkomFVPxVRhFCwRWGhkauz8ch3NtJ3Qr+iuq31jsuj\nCrm0hlTWlnRk16hoQkq2a9vlx61s132wuCSqitbEuYLme7/xXbRxeXZD4Z64hqwz\nosGYbDzyGmPHJkXoQNvsaQ==\n-----END PRIVATE KEY-----\n",
  client_email: process.env.client_email || "",
  client_id: process.env.client_id || "",
  auth_uri: process.env.auth_uri || "",
  token_uri: process.env.token_uri || "",
  databaseURL: process.env.databaseURL || "",
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url || "",
  client_x509_cert_url: process.env.client_x509_cert_url || "",
};
