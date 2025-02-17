import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule , FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  password: string = '';
  showPassword: boolean = false;
  optionTooltips = {
    'placement': 'right',
    'showDelay': 5,
    'hideDelay': 5
  }
  mostrarContrasenia = "Mostrar Contraseña";
  ocultarContrasenia = "Ocultar Contraseña";
  msjContrasenia = this.mostrarContrasenia;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    this.msjContrasenia = this.showPassword ? this.ocultarContrasenia : this.mostrarContrasenia;
  }



}
