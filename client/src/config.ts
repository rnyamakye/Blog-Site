interface Config {
  baseURL: string;
}

const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};
  switch (server) {
    case "production":
      config = {
        baseURL: "https://localhost:3000"
      };
      break;
    case "local":
      config = {
        baseURL: "http://localhost:3000"
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "local";
export const config = checkConfig(selectServer) as Config;
