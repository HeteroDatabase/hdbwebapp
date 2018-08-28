//import Raven from "raven-js";
function init() {
  //   Raven.config(
  //     ""
  //   ).install();
}

function log(error) {
  //   Raven.captureException(error);
  console.error(error);
}

export default {
  init,
  log
};
