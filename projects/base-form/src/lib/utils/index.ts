import { catchError, finalize, of, tap, throwError } from "rxjs";
import { OptionTypeEnum } from "../core/enums/option-type.enum";

export function handleAsyncOption(this: any) {
  if (this.optionType() === OptionTypeEnum.EAGER) {
    this._options = this.options();
    return of(this.options())
  }

  this.loading = true;
  return this.asyncOptionObs$()
    .pipe(
      tap((data) => this._options = data),
      finalize(() => this.loading = false),
      catchError((err) => {
        this._messageService.error(`Failed fetching async ${this.label()} options`)
        return throwError(() => err)
      })
    )
}
