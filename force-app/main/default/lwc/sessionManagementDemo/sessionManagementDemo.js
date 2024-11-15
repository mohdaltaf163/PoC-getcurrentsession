import { LightningElement, track, api } from 'lwc';
import getCurrentSessionId from '@salesforce/apex/SessionManagementDemo.getCurrentSessionId';

export default class SessionManagementDemo extends LightningElement {
    @track sessionId;

    getSessionId() {
        getCurrentSessionId()
            .then(result => {
                this.sessionId = result;
            })
            .catch(error => {
                // Handle error (display error message, log, etc.)
                console.error('Error fetching session ID', error);
            });
    }
}