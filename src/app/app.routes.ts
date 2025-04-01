import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent:() => import('./components/my-first-component/my-first-component.component')
        .then(m => m.MyFirstComponentComponent), title: 'My First Component'},
    
    {path: 'day2', loadComponent: () => import('./components/ng-for/ng-for.component')
        .then(m => m.NgForComponent), title: 'My First Component'},
];
