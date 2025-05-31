import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://64e0fd6bb7e479b0ec40a4efc4a9d24b@o4509419355308032.ingest.de.sentry.io/4509419359764560",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});