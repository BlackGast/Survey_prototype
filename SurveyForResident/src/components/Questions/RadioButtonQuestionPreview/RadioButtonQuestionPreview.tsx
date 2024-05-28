import React from "react";
import "../Question.scss";
import { IRadioButtonQuestionPreviewProps } from "./IRadioButtonQuestionPreviewProps";
import { RadioButtonForPreview } from "../../RadioButtonForPreview/RadioButtonForPreview";
import { Label } from "@fluentui/react";
import { IChoice } from "../../../../../SurveyCore/src/model/formElements/IChoice";

export class RadioButtonQuestionPreview extends React.Component<IRadioButtonQuestionPreviewProps> {
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
        <Label id="questionName" required className="question-label_title_name">
          {this.questions.title}
        </Label>
      );
    }
  }

  // private fillAnswer(): string {
  //   let answer: string = "";
  //   this.props.answerModel.answer.map((item) => {
  //     if (item.id === this.props.idStr) {
  //       if (item.answer !== "Нет ответа") {
  //         answer = item.answer;
  //       }
  //     }
  //   });
  //   return answer;
  // }

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
        <RadioButtonForPreview
          // fillAnswer={this.fillAnswer}
          survey={this.props.survey}
          items={this.props.survey.pages[this.props.pageId].panels[0].questions[
            this.props.id
          ].getValue() as IChoice[]}
          setAnswer={this.props.setAnswer}
          idStr={this.props.idStr}
          easyModel={this.props.easyModel}
          pageId={this.props.pageId}
          questionId={this.props.id}
        />
      </div>
    );
  }
}
