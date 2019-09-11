import React from 'react';
// import uuid from 'uuid/v4';
import Column from 'components/Column/Column';
import './Dashboard.scss'; //porque está en la misma carpeta
import columns from 'data';
import AddColumn from 'components/AddColumn/AddColumn';




const Dashboard = () => (
    <div className="dashboard">
        {
            columns.map(column => <Column 
            key={column.id}
            title={column.title} 
            cards={column.cards}/>)
        }
        {/* <Column title='Para hacer'/>
        <Column title='Listos'/> */}
        <AddColumn />
    </div>
)
    


export default Dashboard;