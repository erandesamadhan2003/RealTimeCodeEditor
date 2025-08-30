import { login } from "@/app/slice/authSlice";
import { NavBar } from "@/components/ui/layout/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(user)).then(() => {
            navigate("/");
        });
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D021F] via-[#1A0B2E] to-[#0D021F] text-white">
                <div className="w-full max-w-md bg-[#1E1E2E] p-8 rounded-2xl shadow-lg border border-[#7E3AF2]/40">

                    <p className="text-center text-gray-400 mb-8">
                        Login to continue
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-[#2A2A3C] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#7E3AF2]"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-[#2A2A3C] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#7E3AF2]"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7E3AF2] to-[#9B51E0] font-semibold hover:opacity-90 transition duration-300 shadow-lg"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-700"></div>
                        <span className="px-3 text-gray-400 text-sm">OR</span>
                        <div className="flex-1 h-px bg-gray-700"></div>
                    </div>

                    {/* Signup link */}
                    <p className="text-center text-gray-400">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-[#7E3AF2] hover:underline hover:text-[#9B51E0]">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};
