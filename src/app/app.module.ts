import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatList, MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { BaseChartDirective } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentDashboardComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatList,
    MatListModule,
    BaseChartDirective,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentDashboardComponent,
    BarChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
