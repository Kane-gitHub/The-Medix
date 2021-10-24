// IMPORTED LIBRARIES 
// BOOTSTRAP
// ISOMORPHIC FETCH

import React from 'react';
import Logo from './Logo';
import Button from 'react-bootstrap/Button';
import fetch from 'isomorphic-fetch';

// SETTING STATE FOR SIGN UP COMPONENT

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            pass: '',
            name: '',
            surname: '',
            DOB: '',
            id: '',
            medHist: '',
            allergy: '',
            APs: '',
            themedix: ''
        }
        this.handleUser = this.handleUser.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleDob = this.handleDob.bind(this);
        this.handleId = this.handleId.bind(this);
        this.handleMedicalHist = this.handleMedicalHist.bind(this);
        this.handleAllergies = this.handleAllergies.bind(this);
        this.handleAppointments = this.handleAppointments.bind(this);
    }

    // NAME SET TO STATE
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    // SURNAME SET TO STATE
    handleSurname(e) {
        this.setState({
            surname: e.target.value
        })
    }

    // DOB SET TO STATE
    handleDob(e) {
        this.setState({
            DOB: e.target.value
        })
    }

    // ID NUM SET TO STATE
    handleId(e) {
        this.setState({
            id: e.target.value
        })
    }

    // MEDICAL HISTORY SET TO STATE 
    handleMedicalHist(e) {
        this.setState({
            medHist: e.target.value
        })
    }

    // ALLERGIES SET TO STATE 
    handleAllergies(e) {
        this.setState({
            allergy: e.target.value
        })
    }

    // APPOINTMENTS SET TO STATE 
    handleAppointments(e) {
        this.setState({
            APs: e.target.value
        })
    }

    // USERNAME SET TO STATE
    handleUser(e) {
        this.setState({
            user: e.target.value
        })
    }
    // PASSWORD SET TO STATE
    handlePass(e) {
        this.setState({
            pass: e.target.value
        })
    }

    // CREATES DOCUMENT WITHIN THE DATABASE WITH RESPECTIVE CREDENTIALS
    handleSignUp() {
        // POST METHOD FOR SIGNUP USING USERNAME, PASS, NAME, DOB, ID NUM, MED HIST, ALLERGIES, APPOINTMENTS
        if (this.state.pass !== '' && this.state.user !== '' && this.state.id !== '') {
            fetch('/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.state.user,
                    password: this.state.pass,
                    name: this.state.name,
                    surname: this.state.surname,
                    dob: this.state.DOB,
                    id_number: this.state.id,
                    medical_history: this.state.medHist,
                    allergies: this.state.allergy,
                    appointments: this.state.APs
                })
            }).then(res => res.json())
                .then(response => {
                    console.log(response)
                    if (response.data) {
                        this.setState({
                            user: '',
                            pass: '',
                            name: '',
                            surname: '',
                            DOB: '',
                            id: '',
                            medHist: '',
                            allergy: '',
                            APs: '',
                            themedix: response.data.username
                        });
                    }
                       
                }, err => console.log(err))
            alert('Profile Created!!! \n Click LOGIN button below to login')
        } else {
            alert('Please enter a username, a password and an ID number')
        }

    }


    render() {
        return (
            <div>
                <Logo />
                <div id='sign-up-div'>
                    <label className='sign-up-item'>
                        Username:
                        <input onChange={this.handleUser} type='text' placeholder='enter username' value={this.state.user} />
                    </label>
                    <br />
                    <label className='sign-up-item'>
                        Password:
                        <input onChange={this.handlePass} type='password' placeholder='enter password' value={this.state.pass} />
                    </label>
                    <br />
                    <label className='sign-up-item'>
                        Name:
                        <input onChange={this.handleName} type='text' placeholder='enter name' value={this.state.name} />
                    </label>
                    <br />
                    <label className='sign-up-item'>
                        Surname:
                        <input onChange={this.handleSurname} type='text' placeholder='enter surname' value={this.state.surname} />
                    </label>
                    <br />
                    <label className='sign-up-item'>
                        Date Of Birth:
                        <input onChange={this.handleDob} type='date' value={this.state.DOB} />
                    </label>
                    <br />
                    <label className='sign-up-item'>
                        ID Number:
                        <input onChange={this.handleId} type='text' placeholder='enter id_number' value={this.state.id} />
                    </label>
                    <br />
                    <label className='sign-up-item'>
                        Medical History:
                        <input onChange={this.handleMedicalHist} type='text' placeholder='enter medical history' value={this.state.medHist} />
                    </label>
                    <br />
                    <label className='sign-up-item'>
                        Allergens:
                        <input onChange={this.handleAllergies} type='text' placeholder='enter allergens' value={this.state.allergy} />
                    </label>
                    <br />
                    <label className='sign-up-item'>
                        Appointment(Description & Date):
                        <input onChange={this.handleAppointments} type='text' placeholder='e.g. Check-up 18 Sept 2020' value={this.state.APs} />
                    </label>
                    <br />
                    <Button id='sign-page-boton' onClick={this.handleSignUp} variant='success'>Sign Up</Button>
                    {this.state.themedix !== '' && <a href='/login'><Button variant='primary'>LOGIN</Button></a>}
                </div>
            </div>
        )
    }
}