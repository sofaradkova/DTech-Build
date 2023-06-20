import React from 'react'
import CalendarGrid from './CalendarGrid'
import CalendarTimes from './CalendarTimes'
import CalendarDates from './CalendarDates'

export default function Calendar() {
    return (
        <div className="calendar-main">
            <CalendarTimes />
            <div className="calendar-container">
                <CalendarDates />
                <div>
                    <CalendarGrid />
                </div>
            </div>
        </div>
    )
}