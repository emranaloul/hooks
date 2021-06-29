import axios from "axios";


const useAjax = () =>{
    const handleRequest = async (URL,method, body=null)=>{
      return await  axios({
                  method: method,
                  url: URL,
                  mode: 'cors',
                  cache: 'no-cache',
                  headers: { 'Content-Type': 'application/json' },
                  data: JSON.stringify(body),
                })
    }

    return [handleRequest]
}

export default useAjax;