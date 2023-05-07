import React from "react"

export default function SoloForm(){
    return(
        <fieldset className="scheduler-border"><br />
        <h1>Fill your details</h1>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input type="text" className="form-control"placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Branch</label>
                <select className="form-control" id="exampleFormControlSelect1">
                <option>CSE</option>
                <option>ECE</option>
                <option>MECH</option>
                <option>TCE</option>
                <option>AIML</option>
                <option>CSD</option>
                <option>CCE</option>
                <option>CSIOT</option>
                </select>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Semester and class</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter your semester and class" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email Address</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your email ID" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Phone Number</label>
            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Enter the phone number you are going to make payment with" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
        </fieldset>
    )
}