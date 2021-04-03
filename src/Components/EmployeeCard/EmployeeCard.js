import React from "react";

function EmployeeCard(props) {
    return (
        <tr>
            <th>
                <img alt={props.nameFirst} src={props.picture} />
            </th>
            <td>{props.nameFirst}</td>
            <td>{props.nameLast}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    );
}

export default EmployeeCard;