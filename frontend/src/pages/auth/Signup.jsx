import { AUTH_URL } from "@/api/api";
import { NavBar } from "@/components/ui/layout/Navbar";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.password) {
            console.error("All fields are required");
            return;
        }
        try {
            const response = await axios.post(`${AUTH_URL}/register`, user);
            console.log("Signup successful:", response);
            if (response.status === 201) {
                toast('User Registered Successfully');
                navigate("/login");
            }
        } catch (error) {
            console.error("Signup failed:", error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D021F] via-[#1A0B2E] to-[#0D021F] text-white">
                <div className="w-full max-w-md bg-[#1E1E2E] p-8 rounded-2xl shadow-lg border border-[#7E3AF2]/40">

                    <h2 className="text-3xl font-bold text-center mb-6 text-[#7E3AF2]">
                        Create Account
                    </h2>
                    <p className="text-center text-gray-400 mb-8">
                        Join us
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm mb-2 text-gray-300">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-[#2A2A3C] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#7E3AF2]"
                            />
                        </div>

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

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7E3AF2] to-[#9B51E0] font-semibold hover:opacity-90 transition duration-300 shadow-lg"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-700"></div>
                        <span className="px-3 text-gray-400 text-sm">OR</span>
                        <div className="flex-1 h-px bg-gray-700"></div>
                    </div>

                    <p className="text-center text-gray-400">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-[#7E3AF2] hover:underline hover:text-[#9B51E0]"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};
