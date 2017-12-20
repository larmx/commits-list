import React from 'react';
import { Table } from 'reactstrap';
import { Line } from './Line';

export const CommitTable = (props) => (
  <Table striped>
    <thead>
    <tr>
      <th>Date</th>
      <th>Committer</th>
      <th>Commit message</th>
    </tr>
    </thead>
    <tbody>
    {/*{props.data}*/}
    {props.commits.map((line) => (<Line getDate={props.getDate} key={line.sha} data={line} onClick={props.onClick} />))}
    </tbody>
  </Table>);