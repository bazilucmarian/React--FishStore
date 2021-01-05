import ReactDOM from "react-dom";
import App from "./App";
// import { Provider } from "./context/context";
import { Provider as FishProvider } from "./context/fishesContext";
import { Provider as OrderProvider } from "./context/ordersContext";

ReactDOM.render(
  <OrderProvider>
    <FishProvider>
      <App />
    </FishProvider>
  </OrderProvider>,
  document.getElementById("root")
);
