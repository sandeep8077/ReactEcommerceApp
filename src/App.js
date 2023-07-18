
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.styles.scss";
import { Route, Routes } from "react-router-dom";
import Header from './routes/navigation/Header';
import Home from "./routes/home/home.component";
import AddProd from "./routes/addProductForm/addProd.component";
import ProductDetail from "./components/product-detail/product-detail.component";
import { ToastContainer } from "react-toastify";
import HomeComponent from "./components/home-component/home.component";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="addProd" element={<AddProd />} />
          <Route path="allProds" element={<HomeComponent />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
