import './Login.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom';


const Login = ({setToken}) => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            setToken(values.email);
            const searchURL = "https://jsonplaceholder.typicode.com/users/1";
            axios.get(searchURL).then(response => {
                localStorage.setItem('token', response.data.email); 
                history.push("/posts:" + response.data.id)
            });
        },
    });

    return (
        <div className='p-login'>
            <h1>Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Login;