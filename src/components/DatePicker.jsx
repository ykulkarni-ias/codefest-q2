import React from 'react';
import { IASDatePicker } from 'react-core';

export default function DatePicker() {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                minWidth: '400px'
            }}
        >
            <IASDatePicker onDateSelect={function noRefCheck() { }} />
        </div>
    )
}
