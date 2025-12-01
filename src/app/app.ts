import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Correu} from './Components/correu/correu';
import {LlistaCorreus} from './Components/llista-correus/llista-correus';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Correu,LlistaCorreus],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExercicisAngularComponents-DirectivesDavidGelma');
}
