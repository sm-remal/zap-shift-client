import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const ForgetPassword = () => {
    const { forgetPassword } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    // Auto-fill email if passed from Login Page
    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleResetPassword = async (event) => {
        event.preventDefault();

        if (!email) return alert("Please enter your email!");

        setLoading(true);
        alert("Sending reset email...");

        try {
            await forgetPassword(email);

            alert("Reset email sent! Check your inbox.");

            setEmail("");

            // Open Gmail after 1 second
            setTimeout(() => window.open("https://mail.google.com", "_blank"), 1000)
        } catch (err) {
            console.log(err);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full px-4 sm:px-6 md:px-0 flex justify-center items-center min-h-full">
            <div className="card-body w-full max-w-sm">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Reset Password
                </h1>

                <p className="text-center text-gray-600 mb-6">
                    Enter your email address and we will send you a link to reset your password.
                </p>

                <form onSubmit={handleResetPassword} className="space-y-4">

                    {/* Email Field */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-md placeholder-gray-400"
                            required
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn w-full bg-primary font-semibold mt-4 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        {loading ? "Sending..." : "Send Reset Email"}
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-700">
                    Remember your password?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-green-600 hover:text-green-700 cursor-pointer font-semibold underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;
