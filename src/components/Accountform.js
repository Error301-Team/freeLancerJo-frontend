import React, { Component } from 'react'
    import { Form , Col} from 'react-bootstrap'
import './Accountform.css'
class Accountform extends Component {
  
  render() {
    return (




        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                   
                    <input type="file" ></input>
                </div>
                <div class="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value="" /></div>
                            {/* <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname" /></div> */}
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12"><label class="labels">Phone</label><input type="text" class="form-control" placeholder="enter phone number" value="" /></div>
                            <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" /></div>
                            <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value="" /></div>

                            <div class="col-md-12"><label class="labels">Job Description</label><input type="text" class="form-control" placeholder="enter Job Description" value="" /></div>
                            <div class="col-md-12"><label class="labels">Skills</label><input type="text" class="form-control" placeholder="enter Skills" value="" /></div>
                            <div class="col-md-12"><label class="labels">Languages</label><input type="text" class="form-control" placeholder="enter Languages" value="" /></div>
                            <div class="col-md-12"><label class="labels"> Price Per/Hour</label><input type="text" class="form-control" placeholder="enter  Price Per/Hour" value="" /></div>
                            <div class="col-md-12"><label class="labels"> Location</label><input type="text" class="form-control" placeholder="enter  Location" value="" /></div>
                         
                           
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                            <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="p-3 py-5">
                        <Form>
                        <Form.Group as={Col} controlId="formGrid Experience">
      <Form.Label> Experience</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Entry Level</option>
        <option>Intermediate</option>
        <option> Expert</option>

      </Form.Select>
    </Form.Group>
    </Form>
                        </div><br />
                        {/* <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value="" /></div> <br />
                        <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value="" /></div> */}
                    </div>
                </div>
            </div>




    )
}
       
    }
    
   
    
    


export default Accountform