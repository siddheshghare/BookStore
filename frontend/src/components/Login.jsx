import React from 'react';
import { Link } from "react-router-dom";

function Login() {
    const closeDialog = () => {
        const dialog = document.getElementById('my_modal_3');
        dialog.close();
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box relative">
                    {/* Close Button Using Link */}
                    <Link
                        to="/"
                        onClick={closeDialog}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </Link>

                    <h3 className="font-bold text-lg">Login</h3>
                    <div className="mt-4">
                        <span className="font-semibold mt-2">Email</span><br />
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-80 mt-2 border rounded-md outline-none"
                        />
                    </div>
                    <div className="mt-4">
                        <span className="font-semibold mt-2">Password</span><br />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-80 mt-2 border rounded-md outline-none"
                        />
                    </div>
                    <div className="mt-4 px-3 flex justify-between items-center">
                        <button className="bg-pink-600 border hover:bg-pink-800 text-white px-2 py-1 rounded-md">Login</button>
                        <p>
                            Not registered?{' '}
                            <Link to="/signup">
                                <span className="underline cursor-pointer text-blue-400">SignUp</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default Login;
