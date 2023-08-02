/* Clase con método que sirve para buscar en la base de datos registros del objeto producto.  */


public with sharing class ProductosService {
    @AuraEnabled(cacheable=true)
    public static  List<Producto__c> getAllProductos() {
        List<Producto__c> ListaProductos = [SELECT Name, Variedad__c, Cosecha__c, Pack__c, Imagen__c, URL_Imagen__c FROM Producto__c];
            return ListaProductos;
        // try {
            
        // } catch (Exception) {
        //     throw new AuraHandledException(ex.getMessage());
        // }
    }

    @AuraEnabled(cacheable=true)
    public static  List<Producto__c> getProductoFiltrados(String searchText) {
        String likeValue = '%' + searchText + '%';
        List<Producto__c> ProductoFiltrado = [SELECT Name, Variedad__c, Cosecha__c, Pack__c, Imagen__c, URL_Imagen__c FROM Producto__c WHERE Name LIKE :likeValue ];
            return ProductoFiltrado;
       
    }


}