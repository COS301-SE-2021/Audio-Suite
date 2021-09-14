import React from 'react';

import "../CSS/NotificationSettings.css";


const SecurityNotifications = () => {
    
    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
            <div class="list-group mb-5 shadow">
                <div class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col">
                            <strong class="mb-0">Unusual activity notifications</strong>
                            <p class="text-muted mb-0">Donec in quam sed urna bibendum tincidunt quis mollis mauris.</p>
                        </div>
                        <div className='custom-control custom-switch'>
                            <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitchesChecked1'
                            defaultChecked
                            />
                            <label className='custom-control-label' htmlFor='customSwitchesChecked1'>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col">
                            <strong class="mb-0">Unauthorized financial activity</strong>
                            <p class="text-muted mb-0">Fusce lacinia elementum eros, sed vulputate urna eleifend nec.</p>
                        </div>
                        <div className='custom-control custom-switch'>
                            <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitchesChecked2'
                            defaultChecked
                            />
                            <label className='custom-control-label' htmlFor='customSwitchesChecked2'>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityNotifications