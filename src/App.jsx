import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { BasketContext } from "./context/BasketContext";

function App(props) {
  return (
    <BasketContext>
      <div className="App">
        <BrowserRouter>
          <Header titleHeader="Qpick" />
          <AppRouter />
          <Footer titleFooter="Qpick" footerCondition="Условия сервиса" />
        </BrowserRouter>
      </div>
    </BasketContext>
  );
}

export default App;
