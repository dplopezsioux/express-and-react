import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from '../src/App';

const serverRender = (req) => {
  try {
    return ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );
  } catch (error) {
    return error;
  }
};

export default serverRender;
