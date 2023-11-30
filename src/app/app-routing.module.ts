import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { EventsComponent } from './components/events/events.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'itinerary-component', component: ItineraryComponent },
  { path: 'hotels-component', component: HotelsComponent},
  { path: 'events-component', component: EventsComponent},
  { path: 'aboutus-component', component: AboutusComponent},
  { path: 'blogs-component', component: BlogsComponent},
  { path: '',   redirectTo: '/home-component', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
