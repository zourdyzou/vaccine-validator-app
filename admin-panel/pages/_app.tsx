import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme, Box } from '@mui/material';

import { Loading } from '@/components/shared/Loading';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utils/createEmotionCache';
import lightThemeOptions from '../styles/theme/lightThemeOptions';

import 'normalize.css';
import '../styles/globals.scss';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  // const { pathname } = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return isLoading ? (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <div className="flex items-center justify-center h-full">
        <Loading />
      </div>
    </Box>
  ) : (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
