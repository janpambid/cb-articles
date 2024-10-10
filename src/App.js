import React, { useState } from 'react';
import './App.css';
import AppRoutes from './routes';
const App = () => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 return (
<div className="App">
<AppRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
</div>
 );
};
export default App;