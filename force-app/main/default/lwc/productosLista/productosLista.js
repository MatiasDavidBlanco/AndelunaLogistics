// Conexion de l método getAllProductos al componente ProductosLista 

import { LightningElement, wire} from 'lwc';
import getAllProductos from "@salesforce/apex/ProductosService.getAllProductos";

export default class ProductosLista extends LightningElement {
    
    @wire(getAllProductos) ProductosLista;
    
}