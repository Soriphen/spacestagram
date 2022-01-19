import { styled } from "@mui/system";
import { css } from "@emotion/react";

// Used specifically for a media query for when DateRangePicker component hits 918px to become centered
const DateRangeWrapperStyled = styled("div")(css`
  display: flex;
  justify-content: space-between;
  @media (max-width: 918px) {
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`);

const TitleStyled = styled("div")(css`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 45px;
  font-weight: 300;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 15px 20px;

  @media (max-width: 918px) {
    font-size: 40px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 0;
  }

  @media (max-width: 587px) {
    font-size: 34px;
  }
`);

const SubheadingStyled = styled("div")(css`
  font-size: 12px;
  margin: 5px 0;
`);

export { DateRangeWrapperStyled, TitleStyled, SubheadingStyled };
