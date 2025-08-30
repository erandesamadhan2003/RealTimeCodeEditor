import { NavBar } from "@/components/ui/layout/Navbar";
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        if(!user) navigate('/login');
    },[]);
    

    

    return (
        <>
            <NavBar />
            <p>{user.name}</p>
        </>
    )
}