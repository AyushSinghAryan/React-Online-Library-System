import { Outlet } from "react-router-dom";
import NavBar from "./components/ Navbar";
import { Provider } from "react-redux";
import { store } from "./utils/store";
function App() {

  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Outlet />
      </Provider>
    </>
  )
}

export default App
