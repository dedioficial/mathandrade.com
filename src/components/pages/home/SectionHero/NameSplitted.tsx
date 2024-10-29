import { Fragment } from "react";
import CSS from "./style.module.css";

const NameSplitted = () => {
  const name = "Matheus N. Andrade".split("");
  const nameLetters = [];
  let count_spacer = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] == "" || name[i] == " ") {
      if (count_spacer == 0) {
        nameLetters.push(
          <span className={`${CSS.name_letter_spacer} md:mx-2 mx-1`}></span>
        );
      } else {
        nameLetters.push(
          <span
            className={`${CSS.name_letter_spacer} ${CSS.name_letter_space_last} md:mx-2 mx-1`}
          ></span>
        );
      }
      count_spacer++;
      continue;
    }

    nameLetters.push(
      <span className={`${CSS.name_letter} rubberBand`}>{name[i]}</span>
    );

    if (i == name.length - 1) {
      nameLetters.push(
        <span className={`${CSS.name_letter} rubberBand`}>,</span>
      );
    }
  }

  return (
    <h1
      className={`name font-semibold md:text-7xl text-5xl ${CSS.h1} text-center`}
    >
      {nameLetters.map((letter, i) => (
        <Fragment key={i}>{letter}</Fragment>
      ))}
    </h1>
  );
};

export default NameSplitted;