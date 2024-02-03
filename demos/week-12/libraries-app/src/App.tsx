import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import LibrariesList from './components/LibrariesList/LibrariesList';

function App() {
  return (
    <>
      <Menu />
      <Container className="mt-4">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<LibrariesList />} path="/libraries" />
        </Routes>
      </Container>
    </>
  );
}

export default App;
