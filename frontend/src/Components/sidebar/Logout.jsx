import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";

const Logout = () => {
    const { logout } = useLogout();

    const handleLogout = () => {
        console.log("Logout clicked");
        logout();
    };

    return (
        <>
            <div className="mt-auto" onClick={handleLogout}>
                <CiLogout
                    className="w-8 h-8 text-white cursor-pointer"
                    />
            </div>
        </>
    );
};

export default Logout;
