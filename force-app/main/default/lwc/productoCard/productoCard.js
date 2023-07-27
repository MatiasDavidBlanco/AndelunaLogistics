// Creación de la variable producto que va a ser llenada a partir de la información pasada desde el componente padre

import { LightningElement, api } from 'lwc';

export default class ProductoCard extends LightningElement {
    @api producto;
} 