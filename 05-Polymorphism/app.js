class Notification{
    constructor(message){
        this.message = message;
    }

    send(){
        console.log(`Sending general message: ${this.message}`);
    }
}

class EmailNotification extends Notification{
    constructor(message, subject, emailAdd){
        super(message);
        this.subject = subject;
        this.emailAdd = emailAdd;
    }

    send(){
        window.location.href = `mailto:${this.emailAdd}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
    }
}

class SMSNotification extends Notification{
    constructor(message, phoneNumber){
        super(message);
        this.phoneNumber = phoneNumber;
    }

    send(){
        console.log(`Texting... ${this.message} to ${this.phoneNumber}`)
    }
}

class PushNotification extends Notification{
    constructor(message){
        super(message);
    }

    send(){
        alert(`Alerting User... ${this.message}`);
    };
}

function createTestNotifications(message, subject, email, phoneNumber){
    const testNotificationsArr = [];

    testNotificationsArr.push(new EmailNotification(message, subject, email));
    testNotificationsArr.push(new SMSNotification(message, phoneNumber));
    testNotificationsArr.push(new PushNotification(message));

    return testNotificationsArr;
}

function sendTestNotifications(notifications){
    notifications.forEach(notification => {
        notification.send();
    });
}

const notifications = createTestNotifications('Test', 'Testing Notifications Systems', 'foo@bar.com', '555-555-5555');
sendTestNotifications(notifications);