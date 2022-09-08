import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStypes from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStypes>
            <App />
        </GlobalStypes>
    </React.StrictMode>,
);
