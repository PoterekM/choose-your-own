import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPlayerComponent } from './new-player/new-player.component';


const appRoutes: Routes = [
  {
    path: 'new-player',
    component: NewPlayerComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
