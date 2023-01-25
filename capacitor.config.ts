import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'credifast',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    allowNavigation: ['https://script.google.com/']
  }
};



export default config;
