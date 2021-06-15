import React, { Component } from 'react';
import { useState } from 'react'

import "../CSS/NotificationSettings.css";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ChangeEmail from '../components/ChangeEmail'
import ChangePassword from '../components/ChangePassword'

const SystemNotifications = ({onChangePageType, changePage}) => {
    // const navigateToLoginPage = () => 
    // {
    //     //onChangePageType('loginPage')
    //     changePage('splashPage')
    // }

    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>
        <div class="list-group mb-5 shadow">
                <div class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col">
                            <strong class="mb-0">Notify me about new features and updates</strong>
                            <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className='custom-control custom-switch'>
                            <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitchesChecked3'
                            defaultChecked
                            />
                            <label className='custom-control-label' htmlFor='customSwitchesChecked3'>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col">
                            <strong class="mb-0">Notify me by email for latest news</strong>
                            <p class="text-muted mb-0">Nulla et tincidunt sapien. Sed eleifend volutpat elementum.</p>
                        </div>
                        <div className='custom-control custom-switch'>
                            <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitchesChecked4'
                            defaultChecked
                            />
                            <label className='custom-control-label' htmlFor='customSwitchesChecked4'>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col">
                            <strong class="mb-0">Notify me about tips on using account</strong>
                            <p class="text-muted mb-0">Donec in quam sed urna bibendum tincidunt quis mollis mauris.</p>
                        </div>
                        <div className='custom-control custom-switch'>
                            <input
                            type='checkbox'
                            className='custom-control-input'
                            id='customSwitchesChecked5'
                            defaultChecked
                            />
                            <label className='custom-control-label' htmlFor='customSwitchesChecked5'>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SystemNotifications