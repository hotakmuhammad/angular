import { Component } from '@angular/core';
//import { ChildFormComponent } from "../child-form/child-form.component";

@Component({
  selector: 'app-ng-for',
  imports: [],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {


  consigne: string =
  "<pre>Le <strong>@for</strong>" +
  " permet de boucler sur un ensemble de données." +

  "<a href=\"https://angular.dev/api/core/@for\" target=\"_blank\">https://https://angular.dev/api/core/@for</a>" +

  " <ul class='text-l pt-2'>" +
  " <li>" +
  " 1. Utiliser le @for pour afficher une liste d'utilisateurs" +
  " </li>" +
  " <li>" +
  " 2. Afficher l'index de chacun des utilisateurs" +
  " </li>" +
  " <li>" +
  " 3. Ajouter un bouton 'supprimer' sur chacune des lignes --> ne rajouter que le bouton, ne pas implémenter de fonction liées au bouton" +
  " </li>" +
  " <li>" +
  " 4. Utiliser le '(click)' pour implémenter la fonction de suppression de l'utilisateur. Celle ci doit supprimer un utilisateur de la liste" +
  " </li>" +
  " <li>" +
  " 5. Rajouter une fonctionnalité qui permet d'ajouter un utilisateur (via un formulaire) dans la liste" +
  " </li>" +
  " <li>" +
  " 6. Faire une barre de recherche sur le nom des utilisateurs" +
  " </li>" +
  " </ul>" +
  "</pre>"
  ;
}
