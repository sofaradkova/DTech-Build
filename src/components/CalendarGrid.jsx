import React from 'react'

export default function CalendarGrid() {
    const cells = new Array(7).fill(0);
    const rows = new Array(10).fill(0);

    const handleClick = (e) => {
        const item = e.target;
        if (item.classList.contains('selected')) {
            item.classList.remove('selected');
        }
        else {
            item.classList.add('selected');
        }
    };

    return (
        <>
            {rows.map((row, index) => (
                <>
                    <ul className="row" key={index}>
                    {cells.map((cell, index) => (
                        <li key={index} className="item" onClick={handleClick} />
                    ))}
                    </ul>
                    <ul className="row" key={index}>
                    {cells.map((cell, index) => (
                    <li key={index} className="item" onClick={handleClick} />
                    ))}
                    </ul>
                    <hr className="calendar-line"></hr>
                </>
        ))}
        </>
    )
}