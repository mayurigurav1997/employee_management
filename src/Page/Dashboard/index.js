import React, { useState } from 'react';
import { employeesData } from "../../data";
import Swal from "sweetalert2";
import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";


function Dashboard() {
    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setselectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        // console.log("EditId",id);
        
       

    }
    const handleDelete = (id) => {
        // console.log("DeleteId",id);

    }

    return (
        <div className="container">
            {/* 2 && 7  -> 7 
                    4 && 9  -> 9 
                    0 && 6  -> 0 */}
            {/* if isAdding and isEditing is true then it will render <></> component */}
            {!isAdding && !isEditing && (
                <>
                    <Header setIsAdding={setIsAdding} />

                    <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} />
                </>
            )}

            {/* Add component */}
            {isAdding && (
                <Add employees={employees} setEmployees={setEmployees} setIsAdding={setIsAdding} />
            )}

            {isEditing && (
                <Edit employees={employees} setEmployees={setEmployees} setIsEditing={setIsEditing} selectedEmployee={selectedEmployee} />
            )}
        </div>
    )
}

export default Dashboard