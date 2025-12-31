import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
