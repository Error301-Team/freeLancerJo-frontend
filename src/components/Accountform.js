import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import './Accountform.css'
class Accountform extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            surname:'',
            name:'',
            phononumber: '',
            email: '',
            education: '',
            jobdescription: '',
            skills: [],
            languages: [],
            price: '',
            location: '',
            country: '',
            region: '',
            experience:'',
            img:''
        }
    }

    submitHandle = async (e) => {
        e.preventDefault();
        console.log(this.state.firstname);
        console.log(this.state.surname);
        let data = {
            name: `${this.state.firstname} ${this.state.surname}`,
            phononumber: this.state.phononumber,
            email: this.state.email,
            education: this.state.education,
            jobdescription: this.state.jobdescription,
            skills: this.state.skills.split(','),
            languages: this.state.languages.split(','),
            price: this.state.price,
            location: this.state.location,
            country: this.state.country,
            region: this.state.region,
            experience:this.state.experience
        }

        // console.log(process.env.REACT_APP_BACKEND_API_KEY);
        // let job = axios.post(`${process.env.REACT_APP_BACKEND_API_KEY}createJob`, data);
    }

    handleChangename=(e)=>{
        let firstname= e.target.value;
        this.setState({
            firstname:firstname
        })
    }

    handleChangesurname=(e)=>{
        let surname= e.target.value;
        this.setState({
            surname:surname
        })
    }

    handleChangephononumber=(e)=>{
        let phononumber= e.target.value;
        this.setState({
            phononumber:phononumber
        })
    }
    
    handleChangeemail=(e)=>{
        let email= e.target.value;
        this.setState({
            email:email
        })
    }

    handleChangeeducation=(e)=>{
        let education= e.target.value;
        this.setState({
            education:education
        })
    }

    handleChangejobdescription=(e)=>{
        let jobdescription= e.target.value;
        this.setState({
            jobdescription:jobdescription
        })
    }

    handleChangeskills=(e)=>{
        let skills= e.target.value;
        this.setState({
            skills:skills
        })
    }

    handleChangelanguages=(e)=>{
        let languages= e.target.value;
        this.setState({
            languages:languages
        })
    }

    handleChangeprice=(e)=>{
        let price= e.target.value;
        this.setState({
            price:price

        })
    }

    handleChangelocation=(e)=>{
        let location= e.target.value;
        this.setState({
            location:location
        })
    }

    handleChangecountry=(e)=>{
        let country= e.target.value;
        this.setState({
            country:country
        })
    }

    handleChangeregion=(e)=>{
        let region= e.target.value;
        this.setState({
            region:region
        })
    }

    handleChangeexperience=(e)=>{
        let experience= e.target.value;
        this.setState({
            experience:experience
        })
    }

    handleChangeimg=(e)=>{
        let img= e.target.value;
        this.setState({
            img:img
        })
    }

    render() {
        return (
            <div class="container rounded bg-white mt-5 mb-5">
                <form onSubmit={this.submitHandle}>
                    <div class="row">
                        <div class="col-md-3 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /></div>
                            <div id='centerit' class="col-md-6"><label class="labels">Image Link:</label><input onChange={this.handleChangeregion} type="text" class="form-control" placeholder="Image Link" /></div>
                        </div>
                        <div class="col-md-5 border-right">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-right">Profile Settings</h4>
                                </div>
                                <div class="row mt-2">
                                    <div class="col-md-6"><label class="labels" >Name</label><input onChange={this.handleChangename} type="text" class="form-control" placeholder="first name" /></div>
                                    <div class="col-md-6"><label class="labels">Surname</label><input onChange={this.handleChangesurname} type="text" class="form-control" placeholder="surname" /></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12"><label class="labels">Phone</label><input onChange={this.handleChangephononumber} type="text" class="form-control" placeholder="enter phone number" /></div>
                                    <div class="col-md-12"><label class="labels">Email ID</label><input onChange={this.handleChangeemail} type="text" class="form-control" placeholder="example@email.com" /></div>
                                    <div class="col-md-12"><label class="labels">Location</label><input onChange={this.handleChangelocation} type="text" class="form-control" placeholder="123 Main Street, That house." /></div>
                                    <div class="col-md-12"><label class="labels">Education</label><input onChange={this.handleChangeeducation} type="text" class="form-control" placeholder="college" /></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6"><label class="labels">Country</label><input onChange={this.handleChangecountry} type="text" class="form-control" placeholder="country"  /></div>
                                    <div class="col-md-6"><label class="labels">State/Region</label><input onChange={this.handleChangeregion} type="text" class="form-control"  placeholder="state" /></div>
                                </div>
                                <br />
                                <hr />
                                <Button variant="warning"  type="submit">
                                    Submit
                                </Button>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 py-5">
                                <br />
                                    <Form.Group as={Col} controlId="formGrid Experience">
                                        <Form.Label > Experience</Form.Label>
                                        <Form.Select onChange={this.handleChangeexperience}  defaultValue="Choose...">
                                            <option>Entry Level</option>
                                            <option>Intermediate</option>
                                            <option> Expert</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <div class="col-md-12"><label class="labels">Job Description</label><input onChange={this.handleChangejobdescription} type="text" class="form-control" placeholder="enter Job Description"  /></div>
                                    <div class="col-md-12"><label class="labels">Languages</label><input onChange={this.handleChangelanguages} type="text" class="form-control" placeholder="enter Languages: ex (English, Arabic, french)"  required/></div>
                                    <div class="col-md-12"><label class="labels">Price Per/Hour</label><input onChange={this.handleChangeprice} type="text" class="form-control" placeholder="enter  Price Per/Hour"  /></div>
                                    <div class="col-md-12"><label class="labels">Skills</label><input onChange={this.handleChangeskills} type="text" class="form-control" placeholder="enter Skills: ex (creative, teamleader, Fast Learner)"  required/></div>
                            </div><br />
                            {/* <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience"  /></div> <br />
                        <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details"  /></div> */}
                        </div>

                    </div>
                </form>
            </div >




        )
    }

}






export default Accountform
