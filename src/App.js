import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/newPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <BrowserRouter>
    <MainNavigation />
    <main>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/places/new" element={<NewPlace />} />
    </Routes>
    </main>
    </BrowserRouter>
  );
};
 
export default App;
