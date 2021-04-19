import './Form.component.css';
import React, { useState } from 'react';

const Formcomponent = () => {
    const [form, setFormValue] = useState([{
        firstname: 'for example zahra',
        lastname: 'for example kakhki',
        email: 'for example z_sadat_k@gamil.com',
        gender: 'male/female'
    }]);
    const onSubmitForm = (event) => {
        event.preventDefault();
        let fields = {};
        for (const elemen of event.target.elements) {

            if (elemen.type === "radio" && elemen.checked)
                fields[elemen.name] = elemen.value;
            else if (elemen.type === "text")
                fields[elemen.name] = elemen.value;

        }

        setFormValue([...form, fields]);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fields),
        })
            .then(response => response.json())
            .then(fields => {
                console.log('Success:', fields);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const [table, changeFormValue] = useState({
        firstname: 'Not updated',
        lastname: 'Not updated',
        email: 'Not updated',
        gender: 'Not updated'
    });
    const onChangeForm = (event) => {
        changeFormValue({ ...table, [event.target.name]: event.target.value });

    }

    return (
        <>
            <div className="container mt-2">
                <form onSubmit={onSubmitForm} >
                    <div className="form-group row mt-5 d-flex justify-content-center">
                        <div className="col-10 col-md-6">
                            <input type="text" className="form-control" name="firstname" placeholder="Enter your Name" onChange={onChangeForm} />
                        </div>
                    </div>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-10 col-md-6">
                            <input type="text" className="form-control" name="lastname" placeholder="Enter Your Family" onChange={onChangeForm} />
                        </div>
                    </div>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-10 col-md-6">
                            <input type="eamil" className="form-control" name="email" placeholder="Enter Your Email" onChange={onChangeForm} />
                        </div>
                    </div>
                    <div className="col-sm-10 d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="male" id="RadioDefault" onChange={onChangeForm} />
                            <label className="form-check-label" for="RadioDefault">
                                Male
                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="Female" id="RadioDefault2" onChange={onChangeForm} />
                            <label className="form-check-label" for="RadioDefault2">
                                Female
                </label>
                        </div>
                    </div>
                    <div className="col-sm-10 mt-4 d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                </form>
                {form.map((items, index) => {
                    return (
                        <div className="tabel_left col-11 mt-5 ml-md-5" key={index}>
                            <table className="table table-bordered text-center">

                                <tbody>
                                    <tr>
                                        <td>
                                            firstName
                                </td>
                                        <td>
                                            {items.firstname}

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            lastName
                                </td>
                                        <td>
                                            {items.lastname}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Email
                                </td>
                                        <td>
                                            {items.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Gender
                                </td>
                                        <td>

                                            {items.gender}
                                        </td>
                                    </tr>


                                </tbody>

                            </table>
                        </div>
                    )
                })
                }
                <h3 className="pt-5 d-flex justify-content-center">*****Updating*****</h3>
                <div className="tabel_left col-11 mt-5 ml-md-5" >
                    <table className="table table-bordered text-center">

                        <tbody>
                            <tr>
                                <td>
                                    firstName
                                </td>
                                <td>
                                    {table.firstname}

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    lastName
                                </td>
                                <td>
                                    {table.lastname}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Email
                                </td>
                                <td>
                                    {table.email}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Gender
                                </td>
                                <td>

                                    {table.gender}
                                </td>
                            </tr>


                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default Formcomponent;