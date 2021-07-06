import './Login.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory  } from "react-router-dom";



const Login = () => {
    const history = useHistory();


    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            const searchURL = "https://jsonplaceholder.typicode.com/users/1";
            axios.get(searchURL).then(response => {
                let email = response.data.email;
                console.log(email)
                localStorage.setItem('data', JSON.stringify(response, null, 2));
                history.push("/posts:"+email)
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