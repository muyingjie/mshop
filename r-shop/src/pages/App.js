import React from 'react';

import {Link} from 'react-router';
import {view as LeftNav} from '../components/LeftNav';

const App = ({children}) => {
  return (
    <div className="wrap">
        <div className="top-bar">
            <Link to="/" className="logo">Logo</Link>
        </div>
        <div className="clear">
            <div className="nav-wrap fl">
                <LeftNav />
            </div>
            <div className="main bd fl">
                <div className="content">{children}</div>
            </div>
        </div>
    </div>
  );
};

export default App;
