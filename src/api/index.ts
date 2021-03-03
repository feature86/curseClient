import axios, { CancelTokenSource}  from 'axios';
import { User, Curse} from '../types'

export const fetchUser = async (source: CancelTokenSource): Promise<User[]> => { 
    const a = await axios.get<User[]>('http://localhost:5000/person', {cancelToken: source.token});
    return a.data;  
}

export const fetchUserCurses = async (source: CancelTokenSource, userHash: String): Promise<Curse[]> => { 
    const a = await axios.get<Curse[]>(`http://localhost:5000/curse/list/${userHash}`, {cancelToken: source.token});
    return a.data;  
}

export const addCurse =  async (source: CancelTokenSource, userHash: String): Promise<String> => { 
    const a = await axios.post('http://localhost:5000/curse', {
        person: userHash
    })
    return a.data;  
}