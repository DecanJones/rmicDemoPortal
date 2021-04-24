import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskDetailsComponent } from './task-details.component';
import { StarterRoutes } from './task-details.routing';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { QuillModule } from 'ngx-quill';
import { TextEditorComponent } from 'src/text-editor/text-editor.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    QuillModule.forRoot(),
    FlexLayoutModule,
    CalendarModule,
    RichTextEditorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(StarterRoutes)
  ],
  declarations: [TaskDetailsComponent]
})
export class StarterModule {}
