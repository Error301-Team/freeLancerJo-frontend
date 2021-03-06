import React, { Component } from 'react'

class Phtography1 extends Component {

    render() {
        return (
            <>
                <section class="section about-section gray-bg" id="about">
                    <div class="container">
                        <div class="row align-items-center flex-row-reverse">
                            <div class="col-lg-6">
                                <div class="about-text go-to">
                                    <h3 class="dark-color">About Me</h3>
                                    <h6 class="theme-color lead"></h6>
                                    <p><mark>{this.props.job_describtion}</mark>.</p>
                                    <div class="row about-list">
                                        <div class="col-md-6">
                                            <div class="media">
                                                <label>Name</label>
                                                <p>{this.props.name}</p>
                                            </div>
                                            <div class="media">
                                                <label>Phone </label>
                                                <p>{this.props.phoneNumber}</p>
                                            </div>
                                            <div class="media">
                                                <label>Email</label>
                                                <p>{this.props.email}</p>
                                            </div>
                                            <div class="media">
                                                <label>Location</label>
                                                <p>{this.props.location}</p>
                                            </div>
                                            <div class="media">
                                                <label>Languages</label>
                                                {this.props.lauguages.map(Element => {
                                                    return (
                                                        <p>{Element}</p>
                                                    )
                                                })}
                                            </div>
                                            
                                        </div>

                                        <div class="col-md-6">
                                        <div class="media">
                                                <label>Experience</label>
                                                <p>{this.props.experience}</p>
                                            </div>
                                            <div class="media">
                                                <label> Skills</label>
                                                {this.props.skills.map(Element => {
                                                    return (
                                                        <p>{Element}</p>
                                                    )
                                                })}
                                            </div>
                                            
                                            <div class="media">
                                                <label>Price</label>
                                                <p>{this.props.price}$</p>
                                            </div>
                                            <div class="media">
                                                <label>Education</label>
                                                <p>College : {this.props.Education.School}</p>
                                                <p>Area Of Studys : {this.props.Education.AreaOfStudys}</p>
                                                <p>Degree : {this.props.Education.Degree}</p>
                                                <p>From : {this.props.Education.From}</p>
                                                <p>To : {this.props.Education.To}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="about-avatar">
                                    <img className="profile-picture" src={this.props.img} title="this.props.profilePic" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="counter">
                            <div class="row">
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="500" data-speed="500">500</h6>
                                        <p class="m-0px font-w-600">Happy Clients</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="150" data-speed="150">150</h6>
                                        <p class="m-0px font-w-600">Project Completed</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="850" data-speed="850">850</h6>
                                        <p class="m-0px font-w-600">Photo Capture</p>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <div class="count-data text-center">
                                        <h6 class="count h2" data-to="190" data-speed="190">190</h6>
                                        <p class="m-0px font-w-600">Telephonic Talk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Phtography1