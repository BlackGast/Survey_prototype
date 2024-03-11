import * as React from "react";
import "./SurveyPage.scss";
import { DefaultButton, TextField } from "@fluentui/react";
import { QuestionType } from "../../../../SurveyCore/src/model/QuestionType";
import { TextQuestion } from "../Questions/TextQuestion";
import { CheckboxQuestion } from "../Questions/CheckboxQuestion";
import { RadioButtonQuestion } from "../Questions/RadioButtonQuestion";
import { DateQuestion } from "../Questions/DateQuestion";
import { RatingScaleQuestion } from "../Questions/RatingScaleQuestion";
import { ButtonAddQuestion } from "../BottonAddQuestion/ButtonAddQuestion";
import { Styles } from "./Styles";
import { ISurveyPageState } from "./ISurveyPageState";
import { ISurveyPageProps } from "./ISurveyPageProps";
import { trashCan } from "../IProps/IIconProps";

export class SurveyPage extends React.Component<
  ISurveyPageProps,
  ISurveyPageState
> {
  constructor(props: ISurveyPageProps) {
    super(props);
    this.state = {
      refreshState: false,
    };
  }

  private refreshPage = () => {
    this.setState(() => ({ refreshState: true }));
  };

  componentDidUpdate(): void {
    console.log("componentDidUpdate", this.state.refreshState);
    if (this.state.refreshState === true) {
      this.setState(() => ({ refreshState: false }));
    }
  }

  private renderQuestion(item: QuestionType, id: number): React.ReactNode {
    switch (item) {
      case "Text":
        return (
          <TextQuestion
            id={id}
            survey={this.props.survey}
            deleteQuestion={this.props.deleteQuestion}
          />
        );
      case "Select":
        return <CheckboxQuestion id={id} />;
      case "Choice":
        return <RadioButtonQuestion />;
      case "Date":
        return <DateQuestion />;
      case "Number":
        return <RatingScaleQuestion />;
      default:
        break;
    }
  }

  public render(): React.ReactNode {
    if (this.props.survey.pages.length === 0) {
      return (
        <div className="container">
          <div className="container_title-survey">
            <p>Опрос пустой. Нажмите на кнопку "Добавить вопрос."</p>
            <ButtonAddQuestion addQuestion={this.props.addQuestion} />
          </div>
        </div>
      );
    }
    if (this.props.survey.pages.length !== 0) {
      return (
        <div className="container">
          <div className="container_title-survey">
            <div className="container_title-survey_header">
              <label id="surveyTitle">Название опроса</label>
              <label id="surveyDescription">Описание опроса</label>
            </div>
            <hr />
            {this.props.survey.pages.map((elements, indexPage) => (
              <div key={indexPage} id={`${indexPage}`}>
                <div className="container_page">
                  <div className="container_page_header">
                    <label id="pageTitle">Страница {indexPage + 1}</label>
                    <label id="pageDescription">Описание страницы</label>
                  </div>
                  {this.props.survey.pages[indexPage].panels[0].questions.map(
                    (elements, indexQuestion) => (
                      <div
                        className="question-item"
                        key={indexQuestion}
                        id={`${indexQuestion}`}
                      >
                        {this.renderQuestion(elements.type, indexQuestion)}
                      </div>
                    )
                  )}
                  <div className="container_page_under-button">
                    <ButtonAddQuestion
                      addQuestion={this.props.addQuestion}
                      refresh={this.refreshPage}
                      pageIndex={indexPage}
                    />
                    <DefaultButton
                      text="Удалить страницу"
                      onClick={() => {
                        console.log(indexPage);
                        const index: number = indexPage;
                        this.props.deletePage(index);
                      }}
                      iconProps={trashCan}
                    />
                  </div>
                </div>
              </div>
            ))}
            <DefaultButton
              text="Добавить страницу"
              onClick={() => {
                this.props.addPage();
              }}
            />
          </div>
        </div>
      );
    }
  }
}
