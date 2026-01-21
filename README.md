# @ilhombek/base-form

A flexible and extensible **dynamic form library for Angular** that allows you to build reactive forms using declarative configuration objects instead of static templates.

The library is designed to keep form structure, validation logic, and UI rendering cleanly separated, making complex forms easier to scale and maintain.

---

## ✨ Features

- Declarative dynamic form configuration
- Built on Angular Reactive Forms
- Strongly typed question models
- Support for nested containers
- Clean separation of logic and UI
- Angular Signals support

---

## 📦 Installation

``` npm install @ilhombek/base-form ```

## 1. Define Form Containers

**forms are defined using containers, which hold one or more question models.**

```ts 
import { QuestionTextInput } from '@ilhombek/base-form';

export const containers = [
  {
    containers: [
      new QuestionTextInput({
        key: 'key',
        label: 'label',
        required: true,
      }),
    ],
  },
];
```

## 2 Create the Reactive Form

**Use the QuestionControlService to transform the container configuration into an Angular FormGroup.**

```ts
import { computed, inject } from '@angular/core';
import { QuestionControlService } from '@ilhombek/base-form';

private _questionControlService = inject(QuestionControlService);

form = computed(() => this._questionControlService.toFormGroup(containers));
```

## 3. Render the Dynamic Form

**Use the provided dynamic form component to render the form UI.**

```html
<base-form-dynamic-form
  [formContainer]="containers"
  [form]="form()"
></base-form-dynamic-form>
```
