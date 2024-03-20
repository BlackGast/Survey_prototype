import React from "react";
import "../Question.scss";
import { IRadioButtonQuestionProps } from "./IRadioButtonQuestionProps";
import { DefaultButton, IconButton } from "@fluentui/react";
import { editPen, trashCan } from "../../IProps/IIconProps";

export class RadioButtonQuestion extends React.Component<IRadioButtonQuestionProps> {
  private outputSelects(): React.ReactNode {
    const tmp: any =
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].getValue();

    return (
      <>
        {tmp.map((elements: any, index: number) => (
          <div key={index}>{elements.title}</div>
        ))}
      </>
    );
  }

  public render(): React.ReactNode {
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === false
    ) {
      return (
        <div className="container_page_question">
          <div className="question-label">
            <div className="question-label_title">
              {this.props.id + 1}.
              <label
                id="questionName"
                style={{
                  backgroundColor: "#f5f5f5",
                  fontSize: 14,
                }}
              >
                {
                  this.props.survey.pages[this.props.pageId].panels[0]
                    .questions[this.props.id].title
                }
              </label>
            </div>
            <div className="question-label_type">Тип: Radio button question</div>
          </div>
          {this.outputSelects()}
          <div className="question_settings">
            <DefaultButton
              text="Удалить"
              iconProps={trashCan}
              onClick={() => {
                this.props.deleteQuestion(this.props.id, this.props.pageId);
              }}
            />
            <IconButton
              iconProps={editPen}
              onClick={() => {
                this.props.editCurrentItem(
                  "question",
                  this.props.pageId,
                  this.props.id
                );
              }}
            />
          </div>
        </div>
      );
    }
    if (
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].required === true
    ) {
      return (
        <div className="container_page_question">
          <div className="question-label">
            <div className="question-label_title">
              {this.props.id + 1}.
              <label
                id="questionName"
                style={{
                  backgroundColor: "#f5f5f5",
                  fontSize: 14,
                }}
              >
                {
                  this.props.survey.pages[this.props.pageId].panels[0]
                    .questions[this.props.id].title
                }{" "}
                *
              </label>
            </div>
            <div className="question-label_type">Тип: Radio button question</div>
          </div>
          {this.outputSelects()}
          <div className="question_settings">
            <DefaultButton
              text="Удалить"
              iconProps={trashCan}
              onClick={() => {
                this.props.deleteQuestion(this.props.id, this.props.pageId);
              }}
            />
            <IconButton
              iconProps={editPen}
              onClick={() => {
                this.props.editCurrentItem(
                  "question",
                  this.props.pageId,
                  this.props.id
                );
              }}
            />
          </div>
        </div>
      );
    }
  }
}
