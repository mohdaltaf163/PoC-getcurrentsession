public with sharing class SessionManagementDemo {
    @AuraEnabled(cacheable=true)
    public static String getCurrentSessionId() {
        String sessionId = '';
        try {
            sessionId = Auth.SessionManagement.getCurrentSession().get('SessionId');
        } catch (Exception ex) {
            // Handle exception (log, display an error message, etc.)
        }
        return sessionId;
    }
}