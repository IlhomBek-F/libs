import { Observable } from 'rxjs';
import { OptionTypeEnum } from '../enums/option-type.enum';
import { QuestionTypeEnum } from '../enums/question-type.enum';
import { QuestionBase } from './question-base';
import { SelectInputOptions } from './question-select-input';

export class QuestionMultiSelect extends QuestionBase {
  override controlType = QuestionTypeEnum.MultiSelect;
  loading: boolean;
  optionLabel: string;
  optionValue: string;
  options: any[];
  optionType?: OptionTypeEnum;
  asyncOptionObs$?: Observable<any>;
  normalizeValue?: (value: any, options?: any[]) => any

  constructor(options: SelectInputOptions) {
      super(options)
      this.loading = options.loading || false;
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
