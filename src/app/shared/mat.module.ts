import { NgModule } from '@angular/core';
// import { LayoutModule } from '@angular/cdk/layout';
import {
    MatButtonModule, MatInputModule, MatFormFieldModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatCardModule, MatProgressBarModule, MatListModule, MatTableModule, MatSelectModule, MatOptionModule, MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
    exports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatSidenavModule, MatToolbarModule, MatIconModule,
        MatCardModule, MatProgressBarModule, MatListModule, MatTableModule, MatSelectModule, MatOptionModule, MatDatepickerModule,
        MatNativeDateModule]
})
export class MatModule { }
