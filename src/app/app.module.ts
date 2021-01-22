import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { RdbmsComponent } from './pages/ingestions/rdbms/rdbms.component';
import { StreamdataComponent } from './pages/ingestions/streamdata/streamdata.component';
import { ConfigureIngestionComponent } from './pages/ingestions/flatfile/configure-ingestion/configure-ingestion.component';
import { SourceDataComponent } from './pages/ingestions/flatfile/source-data/source-data.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ConfigureIngestionComponent, SourceDataComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
