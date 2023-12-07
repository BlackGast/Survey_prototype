import { QuestionType } from "./QeustionType";

// Интерфейс модели вопроса, где есть необязательные части

export interface IQuestion {
    id: number;
    type: string;
    question: QuestionType | string;
    options?: string[];
    min?: number;
    max?: number;
    placeholder?: string;
}