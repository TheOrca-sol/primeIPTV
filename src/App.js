import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Channels from './pages/Channels';
import Support from './pages/Support';

import { useEffect } from 'react';
import { handleReferral, logDebug } from './utils/referral';

const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#1e40af',
    background: '#ffffff',
    text: '#1f2937',
    accent: '#3b82f6',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  }
};

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  useEffect(() => {
    logDebug('App mounted, checking referral');
    const hasReferral = handleReferral();
    logDebug('Initial referral check result:', hasReferral);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <AppContainer>
            <Navbar />
            <MainContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/channels" element={<Channels />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </MainContent>
            <Footer />
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;