
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
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component'
import {HeroesComponent} from './components/heroes/heroes.component'
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api/http-client-in-memory-web-api.module';
import { InMemoryDataService } from './services/in-memory-data.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { heroReducer } from './entities/heroes/hero-reducer';
import { HeroEffects } from './entities/heroes/hero-effects';
import { NgApexchartsModule } from 'ng-apexcharts';



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
    MyAppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroesComponent
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
    NgApexchartsModule,
    QuillModule.forRoot(),
    HttpClientModule,
    SharedModule,
    
    RouterModule.forRoot(AppRoutes),
       // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({}),
    StoreModule.forFeature('heroes', heroReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([HeroEffects]),

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
    HeroService,
    MessageService,
    AuthGuard,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
