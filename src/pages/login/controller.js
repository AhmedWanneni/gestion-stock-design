import axios from 'axios';

export const Loogin = async (Info) => {
    const { data } =  await axios.post('http://localhost:1337/auth/local',Info); 
      console.log(data)
      
     return data 
  };