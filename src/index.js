import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const hasPrerender = container && container.hasChildNodes();

if (hasPrerender) {
  // hydrate if react-snap/SSR pre-rendered HTML exists
  import('react-dom').then(({ hydrate }) => {
    hydrate(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      container
    );
  });
} else {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
reportWebVitals();
