public with sharing class ProductosService {
    @AuraEnabled(cacheable=true)
    public static  List<Producto__c> getAllProductos() {
        return [SELECT Name, Variedad__c, Cosecha__c, Pack__c, Imagen__c FROM Producto__c];
    }
}