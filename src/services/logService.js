// import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn:
  //     "https://275657d5d8e44309b7c01566a342a5ab@o409632.ingest.sentry.io/5282586",
  // });
}

function log(error) {
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log,
};
