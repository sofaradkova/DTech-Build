import React from 'react'
import CalendarGrid from './CalendarGrid'
import CalendarTimes from './CalendarTimes'
import CalendarDates from './CalendarDates'

export default function Calendar() {
    return (
        <div>
            <CalendarDates />
            <div className="calendar-container">
                <CalendarTimes />
                <div>
                    <CalendarGrid />
                </div>
            </div>
        </div>
    )
}