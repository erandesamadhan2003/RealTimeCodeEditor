import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/app/slice/authSlice";
import { toast } from "sonner";

export const NavBar = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Logged out successfully");
        navigate("/login");
    };

    return (
        <nav className="bg-[#0D021F]/95 backdrop-blur-md border-b border-[#7E3AF2]/30 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left Side - Logo */}
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#7E3AF2] to-[#9B51E0] bg-clip-text text-transparent">
                    CoCode
                </Link>

                {/* Right Side - Buttons */}
                <div className="flex items-center space-x-4">
                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded-xl bg-[#1E1E2E] text-gray-300 border border-[#7E3AF2]/40 hover:bg-[#7E3AF2] hover:text-white transition duration-300 shadow-md"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7E3AF2] to-[#9B51E0] text-white font-semibold hover:opacity-90 transition duration-300 shadow-md"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>
                            <span className="text-gray-300">Hello, {user.name || "User"}</span>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 rounded-xl bg-[#2A2A3C] border border-[#7E3AF2]/50 text-gray-300 hover:bg-[#7E3AF2] hover:text-white transition duration-300 shadow-md"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};
