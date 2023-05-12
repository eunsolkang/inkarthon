import { useEffect, useState } from "react";
import { getTeamList } from "../lib/firebase";

export default function useTeam(){
    const [teams, setTeams] = useState([]);
    
    const handleTeamList = async() => {
        const res = await getTeamList();
        const data = res.val();
        console.log(data);
        setTeams(data);
    }
    useEffect(() => {
        handleTeamList();
    }, []);

    return {teams}
}