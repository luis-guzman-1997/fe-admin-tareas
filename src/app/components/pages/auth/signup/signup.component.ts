import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ng2-tooltip-directive';
import { RequiredCharComponent } from "./../../../../layout/shared/components/required-char/required-char.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, TooltipModule, RequiredCharComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  @Input() idEstado = 0;

  password: string = '';
  showPassword: boolean = false;
  showPasswordRep: boolean = false;
  optionTooltips = {
    'placement': 'right',
    'showDelay': 5,
    'hideDelay': 5
  }
  mostrarContrasenia = "Mostrar Contraseña";
  ocultarContrasenia = "Ocultar Contraseña";
  msjContrasenia = this.mostrarContrasenia;
  msjContraseniaRep = this.mostrarContrasenia;
  event: any;

  togglePasswordVisibility(id: String): void {
    if(id == "pass")
    {
      this.showPassword = !this.showPassword;
      this.msjContrasenia = this.showPassword ? this.ocultarContrasenia : this.mostrarContrasenia;
    }
    else if(id == "passRep")    
    {
      this.showPasswordRep = !this.showPasswordRep;
      this.msjContraseniaRep = this.showPasswordRep ? this.ocultarContrasenia : this.mostrarContrasenia;
    }
  }
}
