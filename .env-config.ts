/** 请求环境配置 */
type ServiceEnv = Record<EnvType, EnvConfig>;

/** 环境配置 */
const serviceEnvConfig: ServiceEnv = {
  dev: {
    url: 'http://47.242.92.239:8000',
    proxy: '/v1',
  },
  test: {
    url: 'http://47.242.92.239:8000',
    proxy: '/',
  },
  prod: {
    url: 'http://47.242.92.239:8000',
    proxy: '/',
  },
};

/**
 * 获取环境配置
 * @param env 环境描述
 */
export function getEnvConfig(env: ImportMetaEnv) {
  const { VITE_ENV_TYPE = 'dev' } = env;

  const envConfig = serviceEnvConfig[VITE_ENV_TYPE];

  return envConfig;
}
