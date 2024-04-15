import * as React from "react";
import "../Question.scss";
import { Label, TextField } from "@fluentui/react";
import { ITextQuestionPreviewProps } from "./ITextQuestionPreview";

export class TextQuestionPreview extends React.Component<ITextQuestionPreviewProps> {
  private questions =
    this.props.survey.pages[this.props.pageId].panels[0].questions[
      this.props.id
    ];
  private requiredSymbol(): React.ReactNode {
    if (this.questions.required === false) {
      return (
        <Label id="questionName" className="question-label_title_name">
          {this.questions.title}
        </Label>
      );
    }
    if (this.questions.required === true) {
      return (
        <Label id="questionName" className="question-label_title_name" required>
          {this.questions.title}
        </Label>
      );
    }
  }

  public render(): React.ReactNode {
    return (
      <div className="container_page_question">
        <div className="question-label">
          <div className="question-label_title">
            {this.props.id + 1}
            {"."}
            {this.requiredSymbol()}
          </div>
        </div>
        <div className="question-textfield">
          <TextField
            id={`answer-${this.props.pageId}-${this.props.id}`}
            onChange={(e) => {
              this.props.setAnswer(
                this.props.pageId,
                this.props.id,
                e.currentTarget.value
              );
            }}
            onBlur={(e) => {
              if (e.currentTarget.value === "" && this.questions.required === true) {
                console.log("click");
                const tmp = document.getElementById(`answer-${this.props.pageId}-${this.props.id}`)
                
                //tmp?.;
                console.log(tmp?.textContent);
                
              }
            }}
          />
        </div>
      </div>
    );
  }
}
