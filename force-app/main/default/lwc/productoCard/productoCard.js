// Creación de la variable producto que va a ser llenada a partir de la información pasada desde el componente padre

import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ProductoCard extends NavigationMixin (LightningElement) {
    @api producto;

    navigateToRecordViewPage() {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.producto.Id,
                objectApiName: 'Producto__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

} 