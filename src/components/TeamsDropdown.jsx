import React from 'react';

export default function TeamsDropdown({ teamId, setTeamId }) {
    return (
        <div>
            <select style={{
                height: '38px',
                width: '310px',
                fontSize: '15px'
            }} onChange={(e) => {
                setTeamId(e.target.value);
            }}>
                <option value={11831}>
                    Turner - Publisher - EU/UK/US
                </option>
                <option value={17024}>
                    1-8000Flowers.com
                </option>
                <option value={12682}>
                    Bloomberg - Publisher - US
                </option>
                <option value={4584}>
                    The Weather Company - Publisher - US
                </option>

            </select>
        </div>
    )
}
