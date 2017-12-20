import React from 'react';
import { Table } from 'reactstrap';
import { Line } from './Line';

export const DetailsTable = (props) => (
  <Table striped>
    <tbody>
    <tr>
      <td>Date</td>
      <td>
        {props.getDate(props.commitDetails[0].commit.committer.date)}
      </td>
    </tr>
    <tr>
      <td>Message</td>
      <td className="commit-message">
        {props.commitDetails[0].commit.message}
      </td>
    </tr>
    <tr>
      <td>Author's name</td>
      <td>
        {props.commitDetails[0].commit.author.name}
      </td>
    </tr>
    <tr>
      <td>Author's email</td>
      <td>
        {props.commitDetails[0].commit.author.email}
      </td>
    </tr>
    <tr>
      <td>Committer's name</td>
      <td>
        {props.commitDetails[0].commit.committer.name}
      </td>
    </tr>
    <tr>
      <td>Committer's email</td>
      <td>
        {props.commitDetails[0].commit.committer.email}
      </td>
    </tr>
    </tbody>
  </Table>);