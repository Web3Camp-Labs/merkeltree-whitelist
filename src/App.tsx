import styled from "@emotion/styled";
import "./App.css";
import InputBox from "./comps/inputBox";
import LogoBox from "./comps/logo";

function App() {
  return (
    <AppContentStyle className="App">
      <LogoBox></LogoBox>
      <InputBox />
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