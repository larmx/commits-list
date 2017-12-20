import React, { Component } from 'react';
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button,
  Modal,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';
import axios from 'axios';
import ReactLoading from 'react-loading';
import {CommitTable} from "./Table";
import {InnerModal} from "./InnerModal";

class Main extends Component {

  constructor() {
    super();

    this.state = {
      commits: [],
      filteredCommits: [],
      loading: true,
      loadingModal: false,
      commitDetails: {},
      showModal: false,
      currentRepo: 'linux',
      currentOwner: 'torvalds',
      repo: 'linux',
      owner: 'torvalds',
      error: false,
      authorSearch: undefined
    };

    this.getDetails = this.getDetails.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getDate = this.getDate.bind(this);
    this.updateRepo = this.updateRepo.bind(this);
    this.updateOwner = this.updateOwner.bind(this);
    this.changeRepo = this.changeRepo.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    this.getAllCommits(this.state.repo, this.state.owner);
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron fluid>
          <h2 className="display-4 text-center">Change repository</h2>
          <Form>
            <FormGroup>
              <Label for="repo">Repository name</Label>
              <Input type="text" name="repo" id="repo" value={this.state.repo} onChange={this.updateRepo}/>
            </FormGroup>
            <FormGroup>
              <Label for="owner">Owner</Label>
              <Input type="text" name="owner" id="owner" value={this.state.owner} onChange={this.updateOwner} />
            </FormGroup>
            {this.state.error ? <Alert color="danger">These informations are wrong or do not match!</Alert> : null}
            <Button className="submit-button" color="primary" onClick={this.changeRepo}>Change repo informations</Button>
          </Form>
          <h2 className="display-4 text-center">The last 30 commits of <strong>{this.state.currentRepo}</strong></h2>

          <hr className="my-2"/>

          <Input name={"search"} id={"search"} value={this.state.authorSearch} onChange={this.updateList} placeholder={"Search by author"}/>
          <Row>
            <Col>{this.state.loading ? <ReactLoading className="loading" type={"bars"} color={"#444"}/> : <CommitTable getDate={this.getDate} commits={this.state.filteredCommits} onClick={this.getDetails} /> }</Col>
          </Row>
        </Jumbotron>

        <Modal isOpen={this.state.showModal} toggle={this.toggle} size={"lg"}>
          {this.state.loadingModal ?
            <ReactLoading className="loading" type={"bars"} color={"#444"}/>
            :
            <InnerModal getDate={this.getDate} toggle={this.toggle} commitDetails={this.state.commitDetails}/>
          }
        </Modal>
      </Container>
    );
  }

  updateList(event) {
    const list = this.state.commits;
    this.setState({
      filteredCommits: list.filter(data => data.commit.author.name.toLowerCase().includes(event.target.value))
    })
  }

  async changeRepo() {
    this.setState({
      error: false
    });
    await this.getAllCommits(this.state.repo, this.state.owner);
    this.setState({
      currentRepo: this.state.repo,
      currentOwner: this.state.owner
    })
  }

  updateRepo(event) {
    this.setState({
      repo: event.target.value
    })
  }

  updateOwner(event) {
    this.setState({
      owner: event.target.value
    })
  }

  getDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString();
  }

  async getAllCommits(repo, owner) {
    let commits;
    const url = `api/commits/${owner}/${repo}`;
    try {
      commits = await axios.get(url);
    } catch (err) {
      console.error(err);
      this.setState({
        error: true
      });
    }
    this.setState({
      commits: commits.data,
      filteredCommits: commits.data,
      loading: false
    });
  }

  async getDetails(sha) {
    this.setState({
      showModal: true,
      loadingModal: true
    });
    const repo = this.state.currentRepo;
    const owner = this.state.currentOwner;
    const url = `api/commit/${owner}/${repo}/${sha}`;
    let commitDetails;
    try {
      commitDetails = await axios.get(url);
    } catch (err) {
      console.error(err);
    }
    this.setState({
      commitDetails: [commitDetails.data],
      loadingModal: false
    })
  }

  toggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
}

export default Main;
