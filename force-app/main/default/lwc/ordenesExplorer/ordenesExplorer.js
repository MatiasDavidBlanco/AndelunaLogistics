import { LightningElement, wire} from 'lwc';
import getAllOrdenes from "@salesforce/apex/OrdenesService.getAllOrdenes";

export default class OrdenesExplorer extends LightningElement {
    
    @wire(getAllOrdenes)
    ordenes;
}