import React, { useRef, useState } from "react";
import { Stack, CommandBarButton } from "@fluentui/react";
import { TextQuestion } from "./Questions/TextQuestion/TextQuestion";
import { stackStyles } from "../App";
import { IButtonProps } from "./BottonAddQuestion/IButtonProps";
import { SurveyPage } from "./SurveyPage/SurveyPage";
import {
  textDocument,
  checkBox,
  radioBtn,
  calendar,
  ratingStar,
} from "./IProps/IIconProps";
import { ISurveyModel } from "../../../SurveyCore/src/model/ISurveyModel";

interface IButtonCommandBarProps {
  survey: ISurveyModel;
  
}

export const QuestionButtonCommandBar: React.FunctionComponent<
  IButtonProps & IButtonCommandBarProps
> = (
  props
) => {
  // const { disabled, checked, onDeleteQuestion } = props;
  const { disabled, checked } = props;
  //const [elements, setElements] = useState<React.ReactNode[]>([]);
  function addTextQuestion(): void {
    // const newElement = (
    //   <TextQuestion key={elements.length} id={elements.length} survey={props.survey}/>
    // );
    //setElements((prevElement) => [...prevElement, newElement]);
    // console.log(newElement);

  }

  function addCheckboxQuestion(): void {
    // const newElement = (
    //   <CheckboxQuestion key={elements.length} id={elements.length} />
    // );
    //setElements((prevElement) => [...prevElement, newElement]);
    //pageInstance.current?.setProps(newElement);
    // console.log(newElement);
  }

  function addRadioBtnQuestion(): void {
    // const newElement = <RadioButtonQuestion key={elements.length} />;
    // setElements((prevElement) => [...prevElement, newElement]);
    // pageInstance.current?.setProps(newElement);
  }

  function addDataQuestion(): void {
    // const newElement = <DataQuestion key={elements.length} />;
    // setElements((prevElement) => [...prevElement, newElement]);
    // pageInstance.current?.setProps(newElement);
  }

  function addRatingScaleQuestion(): void {
    // const newElement = <RatingScaleQuestion key={elements.length} />;
    // setElements((prevElement) => [...prevElement, newElement]);
    // Page.setProps(newElement);
    // pageInstance.current?.setProps(newElement);
  }

  return (
    <Stack horizontal styles={stackStyles}>
      <CommandBarButton
        iconProps={textDocument}
        text="Text"
        disabled={disabled}
        checked={checked}
        onClick={addTextQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
      <CommandBarButton
        iconProps={checkBox}
        text="Checkboxes"
        disabled={disabled}
        checked={checked}
        onClick={addCheckboxQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
      <CommandBarButton
        iconProps={radioBtn}
        text="Radio Button Text"
        disabled={disabled}
        checked={checked}
        onClick={addRadioBtnQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
      <CommandBarButton
        iconProps={calendar}
        text="Data"
        disabled={disabled}
        checked={checked}
        onClick={addDataQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
      <CommandBarButton
        iconProps={ratingStar}
        text="Rating Scale"
        disabled={disabled}
        checked={checked}
        onClick={addRatingScaleQuestion}
        styles={{ textContainer: { textAlign: "left" } }}
      />
    </Stack>
  );
};
