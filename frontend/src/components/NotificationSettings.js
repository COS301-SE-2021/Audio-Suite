import React from 'react';

import "../CSS/NotificationSettings.css";

import SecurityNotifications from './SecurityNotifications.js'
import SystemNotifications from './SystemNotifications.js'

const NotificationSettings = () => {
   
    return (
        <>
            <div class="container">
                <div class="view-account">
                    <section class="module">
                        <div class="module-inner">
                            <div class="content-panel">
                            <h5 class="mb-0 mt-5">Notifications Settings</h5>
                                <p>Select notification you want to receive</p>
                                <hr class="my-4" />
                                <strong class="mb-0">Security</strong>
                                <p>Control security alert you will be notified.</p>
                                    <SecurityNotifications />
                                
                                <hr class="my-4" />
                                <strong class="mb-0">System</strong>
                                <p>Please enable system alert you will get.</p>
                                    <SystemNotifications />
                            </div>
                        </div>
                    </section>
                </div>
            </div>    
        </>
    )
}

export default NotificationSettings