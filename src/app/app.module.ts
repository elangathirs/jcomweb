import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { Header1Component } from './components/layouts/header1/header1.component';
import { Header2Component } from './components/layouts/header2/header2.component';
import { Header3Component } from './components/layouts/header3/header3.component';
import { ShopSidebarComponent } from './components/layouts/shop-sidebar/shop-sidebar.component';
import { BlogSidebarComponent } from './components/layouts/blog-sidebar/blog-sidebar.component';
import { ServiceSidebarComponent } from './components/layouts/service-sidebar/service-sidebar.component';
import { Footer1Component } from './components/layouts/footer1/footer1.component';
import { Footer2Component } from './components/layouts/footer2/footer2.component';
import { Homepage1Component } from './components/pages/homepage1/homepage1.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { Homepage3Component } from './components/pages/homepage3/homepage3.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamDetailsComponent } from './components/pages/team-details/team-details.component';
import { CareerComponent } from './components/pages/career/career.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { Service1Component } from './components/pages/service1/service1.component';
import { Service2Component } from './components/pages/service2/service2.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { BlogStandardComponent } from './components/pages/blog-standard/blog-standard.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
import { Portfolio1Component } from './components/pages/portfolio1/portfolio1.component';
import { Portfolio2Component } from './components/pages/portfolio2/portfolio2.component';
import { PortfolioDetailComponent } from './components/pages/portfolio-detail/portfolio-detail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopDetailComponent } from './components/pages/shop-detail/shop-detail.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { AboutComponent } from './about/about.component';
import { TableComponent } from './table/table.component';
import { TraningComponent } from './traning/traning.component';
import { MembershipComponent } from './membership/membership.component';
import { StarttableComponent } from './starttable/starttable.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { JcomworksComponent } from './jcomworks/jcomworks.component';
import { JcomworkComponent } from './jcomwork/jcomwork.component';
import { TabletypesComponent } from './tabletypes/tabletypes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { PricingComponent } from './pricing/pricing.component';
import { RefundComponent } from './refund/refund.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    Header1Component,
    Header2Component,
    Header3Component,
    ShopSidebarComponent,
    BlogSidebarComponent,
    ServiceSidebarComponent,
    Footer1Component,
    Footer2Component,
    Homepage1Component,
    Homepage2Component,
    Homepage3Component,
    AboutusComponent,
    TeamComponent,
    TeamDetailsComponent,
    CareerComponent,
    FaqComponent,
    Service1Component,
    Service2Component,
    ServiceDetailComponent,
    BlogStandardComponent,
    BlogGridComponent,
    BlogDetailComponent,
    Portfolio1Component,
    Portfolio2Component,
    PortfolioDetailComponent,
    ShopComponent,
    ShopDetailComponent,
    ContactusComponent,
    TermsconditionComponent,
    AboutComponent,
    TableComponent,
    TraningComponent,
    MembershipComponent,
    StarttableComponent,
    VisionMissionComponent,
    JcomworksComponent,
    JcomworkComponent,
    TabletypesComponent,
    PrivacypolicyComponent,
    PricingComponent,
    RefundComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,NgxDatatableModule,BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
