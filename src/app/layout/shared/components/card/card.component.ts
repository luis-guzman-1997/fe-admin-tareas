import { Component, input } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip-directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  optionTooltips = {
    'placement': 'bottom',
    'showDelay': 5,
    'hideDelay': 5
  }

  //@input

  msjEliminarTarea: string = "Eliminar Tarea";
  msjRegresarEstado: string = "Regresar al estado anterior";
  msjCambioEstado: string = "Mover al siguiente estado";

}
