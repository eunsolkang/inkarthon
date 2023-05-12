import { useEffect, useState } from "react";
import { getPending, getTeamList } from "../lib/firebase";

export default function useTeam(){
    const [teams, setTeams] = useState([]);
    const [isPending, setIsPending] = useState([]);
    
    const handleTeamList = async() => {
        const res = await getTeamList();
        const r = await getPending();
        const data = res.val();
        
        console.log(data);
        setTeams(data);
        setIsPending(r.val());
        
    }
    useEffect(() => {
        handleTeamList();
    }, []);

    return {teams,isPending }
}