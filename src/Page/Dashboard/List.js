import React from 'react'

function List({ employees, handleEdit, handleDelete }) {
  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, index)=>(
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.salary}</td>
                <td>{employee.date}</td>
                <td className="text-right">
                  <button onClick={() => handleEdit(employee.id)} className="button ">Edit</button>
                </td>
                <td className="text-left">
                  <button onClick={() => handleDelete(employee.id)} className="button ">Delete</button>
                </td>
              </tr>
            ))
          ): (<></>)
          }
      </tbody>
    </table>
    </div >
  )
}

export default List