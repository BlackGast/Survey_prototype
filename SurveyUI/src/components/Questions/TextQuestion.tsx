import * as React from "react";
import {
  IStackStyles,
  TextField,
  Label,
  Checkbox,
  DefaultButton,
} from "@fluentui/react";
import { Page } from "../../App";
import { trashCan } from "../IProps/IIconProps";

interface ITextQuestionProps {
  id: number;
}

export class TextQuestion extends React.Component<ITextQuestionProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      key: 0,
    };
  }

  // handleClick = () => {
  //   this.pageComponentRef.current.myMethod();
  // };

  private delete = () => {
    // this.pageComponentRef.current.handleDeleteQuestion(this.props.id);
    // this.props.onDelete(this.props.id);
  };

  public render(): React.ReactNode {
    const styleCheckbox: Partial<IStackStyles> = {
      root: {
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
      },
    };

    //console.log(this.props.id);

    return (
      <div
        className="container_page_question"
        onClick={(event) => {
          console.log(event.target);
        }}
      >
        <TextField
          borderless
          placeholder="Название вопроса"
          style={{
            backgroundColor: "#f5f5f5",
            fontSize: 15,
          }}
        />
        {/* <Label>Вопрос</Label> */}
        {/* <div style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingBottom: 10,
          }}>
          <TextField 
            style={{width: "100%"}}
            disabled
          />
        </div> */}
        <div className="question_settings">
          <Checkbox label="Обязательный" styles={styleCheckbox} />
          <DefaultButton
            text="Удалить"
            iconProps={trashCan}
            // id={this.props.id}
            onClick={() => {
              this.delete();
              //console.log(event.target);
            }}
          />
        </div>
      </div>
    );
  }
}
