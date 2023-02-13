import axios from 'axios';

class RestClient  {
    //get
    static GetRequest = (getUrl)=>{
        return axios.get(getUrl).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        });
    }

   //post
    static PostRequest = (postUrl,postJson)=>{

        let config= {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios.post(postUrl,postJson,config).then(response=>{
            return "Mesajınız Başarıyla Gönderildi";
        }).catch(error=>{
            return null;
        });
    }




}

export default RestClient