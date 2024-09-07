import { Component, ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { InvoiceTypeComponent } from './pages/invoice-type/invoice-type.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facturacion';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(
    private dialog: MatDialog,  
  ) { }

  openDialog(){   
    this.dialog.open(InvoiceTypeComponent, {
    width: '450px',
    height: '450px'
  });
  }

  handleNewInvoiceClick() {
    if (this.sidenav) {
      this.sidenav.toggle(); 
    }
    this.openDialog();
  }

 
 

}