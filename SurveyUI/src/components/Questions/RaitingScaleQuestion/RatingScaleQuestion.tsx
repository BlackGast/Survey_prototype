import React from "react";
import "./RaitingScaleQuestion.scss";
import { IRatingScaleQuestion } from "./IRaitingScaleQuestion";
import { DefaultButton, IconButton } from "@fluentui/react";
import { editPen, trashCan } from "../../IProps/IIconProps";

export class RatingScaleQuestion extends React.Component<IRatingScaleQuestion> {
  private ratingNum(): React.ReactNode {
    const maxValue: number =
      this.props.survey.pages[this.props.pageId].panels[0].questions[
        this.props.id
      ].getPropertyByName("maxNum");
    const itemPull: React.ReactNode[] = [];
    for (let i = 0; i < maxValue; i++) {
      const element: React.ReactNode = <p>{i + 1}</p>;
      itemPull.push(element);
    }
    return (
      <>
        {itemPull.map((element, index) => (
          <div className="question_number-items_item" key={index}>
            {element}
          </div>
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
            {this.props.id + 1}.
            <label
              id="questionName"
              style={{
                backgroundColor: "#f5f5f5",
                fontSize: 14,
              }}
            >
              {
                this.props.survey.pages[this.props.pageId].panels[0].questions[
                  this.props.id
                ].title
              }
            </label>
          </div>
          <div className="question_number-items">{this.ratingNum()}</div>
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
            {this.props.id + 1}.
            <label
              id="questionName"
              style={{
                backgroundColor: "#f5f5f5",
                fontSize: 14,
              }}
            >
              {
                this.props.survey.pages[this.props.pageId].panels[0].questions[
                  this.props.id
                ].title
              }{" "}
              *
            </label>
          </div>
          <div className="question_number-items">{this.ratingNum()}</div>
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
