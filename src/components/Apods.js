import React from "react";
import {
  ApodsContainerStyled,
  ApodContainerStyled,
  ApodDateStyled,
  ApodInfoContainerStyled,
  ApodTitleStyled,
  HeartStyled
} from "./ApodsStyled";
import DateRange from "./DateRange";

const Apod = ({ ...rest }) => {
  const handleClick = () => {
    let dateLikesRefCopy = { ...rest.dateLikesRef };
    rest.dateLikesRef[rest.date]["liked"] = !dateLikesRefCopy[rest.date][
      "liked"
    ];
    /* Frowned upon, however, a forced re-render is utilized in order 
    to update the useRef dateLikesRef when the heart is clicked. Usually, dateLikesRef would be in a useState in order
    to update state naturally instead of through forced re-renders, however, useState does not 
    contain perpetual data through re-renders which is needed for dateLikesRef
    so as to contain a perpetual reference of all liked photos regardless of date-range and
    whether it changes or not. */
    rest.setDateLikes({ ...rest.dateLikesRef });
  };

  return (
    <ApodContainerStyled apodIdx={rest.index}>
      {rest.media_type === "image" ? (
        <img
          src={rest.imgURL}
          alt={rest.title}
          style={{ width: "100%", margin: "0 auto" }}
        />
      ) : rest.media_type === "video" ? (
        <iframe
          src={rest.imgURL}
          title={rest.title}
          width="100%"
          height="400vw"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : null}
      <ApodInfoContainerStyled>
        <ApodTitleStyled>{rest.title}</ApodTitleStyled>
        <ApodDateStyled>{rest.date}</ApodDateStyled>
        <HeartStyled
          liked={rest.dateLikesRef[rest.date]["liked"]}
          onClick={() => handleClick()}
        />
      </ApodInfoContainerStyled>
    </ApodContainerStyled>
  );
};

export default function Apods({
  apods,
  enteredDate,
  setEnteredDate,
  dateLikesRef,
  dateLikes,
  setDateLikes
}) {
  return (
    <ApodsContainerStyled>
      <DateRange enteredDate={enteredDate} setEnteredDate={setEnteredDate} />
      {apods.length !== 0 &&
        apods.map((apod, index) => (
          <Apod
            key={index}
            date={apod.date}
            imgURL={apod.url}
            title={apod.title}
            media_type={apod.media_type}
            dateLikesRef={dateLikesRef}
            dateLikes={dateLikes}
            setDateLikes={setDateLikes}
            index={index}
          />
        ))}
    </ApodsContainerStyled>
  );
}
