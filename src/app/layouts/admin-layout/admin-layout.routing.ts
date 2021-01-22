import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { RdbmsComponent } from "src/app/pages/ingestions/rdbms/rdbms.component";
import { StreamdataComponent } from "src/app/pages/ingestions/streamdata/streamdata.component";
import { SourceDataComponent } from "src/app/pages/ingestions/flatfile/source-data/source-data.component";
import { ConfigureIngestionComponent } from "src/app/pages/ingestions/flatfile/configure-ingestion/configure-ingestion.component";
import { Component } from "@angular/core";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "ingestions/rdbms", component: RdbmsComponent },
  { path: "ingestions/streamdata", component: StreamdataComponent },
  { path: "ingestions/sourcedata", component: SourceDataComponent},
  { path: "ingestions/configureingestion", component: ConfigureIngestionComponent},


  // { path: "rtl", component: RtlComponent }
];
