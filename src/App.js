import { AuthContextProvider } from "./context/AuthContent";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <>
      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
