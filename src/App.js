import './App.css';
import Navbar from './Component/Navbar';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Page/Home';
import Cart from './Page/Cart';
import{Provider} from "react-redux"
import store from './Store/store'


function App(){
  return(
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>// it give permission to other to use
    
  )
}

export default App;





