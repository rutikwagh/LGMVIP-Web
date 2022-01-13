import React from 'react';
import Card from '../Card Component/cardComponent';

const Grid = ({ valve }) => {
    return (
        <div className="grid">
            {
                valve.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={valve[i].id}
                            name={valve[i].first_name}
                            lname={valve[i].last_name}
                            email={valve[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default Grid;
