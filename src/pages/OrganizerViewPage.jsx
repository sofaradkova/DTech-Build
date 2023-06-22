import React from 'react';
import Calendar from '../components/Calendar'
import SignIn from '../components/SignIn'
import EventCreate from '../components/EventCreate'

export default function OrganizerViewPage() {
    return (
        <div className='app-container'>
            <div className='widgets-container'>
                <SignIn />
                <EventCreate />
            </div>
            <div>
                <h1 className='calendar-name'>Event Name</h1>
                <Calendar />
            </div>
        </div>
    )
}