const appconfig = {
  appName: "JavaApp",
  version: "2.0.0",
  apiEndPoints: {
    login: "/api/login",
    register: "/api/register"
  },
  isProduction: false
}

console.log(appconfig.apiEndPoints.login)