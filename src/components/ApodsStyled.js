import styled from "styled-components";
import { Heart } from "@styled-icons/boxicons-regular";

const ApodsContainerStyled = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;

const ApodContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  ${(props) => (props.apodIdx === 0 ? "border-top-left-radius: 0;" : null)}
  overflow: hidden;
`;

const ApodInfoContainerStyled = styled.div`
  text-align: left;
  margin: 20px;

  @media (max-width: 587px) {
    margin: 15px 20px;
  }
`;

const ApodTitleStyled = styled.div`
  font-size: 24px;
  margin: 5px 0;

  @media (max-width: 587px) {
    font-size: 20px;
  }
`;

const ApodDateStyled = styled.div`
  font-size: 16px;
  font-weight: 300;

  @media (max-width: 587px) {
    font-size: 14px;
  }
`;

const HeartStyled = styled(Heart)`
  width: 30px;
  margin-top: 25px;
  color: #696969;
  cursor: pointer;

  transition: transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @keyframes liked {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      color: red;
      transform: scale(1);
    }
  }

  :active {
    transform: scale(0.8);
    color: red;
  }

  :hover {
    color: #404040;
  }

  ${(props) =>
    props.liked &&
    `
      color: red; 
    
      :hover { 
        color: red; 
      }

      animation: liked 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    `}

  @media (max-width: 587px) {
    width: 23px;
  }
`;

export {
  ApodsContainerStyled,
  ApodContainerStyled,
  ApodDateStyled,
  ApodInfoContainerStyled,
  ApodTitleStyled,
  HeartStyled
};
