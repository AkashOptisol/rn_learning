export interface BrandConfig {
  theme: {
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
  };
  appConfig: {
    bundleId: string;
    applicationId: string;
    appName: string;
  };
  assets: {
    logo: string;
    splashScreen: string;
  };
}

const BRANDS = {
  vestel: {
    theme: {
      primaryColor: '#FF0000',
      secondaryColor: '#FFFFFF',
      fontFamily: 'VestelFont',
    },
    appConfig: {
      bundleId: 'com.vestel.app',
      applicationId: 'com.vestel.app',
      appName: 'Vestel App',
    },
    assets: {
      logo: require('../../assets/brands/vestel/logo.png'),
      splashScreen: require('../../assets/brands/vestel/splash.png'),
    },
  },
  im: {
    theme: {
      primaryColor: '#0000FF',
      secondaryColor: '#FFFFFF',
      fontFamily: 'IMFont',
    },
    appConfig: {
      bundleId: 'com.im.app',
      applicationId: 'com.im.app',
      appName: 'IM App',
    },
    assets: {
      logo: require('../../assets/brands/im/logo.png'),
      splashScreen: require('../../assets/brands/im/splash.png'),
    },
  },
};

export const getBrandConfig = (brand: keyof typeof BRANDS): BrandConfig => {
  return BRANDS[brand];
};
