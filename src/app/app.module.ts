
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { AppBreadcrumbComponent } from './layouts/full/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { TasklistComponent } from './components/ticketlist/tasklist.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { QuillModule } from "ngx-quill";
import { SharedService } from './services/shared-services';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { MyAppComponent } from './my-app/my-app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    LoginComponent,
    TasklistComponent,
    AppBreadcrumbComponent,
    TextEditorComponent,
    FileUploadComponent,
    MyAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    UploaderModule,
    FormsModule,
    ReactiveFormsModule ,
    NgxContentLoadingModule,
    FlexLayoutModule,
    CalendarModule,
    DragDropModule,
    PerfectScrollbarModule,
    QuillModule.forRoot(),
    HttpClientModule,
    SharedModule,
    
    RouterModule.forRoot(AppRoutes),

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    SharedService,
    AuthGuard,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
