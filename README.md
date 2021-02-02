# [Elephas Angular](https://cft-group.github.io/elephas-angular/)

[![npm version](https://img.shields.io/npm/v/@elephas/angular-core/latest)](https://www.npmjs.com/package/@elephas/angular-core) ![Build status](https://img.shields.io/github/workflow/status/cft-group/elephas-angular/Tests)

Elephas Design System was created to build consistent user interfaces across different teams and products at [Center of Financial Technologies](https://cft.group/en/). Our goal is to maintain great developer experience for software engineers, no matter which platform they are building on.

Elephas Angular is a library that implements [Elephas Design System components](https://github.com/cft-group/elephas) using [Angular](https://github.com/angular/angular). It has a [Storybook documentation](https://cft-group.github.io/elephas-angular/) describing all available components.

## Installation and Usage

1. Install Elephas Angular and CSS packages.

```bash
npm install @elephas/core @elephas/layout @elephas/angular-core @elephas/angular-layout
```

2. Make sure you have installed peer dependencies.

```bash
npm install @angular/common @angular/compiler @angular/core @angular/forms @angular/router @types/mime mime
```

3. Add [Inter font](https://github.com/rsms/inter) to your project.

4. Add CSS to `angular.json`.

```json
"styles": [
  "src/styles.scss",
  "node_modules/@elephas/layout/styles.min.css"
  "node_modules/@elephas/core/styles.min.css",
]
```

5. Add component modules to imports of `app.module.ts`.

```ts
import { EButtonModule, EInfoModule } from '@elephas/angular-core';

@NgModule({
  imports: [
    EButtonModule,
    EInfoModule,
  ],
})
export class AppModule { }
```

6. Use components as following:

```html
<e-info appearance="warning">Warning info text</e-info>
<button eButton appearance="primary">Click Me</button>
```

## License

Source code is under a [custom license](https://github.com/cft-group/elephas-angular/blob/master/LICENSE.md) based on MIT. The license restricts Elephas usage to applications that integrate or interoperate with Center of Financial Technologies software or services, with additional restrictions for external, stand-alone applications.
