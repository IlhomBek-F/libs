import { Observable } from "rxjs";
import { AsyncOptionEnum } from "../enums/async-option.enum";
import { OptionTypeEnum } from "../enums/option-type.enum";
import { QuestionTypeEnum } from "../enums/question-type.enum";
import { QuestionOptionsModel } from "../models/question-base";
import { QuestionBase } from "./question-base";

interface SelectInputOptionsAsync extends SelectInputOptionsBase {
  optionType: OptionTypeEnum.ASYNC;
  asyncOptionObs$: Observable<any>;
}

interface SelectInputOptionsEager extends SelectInputOptionsBase {
  optionType?: OptionTypeEnum.EAGER;
  asyncOptionObs$?: never;
}

interface SelectInputOptionsBase extends QuestionOptionsModel{
  loading?: boolean;
  optionLabel?: string;
  optionValue?: string;
  options?: any,
  optionType?: OptionTypeEnum;
  asyncOptionObs$?: Observable<any>;
  normalizeValue?: (options: any, value: any) => any
}

export type SelectInputOptions = SelectInputOptionsAsync | SelectInputOptionsEager;

export class QuestionSelectInput extends QuestionBase {
  override controlType = QuestionTypeEnum.SelectInput;
  optionLabel: string;
  optionValue: string;
  options: any[];
  optionType?: OptionTypeEnum;
  asyncOptionObs$?: Observable<any>;
  normalizeValue?: <T = any>(value: any, options?: any) => T

  constructor(options: SelectInputOptions) {
    super(options)
    this.optionLabel = options.optionLabel || 'label'
    this.optionValue = options.optionValue || 'value'
    this.options = options.options
    this.optionType = options.optionType || OptionTypeEnum.EAGER
    if(this.optionType === OptionTypeEnum.ASYNC) {
      this.asyncOptionObs$ = options.asyncOptionObs$
    }
    this.normalizeValue = options.normalizeValue
  }
}
