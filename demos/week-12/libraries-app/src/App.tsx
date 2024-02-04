import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import LibrariesList from './components/LibrariesList/LibrariesList';
import LibraryDetails from './components/LIbraryDetails/LibraryDetails';

function App() {
  return (
    <>
      <Menu />
      <Container className="mt-4">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<LibrariesList />} path="/libraries" />
          <Route element={<LibraryDetails />} path="/libraries/:id" />
        </Routes>
      </Container>
    </>
  );
}

export default App;
