declare namespace NodeJS {
  interface ProcessEnv {
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_LOGIN: string;
    SMTP_PASSWORD: string;
    SMTP_FROM_NAME: string;
  }
}
