import React from "react";
import DoctorCard from "./DoctorCard";

function DoctorList(props) {


    const renderongDoctorList = props.doctors.map((doctor) => {
        return (
            <DoctorCard key={doctor.id} doctor={doctor}/>
        );
    });

    return (
        <div className="container my-4" style={{ maxWidth: "800px" }}>
            <h3 className="mb-4">Doctor List</h3>
            <div className="list-group list-group-numbered">
                {renderongDoctorList}
            </div>
        </div>
    );
}

export default DoctorList;