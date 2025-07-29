import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../principal.service';
import { Principal } from '../../../../principal-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  imports:[FormsModule,CommonModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  principals: Principal[] = [];
  currentPrincipal: Principal = { name: '', qualification: '', yearsOfService: 0 };
  isEditing = false;

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.loadPrincipals();
  }

  loadPrincipals(): void {
    this.principalService.getPrincipals().subscribe(principals => {
      this.principals = principals;
    });
  }

  savePrincipal(): void {
    if (this.isEditing) {
      this.principalService.updatePrincipal(this.currentPrincipal).subscribe(() => {
        this.loadPrincipals();
        this.resetForm();
      });
    } else {
      this.principalService.addPrincipal(this.currentPrincipal).subscribe(() => {
        this.loadPrincipals();
        this.resetForm();
      });
    }
  }

  editPrincipal(principal: Principal): void {
    this.currentPrincipal = { ...principal };
    this.isEditing = true;
  }

  deletePrincipal(id: number): void {
    this.principalService.deletePrincipal(id).subscribe(() => {
      this.loadPrincipals();
    });
  }

  resetForm(): void {
    this.currentPrincipal = { name: '', qualification: '', yearsOfService: 0 };
    this.isEditing = false;
  }
}