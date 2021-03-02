import axios, { CancelTokenSource}  from 'axios';
import { User} from '../types'

export const fetchUser = async (source: CancelTokenSource): Promise<User[]> => { 
    const a = await axios.get<User[]>('http://localhost:5000/person', {cancelToken: source.token});
    return a.data;  
}