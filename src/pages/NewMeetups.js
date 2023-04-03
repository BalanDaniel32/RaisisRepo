import NewMeetUpForm from '../components/layout/Forms/NewMeetUpForm.js';
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function NewMeetupPage(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
        fetch('https://react-project-ab5d0-default-rtdb.firebaseio.com/meetups.json'
        ,{method:'POST',
    body:JSON.stringify(meetupData),
    headers:{
        'Content-Type':'application/json'
    }
}).then(()=>{
    navigate('/');
});


    }
    return <section>
        <h1>Add Meetup Page</h1>
        <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
        </section>;
}
export default NewMeetupPage;