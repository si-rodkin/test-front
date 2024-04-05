import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-description',
//   template: `
//     <mat-expansion-panel>
//       <mat-expansion-panel-header>
//         <mat-panel-title>
//           <h3>Описание задачи</h3>
//         </mat-panel-title>
//       </mat-expansion-panel-header>
//       <h3>Введение</h3>
//       <p>
//         Общеизвестно, что в Spring'овых настройках можно использовать переменные
//         окружения.
//       </p>
//       <p>
//         Например, если какая-либо настройка будет содержать значение
//         <code>\${PROTOCOL}://\${HOST:localhost}/\${PATH}</code>, то Spring будет
//         искать в окружении переменные, <code>PROTOCOL</code> и
//         <code>HOST</code>.
//       </p>
//       <p>
//         При этом, в последней задано значение по умолчанию, которое будет
//         задействовано, если соответствующая переменная не будет найдена.
//       </p>
//       <hr />
//       <h3>Задача</h3>
//       <p>
//         Дана таблица настроек и таблица переменных. Надо написать логику,
//         которая будет заменять переменные окружения на их значения. Если такой
//         переменной окружения нет, то на значение по умолчанию.
//       </p>
//       <p>
//         Например, если настройка содержит значение
//         <code>\${PROTOCOL}://\${HOST:localhost}/\${PATH}</code> и есть
//         переменная PROTOCOL (значение https), а остальных нет, то результат
//         будет такой: https://localhost/
//       </p>
//     </mat-expansion-panel>
//   `,
// })
// export class TaskDescriptionComponent {}
