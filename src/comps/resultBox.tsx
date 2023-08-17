import styled from "@emotion/styled";
import Button from "@mui/joy/Button";
import DoneIcon from "../assets/done.svg";
import CopyIcon from "../assets/copy.svg";

interface IProps {
  rootHash?: string;
  data: object;
  handleClose: () => void;
}

export default function ResultBox({ rootHash, data, handleClose }: IProps) {
  const onClickDownload = () => {
    //   TODO download file
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(data));
    const link = document.createElement("a");
    link.download = "tree.json";
    link.href = dataStr;
    link.click();
  };
  return (
    <ResultBoxStyle>
      <BackStyle onClick={handleClose}>{`<`} Back</BackStyle>

      <img src={DoneIcon} alt="" className="icon" />
      <OutputBox>
        <span>rootHash: {rootHash}</span>
        <img src={CopyIcon} alt="" className="copy" />
      </OutputBox>
      <Button
        variant="solid"
        color="warning"
        className="btn-generate"
        onClick={onClickDownload}
        style={{ width: "200px" }}
      >
        Download
      </Button>
    </ResultBoxStyle>
  );
}

const ResultBoxStyle = styled.div`
  width: 100%;
  height: 436px;
  border-radius: 6px;
  background-color: #636b74;
  box-sizing: border-box;
  padding-block: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .icon {
    width: 50px;
  }
`;

const OutputBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 15px;
  img.copy {
    width: 28px;
    cursor: pointer;
  }
`;

const BackStyle = styled.div`
  font-family: "Rocher";
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 20px;
`;
