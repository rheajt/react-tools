import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Loading } from '../src/Loading';

const App = () => {
    return (
        <div>
            <Loading />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
