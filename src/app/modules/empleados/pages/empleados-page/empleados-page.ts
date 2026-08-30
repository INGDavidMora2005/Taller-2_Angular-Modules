import { Component, OnInit } from '@angular/core';
import { Empleados } from '../../services/empleados';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-empleados-page',
  standalone: false,
  templateUrl: './empleados-page.html',
  styleUrl: './empleados-page.scss',
})
export class EmpleadosPage implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadosService: Empleados) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.getEmpleados();
  }
}
