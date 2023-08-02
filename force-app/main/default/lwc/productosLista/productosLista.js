// Conexion de l método getAllProductos al componente ProductosLista 

import { LightningElement, wire} from 'lwc';
import getAllProductos from "@salesforce/apex/ProductosService.getAllProductos";
// import getProductoFiltrado from "@salesforce/apex/ProductosService.getProductoFiltrado";

export default class ProductosLista extends LightningElement {

    //Properties Getters and Setters
    // searchText="";

    //Lifecycle Hooks

    // Wires
    @wire(getAllProductos) ProductosLista;

   /*  @wire(getProductoFiltrado, { searchText: "$searchText" }) */

    // Methods 

    /* handleInputChange(event){
        const searchTextAux = event.detail.value;
        if (searchTextAux.length >= 2 || searchTextAux === ""){
            this.searchText = searchTextAux;
        } 
    }*/
}


