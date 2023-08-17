import styled from "@emotion/styled";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import { toast } from "react-toastify";
import { useCSVReader } from "react-papaparse";
import { useEffect, useState } from "react";
import ResultBox from "./resultBox";

export default function InputBox() {
  const { CSVReader } = useCSVReader();
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<any>("");
  const [rootHash, setRootHash] = useState("");
  const [lines, setLines] = useState<string[]>([]);

  const handleCSVfile = (data: string[][]) => {
    console.log(data);
  };

  const onClickGenerate = () => {
    // TODO: generate whitelist
    setResult("1234");
    setRootHash("0x000000000000000000000000000000000000bEEF");
    // toast error example
    toast.error("Error: something went wrong");
  };
  const handleClearResult = () => {
    setResult("");
    setRootHash("");
  };

  useEffect(() => {
    const formatNumber = (n: number) => {
      if (n < 10) {
        return `0${n}`;
      } else {
        return `${n}`;
      }
    };
    const num = inputValue.split("\n");
    setLines(num.map((_, i) => formatNumber(i + 1)));
  }, [inputValue]);

  return (
    <InputBoxStyle>
      {result ? (
        <ResultBox
          data={result}
          rootHash={rootHash}
          handleClose={handleClearResult}
        />
      ) : (
        <>
          <MainInputBox>
            <ul className="line">
              {lines.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="input">
              <Textarea
                variant="solid"
                placeholder="Type anything…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                minRows={15}
                sx={{
                  "--Textarea-focusedHighlight": "unset",
                }}
                style={{ background: "unset" }}
              />
            </div>
          </MainInputBox>

          <ChooseFileBox>
            <CSVReader
              onUploadAccepted={(results: { data: string[][] }) => {
                handleCSVfile(results.data);
              }}
            >
              {({ getRootProps }: { getRootProps: () => object }) => (
                <Button variant="plain" color="warning" {...getRootProps()}>
                  {" "}
                  Choose a .csv file
                </Button>
              )}
            </CSVReader>
            <Button
              variant="solid"
              color="warning"
              className="btn-generate"
              onClick={onClickGenerate}
            >
              Generate Whitelist
            </Button>
          </ChooseFileBox>
        </>
      )}
    </InputBoxStyle>
  );
}

const InputBoxStyle = styled.div``;

const ChooseFileBox = styled.div`
  margin-top: 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  .btn-generate {
    flex: 1;
  }
`;

const MainInputBox = styled.div`
  background-color: #636b74;
  border-radius: 6px;
  display: flex;
  height: 376px;
  overflow-y: auto;
  .line {
    margin: 0;
    min-width: 50px;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    padding-block: 8px;
    list-style: none;
    padding-left: 0;
    color: rgba(0, 0, 0, 0.5);
    li {
      line-height: 1.5;
    }
  }
  .input {
    flex: 1;
  }
`;
