import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Petitions from './routes/Petitions';
import Login from './routes/login/Login';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import Navbar from './components/navbar/Navbar';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

const App = () => {
  return (
    <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Petitions />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;