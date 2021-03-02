import  axios  from 'axios';
import { User} from '../types'

export const fetchUser = async (): Promise<User[]> => { 
    try {
        const a = await axios.get<User[]>('http://localhost:5000/person');
        return a.data;  
    } catch (e) {
        throw new Error('Error Fetching Data');
    }
}