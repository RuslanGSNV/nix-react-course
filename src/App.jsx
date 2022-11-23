
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from './components/HomePage';
import { store } from './rdx';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
