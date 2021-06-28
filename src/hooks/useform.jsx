import { useState } from 'react'; 
const useForm = (props) => {
    const [task, setTask] = useState({});
    const  handleInputChange = e => {
     setTask({...task, [e.target.name]: e.target.value } );
   };
  const handleSubmit = (e) => {
     e.preventDefault();
     e.target.reset();
     props.handleSubmit(task);
     const items = {};
     setTask({items});
   };
   return [handleInputChange, handleSubmit];
}
export default useForm;