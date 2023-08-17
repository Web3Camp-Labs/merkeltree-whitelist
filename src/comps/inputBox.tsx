import styled from "@emotion/styled";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import { useCSVReader } from "react-papaparse";
import React, { useState } from "react";
import ResultBox from "./resultBox";

export default function InputBox() {
  const { CSVReader } = useCSVReader();
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<any>("");
  const [rootHash, setRootHash] = useState("");

  const handleCSVfile = (data: string[][]) => {
    console.log(data);
  };

  const onClickGenerate = () => {
    // TODO: generate whitelist
    setResult("1234");
    setRootHash("0x000000000000000000000000000000000000bEEF");
  };
  const handleClearResult = () => {
    setResult("");
    setRootHash("");
  };

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
          <Textarea
            variant="solid"
            placeholder="Type anything…"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            minRows={15}
            maxRows={15}
            sx={{
              "--Textarea-focusedHighlight": "unset",
            }}
          />
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
