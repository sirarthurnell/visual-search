module.exports = {
  baseUrl: getBaseUrl()
}

function getBaseUrl() {
  const isProduction = process.env['NODE_ENV'].indexOf('production') > -1;

  if(isProduction) {
    return `${process.cwd()}/dist/`;
  } else {
    return '/';
  }
}