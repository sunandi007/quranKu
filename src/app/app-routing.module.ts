import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'surah',
    loadChildren: () => import('./home/surah/surah.module').then(m => m.SurahModule)
  },
  {
    path: 'waktu-solat',
    loadChildren: () => import('./home/waktu-solat/waktu-solat.module').then(m => m.WaktuSolatModule)
  },
  {
    path: 'tasbih',
    loadChildren: () => import('./home/tasbih/tasbih.module').then(m => m.TasbihModule)
  },
  {
    path: 'doa',
    loadChildren: () => import('./home/doa-doa/doa-doa.module').then(m => m.DoaDoaModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
