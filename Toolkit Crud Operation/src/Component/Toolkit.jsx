import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo, deleteUser } from "../Counter/CounterSlice";
import { Form, Table } from "react-bootstrap";

function ToolKit(props) {
    const user = useSelector((state) => state.counter.userInfo) || [];

    const dispach = useDispatch();

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        age: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

    const handleClick = useCallback(
        (e) => {
            e.preventDefault();
            dispach(addUserInfo({ ...inputValue }));

            setInputValue({
                name: "",
                email: "",
                age: "",
                password: "",
            });
        },
        [dispach, inputValue]
    );

    const handleDelete = (id) => {
        dispach(deleteUser(id));
    };

    return (
        <div>
            <br />
            <center>
                <Form action="" className="border border-dark rounded w-50 p-3">
                    <h2>Registration Form</h2>
                    <br />
                    Name :{" "}
                    <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        value={inputValue.name}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    Email :{" "}
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={inputValue.email}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    Age :{" "}
                    <input
                        required
                        type="number"
                        name="age"
                        id="age"
                        value={inputValue.age}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    Password :{" "}
                    <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        value={inputValue.password}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleClick}
                    >
                        Submit
                    </button>
                </Form>
            </center>

            <br />

            <div>
                <center>
                    <h2>Registered Users Data</h2>
                    <br />
                    <Table border={2} className="container m-2">
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Age</td>
                            <td>Password</td>
                            <td>Action</td>
                        </tr>
                        {user.length === 0 ? (
                            <tr>
                                <td colSpan="5">
                                    <h4 className="d-flex justify-content-center">
                                        No Data Found
                                    </h4>
                                </td>
                            </tr>
                        ) : (
                            user.map((user, index) => (
                                <tr key={index}>
                                    <td> {user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </Table>
                </center>
            </div>
        </div>
    );
}

export default ToolKit;
