import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios';
import './Accountform.css'
import Spinner from './Spinner';
import { withAuth0 } from '@auth0/auth0-react';
import {
    Redirect
  } from "react-router-dom";
class Accountform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            surname: '',
            name: '',
            phoneNumber: '',
            email: '',
            School: '',
            job_description: '',
            skills: "",
            lauguages: "",
            price: '',
            location: '',
            AreaOfStudys: '',
            Degree: '',
            experience: '',
            img: '',
            From: '',
            To: '',
            Education: { School: "", AreaOfStudys: "", Degree: "", To: "", From: "" },
            usersList: [],
            newAcc:false,
            path:"/freelancerprofile"
        }
    }
    submitHandle = async (e) => {
        e.preventDefault();
        if (this.props.auth0.isAuthenticated) {
            let AreaOfStudys = this.state.To;
            let Degree = this.state.From;
            let To = this.state.AreaOfStudys;
            let From = this.state.AreaOfStudys;
            let School = this.state.School
            let data = {
                name: `${this.state.firstname} ${this.state.surname}`,
                phoneNumber: this.state.phoneNumber,
                email: this.props.auth0.user.email,
                img: (this.state.img).includes("https:")?this.state.img :"https://img2.thejournal.ie/inline/1881369/original/?width=630&version=1881369",
                job_describtion: this.state.job_describtion,
                skills: this.state.skills.split(','),
                lauguages: this.state.lauguages.split(','),
                price: this.state.price,
                location: this.state.location,
                experience: this.state.experience,
                Education: { AreaOfStudys: AreaOfStudys, Degree: Degree, From: From, To: To, School: School },
            }
            let newUsersList = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/createUser`, data);
            this.setState({
                newAcc:true
            })
        }
    }

    handleChangesurname = (e) => {
        let surname = e.target.value;
        this.setState({
            surname: surname
        })
    }

    handleChangephoneNumber = (e) => {
        let phoneNumber = e.target.value;
        this.setState({
            phoneNumber: phoneNumber
        })
    }

    handleChangefirstname = (e) => {
        let firstname = e.target.value;
        this.setState({
            firstname: firstname
        })
    }

    handleChangeSchool = (e) => {
        let School = e.target.value;
        this.setState({
            School: School
        })
    }

    handleChangejob_describtion = (e) => {
        let job_describtion = e.target.value;
        this.setState({
            job_describtion: job_describtion
        })
        console.log(job_describtion);
    }

    handleChangeskills = (e) => {
        let skills = e.target.value;
        this.setState({
            skills: skills
        })
    }

    handleChangelauguages = (e) => {
        let lauguages = e.target.value;
        this.setState({
            lauguages: lauguages
        })
    }

    handleChangeprice = (e) => {
        let price = e.target.value;
        this.setState({
            price: price

        })
    }

    handleChangelocation = (e) => {
        let location = e.target.value;
        this.setState({
            location: location
        })
    }

    handleChangeAreaOfStudys = (e) => {
        let AreaOfStudys = e.target.value;
        this.setState({
            AreaOfStudys: AreaOfStudys
        })
    }

    handleChangeDegree = (e) => {
        let Degree = e.target.value;
        this.setState({
            Degree: Degree
        })
    }

    handleChangeexperience = (e) => {
        let experience = e.target.value;
        this.setState({
            experience: experience
        })
    }

    handleChangeimg = (e) => {
        let img = e.target.value;
        this.setState({
            img: img
        })
    }
    handleChangeFrom = (e) => {
        let From = e.target.value;
        this.setState({
            From: From
        })
    }
    handleChangeTo = (e) => {
        let To = e.target.value;
        this.setState({
            To: To
        })
    }
    render() {
        return (
            <>
                <Spinner />
                <div class="container rounded bg-white mt-5 mb-5">
                    <form onSubmit={this.submitHandle}>
                        <div class="row">
                            <div class="col-md-3 border-right">
                                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                                <div id='centerit' class="col-md-6"><label class="labels">Image Link:</label><input onChange={this.handleChangeimg} type="text"  placeholder="Image Link" /></div>
                            </div>
                            <div class="col-md-5 border-right">
                                <div class="p-3 py-5">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="text-right">Profile Settings</h4>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6"><label class="labels" >Name</label><input onChange={this.handleChangefirstname} type="text"  placeholder="first name" /></div>
                                        <div class="col-md-6"><label class="labels">Surname</label><input onChange={this.handleChangesurname} type="text"  placeholder="surname" /></div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12"><label class="labels">Phone</label><input onChange={this.handleChangephoneNumber} type="text"  placeholder="enter phone number" /></div>
                                        {/* <div class="col-md-12"><label class="labels">Email ID</label><input onChange={this.handleChangeemail} type="text" class="form-control" placeholder="example@email.com" /></div> */}
                                    </div>
                                    <Form.Group as={Col} controlId="formGrid Experience">
                                        <Form.Label > Experience</Form.Label>
                                        <Form.Select onChange={this.handleChangeexperience} defaultValue="Choose...">
                                            <option>Entry Level</option>
                                            <option>Intermediate</option>
                                            <option> Expert</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGrid Experience">
                                        <Form.Label > Job Description</Form.Label>
                                        <Form.Select onChange={this.handleChangejob_describtion} defaultValue="Choose...">
                                            <option>Architecture</option>
                                            <option>Designer</option>
                                            <option> Photography</option>
                                            <option> Software Development</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <div class="row mt-3">

                                        <div class="col-md-12"><label class="labels">Languages</label><input onChange={this.handleChangelauguages} type="text"  placeholder="enter Languages: ex (English, Arabic, french)" required /></div>
                                    </div>
                                    <br />
                                    <hr />
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                             {this.state.newAcc&&<Redirect to={this.state.path}/>}
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="p-3 py-5">
                                    <br />

                                    <div class="col-md-12"><label class="labels">Location</label><input onChange={this.handleChangelocation} type="text"  placeholder="123 Main Street, That house." /></div>
                                    <div class="col-md-12"><label class="labels">Price Per/Hour</label><input onChange={this.handleChangeprice} type="text"  placeholder="enter  Price Per/Hour" /></div>
                                    <div class="col-md-12"><label class="labels">Skills</label><input onChange={this.handleChangeskills} type="text"  placeholder="enter Skills: ex (creative, teamleader, Fast Learner)" required /></div>
                                    <div class="col-md-12"><label class="labels">School</label><input onChange={this.handleChangeSchool} type="text" placeholder="University or College etc" /></div>
                                    <div className="studies">
                                        <div class="col-md-12"><label class="labels">AreaOfStudys</label><input onChange={this.handleChangeAreaOfStudys} type="text"  placeholder="AreaOfStudys" /></div>
                                        <div class="col-md-12"><label class="labels">Degree</label><input onChange={this.handleChangeDegree} type="text"  placeholder="Degree" /></div>
                                        <div class="col-md-12"><label class="labels">From</label><input onChange={this.handleChangeFrom} type="text"  placeholder="From" /></div>
                                        <div class="col-md-12"><label class="labels">To</label><input onChange={this.handleChangeTo} type="text"  placeholder="To" /></div>
                                    </div>
                                </div><br />
                                {/* <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience"  /></div> <br />
                        <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details"  /></div> */}
                            </div>
                        </div>
                    </form>
                </div >
            </>



        )
    }

}






export default withAuth0(Accountform)
