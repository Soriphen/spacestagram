import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";
import React from "react";
import {
  DateRangeWrapperStyled,
  TitleStyled,
  SubheadingStyled
} from "./DateRangeStyled";

export default function DateRange({ enteredDate, setEnteredDate }) {
  return (
    <DateRangeWrapperStyled>
      <TitleStyled>
        Spacestagram
        <SubheadingStyled>
          Brought to you by NASA's Astronomy Picture of the Day (APOD) API
        </SubheadingStyled>
      </TitleStyled>
      <DateRangePicker
        startText="Start date"
        endText="End date"
        maxDate={new Date()}
        value={enteredDate}
        onChange={(newDate) => {
          setEnteredDate(newDate);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField sx={{ background: "#fff" }} {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField sx={{ background: "#fff" }} {...endProps} />
          </React.Fragment>
        )}
      />
    </DateRangeWrapperStyled>
  );
}
