import {useMemo} from "react";

import Users from "../users/users.jsx";
import DashboardMain from "../dashboard-main/dashboard-main.jsx";

const NavContent = ({ activeNavId = '1' }) => {
    const activeContent = useMemo(() =>{
        switch (activeNavId) {
            case '1':
                return <DashboardMain />
            case '2':
                return <h1>"Option"</h1>
            case '3':
                return <Users />
            case '4':
                return <h1>"Team1"</h1>
            case '5':
                return <h1>"Team2"</h1>
            case '6':
                return <h1>"File"</h1>
            default:
                return <h1>"Dashboard"</h1>
        }
    }, [activeNavId])

    return activeContent
}

export default NavContent
