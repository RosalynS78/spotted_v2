import Navigation from './components/Navigation'
import Home from './components/Home'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import store from '../../src/redux/store'
import store from '../src/redux/store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        {/* <Home /> */}
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;