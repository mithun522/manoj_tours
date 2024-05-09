import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login-bg.png";

const Login = () => {
    const navigate = useNavigate();

    const login = (e) => {
        // TODO: Enable once backend is available

        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        // if (!email.trim() || !password.trim()) {
        //     alert("Please enter both email and password");
        //     return;
        // }

        // if (!validateEmail(email)) {
        //     alert("Please enter a valid email address");
        //     return;
        // }

        navigate('/dashboard');
    }

    // const validateEmail = (email) => {
    //     // Regular expression for email validation
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return regex.test(email);
    // }

    return ( 
        <section className="relative">
            <img src={loginBg} alt="Sky Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="flex flex-col items-end justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 lg:mr-28 z-10 relative">
                <div className="w-full bg-white rounded-lg border border-gray-200 shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mt-10">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white self-start">
                            Login as an Admin User
                        </h1>
                        <form className="space-y-4 md:space-y-6 flex flex-col" onSubmit={(e) => login(e)}>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 dark:text-white self-start">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-900 dark:text-white self-start">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <button type="submit" className="w-full bg-blue-400 hover:bg-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
