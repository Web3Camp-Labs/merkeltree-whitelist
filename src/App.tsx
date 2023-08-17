import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import InputBox from "./comps/inputBox";
import LogoBox from "./comps/logo";

function App() {
  return (
    <AppContentStyle className="App">
      <LogoBox />
      <InputBox />
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
      />
    </AppContentStyle>
  );
}

export default App;

const AppContentStyle = styled.main`
  width: 100%;
  min-height: 100%;
  max-width: 800px;
  margin: auto;
  padding-inline: 15px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
`