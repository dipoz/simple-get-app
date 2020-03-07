
import React from 'react';
import { Table } from 'reactstrap';

const Items = ({ items, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (

        //Tabell til repositories:
        <Table bordered hover responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Issues</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.url}</td>
                        <td>{item.open_issues}</td>
                        <td>{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

    );
};

export default Items;