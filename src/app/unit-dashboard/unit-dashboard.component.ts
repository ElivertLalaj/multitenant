import { Component } from '@angular/core';
import { UnitDashboardService } from './unit-dashboard.service';
import { ResponseModel } from '../models/ResponseModel';
import { MainModule } from '../../module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-dashboard',
  standalone: true,
  imports: [
    MainModule

  ],
  templateUrl: './unit-dashboard.component.html',
  styleUrl: './unit-dashboard.component.css'
})
export class UnitDashboardComponent {

  displayedColumns: string[] = ['id', 'name', 'description', 'parent_id', '+'];
  addtenant : FormGroup
  unit: UnitDashboard[] = []
  // units?: UnitDashboard  

  constructor(
    private unitDashboard: UnitDashboardService,
    private from : FormBuilder,
    private router: Router
    
  ){
    this.addtenant = this.from.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      parent_id: [0, Validators.required],

    })
  }





  ngOnInit(){
    this.getData()
  }

  getData(){
    this.unitDashboard.getUnitDashboardData<ResponseModel<UnitDashboard[]>>().subscribe({
      next: (data: ResponseModel<UnitDashboard[]>) => {
        this.unit = data.data
        console.log('UnitDashboard on console' + this.unit)
      }
    })
  
  }


  onSubmit(){

    var unitData = {
      id: this.addtenant.value.id,
      name: this.addtenant.value.name,
      description: this.addtenant.value.description,
      parent_id: this.addtenant.value.parent_id,
    }

    this.unitDashboard.addUnitDashboard(unitData).subscribe(
      (response) => {
        this.getData();
        console.log("Response from backed: " ,response);
        window.location.reload();
      },
      (error) => {
        console.log("Error from backed: " ,error);
        }
    )

  }
  
// editClicked(StoreId: any){
//   this.router.navigate(["/store/"+ StoreId])
// }

// deleteClicked(StoreId: any){
//   this.unitDashboard.deleteUnit<ResponseModel<UnitDashboard>>(StoreId).subscribe({
//     next: (data: ResponseModel<UnitDashboard>) => {
//       this.getData()
//     },
    
//   })
  
// }


}


interface UnitDashboard {
      id: number,
      name: string,
      description: string,
      parent_id: number
}