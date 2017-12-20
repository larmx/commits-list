import React  from 'react';
import { Container, Jumbotron, Row, Col, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { DetailsTable } from "./DetailsTable";

export const InnerModal = (props) => (
      <div>
        <ModalHeader>Details of {props.commitDetails[0].commit.author.name}'s commit</ModalHeader>
        <ModalBody>
          <Container fluid>
            {props.commitDetails[0].author ?
              <Row>
                <a target="_blank" href={"https://github.com/"+props.commitDetails[0].author.login} className="image-link">
                  <img src={props.commitDetails[0].author.avatar_url} className="image"/>
                </a>
              </Row>
              :
              null
            }
              <Row>
                <Col><DetailsTable getDate={props.getDate} commitDetails={props.commitDetails}/></Col>
              </Row>

          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>Dismiss</Button>
        </ModalFooter>
      </div>);
