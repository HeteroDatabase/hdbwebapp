import Raven from "raven-js";
function init() {
  Raven.config(
    "https://53a5dfe0979e43ceb772439a3d648821@sentry.io/1269997"
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
