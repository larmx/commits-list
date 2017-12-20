import React from 'react';
import { Button } from 'reactstrap';

export const Line = props => (
    <tr style = {{ width: '90%' }}>
      <td className="align-middle">
          {props.getDate(props.data.commit.author.date)}
      </td>
      <td className="align-middle">
          {props.data.commit.author.name}
      </td>
      <td>
          {props.data.commit.message}
      </td>
      <td className="align-middle">
        <Button color="primary" onClick={() => props.onClick(props.data.sha)}>View Details</Button>
      </td>
    </tr>
);
