/* Clase con método que sirve para buscar en la base de datos registros del objeto producto.  */


public with sharing class ProductosService {
    @AuraEnabled(cacheable=true)
    public static  List<Producto__c> getAllProductos() {

        try {
            List<Producto__c> ListaProductos = [SELECT Name, Variedad__c, Cosecha__c, Pack__c, URL_Imagen__c FROM Producto__c];
            return ListaProductos;
        } catch (Exception) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
}