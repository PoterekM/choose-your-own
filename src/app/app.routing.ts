import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPlayerComponent } from './new-player/new-player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


const appRoutes: Routes = [
  {
    path: 'new-player',
    component: NewPlayerComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
