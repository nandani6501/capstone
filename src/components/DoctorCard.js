import React from "react";
import Avatar from "../Image/AVATAR.jpg"

function DoctorCard(props) {

    const { id, name, address, area, city, contact_no, specification, experience,hospital,degree } = props.doctor;

    return (
        <div className="card mb-3 p-3" style={{ maxWidth: "800px" ,borderRadius:"3%"}}>
            <div className="row g-0">
            <div className="col-md-4">
                   <img  src={Avatar}  className="img-fluid rounded-start"></img>
                 
               </div>
                <div className="col-md-4">
                    <div className="card-body " style={{fontSize:"1.3rem" , fontFamily:"sans-serif"}} >
                    <h4 className="card-text "><b> {name}</b></h4>
                        <p className="card-text"><i class="fas fa-hospital"></i> {hospital}</p>
                        <p className="card-text"><i class="fas fa-map-marker-alt"></i> {address}</p>
                        <p className="card-text"><i class="fas fa-user-graduate"></i> {degree}</p>
                        {/* <p className="card-text "><i class="fas fa-mobile-alt"></i> {contact_no}</p>
                        <p className="card-text"><i class="fas fa-stethoscope"></i> {specification}</p>
                        <p className="card-text"><i class="fas fa-user"></i>  {experience}</p> */}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body " style={{fontSize:"1.3rem" , fontFamily:"sans-serif"}} >
                  
                        {/* <p className="card-text"><i class="fas fa-hospital"></i> {hospital}</p>
                        <p className="card-text"><i class="fas fa-map-marker-alt"></i> {address}</p>
                        <p className="card-text"><i class="fas fa-user-graduate"></i> {degree}</p> */}
                        <p className="card-text mt-5 "><i class="fas fa-mobile-alt"></i> {contact_no}</p>
                        <p className="card-text"><i class="fas fa-stethoscope"></i> {specification}</p>
                        <p className="card-text"><i class="fas fa-user"></i>  {experience}</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default DoctorCard;