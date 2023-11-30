import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { EventsComponent } from './components/events/events.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ItineraryComponent,
    HotelsComponent,
    EventsComponent,
    AboutusComponent,
    HomeComponent,
    BlogsComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"black-stream-403606","appId":"1:1009243276893:web:6ba4b2f5308e33c94f6fb4","storageBucket":"black-stream-403606.appspot.com","apiKey":"AIzaSyCXT3XtEG94IDczOcIH8EO9GyF_9UdpgME","authDomain":"black-stream-403606.firebaseapp.com","messagingSenderId":"1009243276893","measurementId":"G-5S951R9G37"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({"projectId":"black-stream-403606","appId":"1:1009243276893:web:6ba4b2f5308e33c94f6fb4","storageBucket":"black-stream-403606.appspot.com","apiKey":"AIzaSyCXT3XtEG94IDczOcIH8EO9GyF_9UdpgME","authDomain":"black-stream-403606.firebaseapp.com","messagingSenderId":"1009243276893","measurementId":"G-5S951R9G37"}),
  ],
  providers: [
    AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
