import * as React from "react";
import { SurveyPage } from "../SurveyPage/SurveyPage";
import { IPageDesignerSurveyProps } from "./IPageDesignerSurveyProps";
import { IPageDesignerSurveyState } from "./IPageDesignerSurveyState";
import { PropertyPanel } from "../PropertyPanel/PropertyPanel";

export class PageDesignerSurvey extends React.Component<
  IPageDesignerSurveyProps,
  IPageDesignerSurveyState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      pageId: 0,
      questionId: 0,
      item: ''
    };
  }

  public getIndex = (pageId?: number, questionId?: number, item?: string): void => {
    this.setState({
      item: item ?? 'survey',
      pageId: pageId ?? 0,
      questionId: questionId ?? 0,
    })
  };

  public render(): React.ReactNode {
    if (this.props.survey.pages.length === 0) {
      return (
        <div className="bodyPage_colored">
          <SurveyPage
            survey={this.props.survey}
            questions={this.props.questions}
            addQuestion={this.props.addQuestion}
            deleteQuestion={this.props.deleteQuestion}
            deletePage={this.props.deletePage}
            addPage={this.props.addPage}
            getIndex={this.getIndex}
          />
        </div>
      );
    }
    return (
      <div className="page bodyPage_colored">
        <div className="page_part page_part-part2">
          <SurveyPage
            survey={this.props.survey}
            questions={this.props.questions}
            addQuestion={this.props.addQuestion}
            deleteQuestion={this.props.deleteQuestion}
            deletePage={this.props.deletePage}
            addPage={this.props.addPage}
            getIndex={this.getIndex}
          />
        </div>
        <div className="vertical-line" />
        <div className="page_part page_part-part3">
          <PropertyPanel
            survey={this.props.survey}
            pageId={this.state.pageId}
            questionId={this.state.questionId}
            item={this.state.item}
          />
        </div>
      </div>
    );
  }
}
