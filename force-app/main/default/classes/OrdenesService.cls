public with sharing class OrdenesService {
    @AuraEnabled(cacheable=true)
    public static  List<Orden__c> getAllOrdenes() {
        return [SELECT Id, Numero_de_orden__c, Cliente__c FROM Orden__c];
    }
}