import '../styles/globals.css'
import Navigation from '../components/navigation/Navigation'
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";

const pageStyle={
  display:'flex',
  flexDirection:"column",
  height:"100vh",
  width:"100wh",
}


function MyApp({ Component, pageProps }) {
  return(
  <Provider store={store}>
  <div style={pageStyle}>
  <Navigation/>
  <Component {...pageProps} />
  </div>
  </Provider>
  )
}

export default wrapper.withRedux(MyApp);
