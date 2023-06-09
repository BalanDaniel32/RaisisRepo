import {useRef} from 'react';
import Card from '../UI/Card.js';
import classes from './NewMeetUpForm.module.css';
import NewMeetupPage from '../../../pages/NewMeetups.js';
function NewMeetUpForm(props){
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle=titleInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredAddress=addressInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;
        const meetupData={
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription,
        };
        props.onAddMeetup(meetupData);
        
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Meetup Address</label>
                    <input type="text" required id="address" ref={addressInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">description</label>
                    <textarea type="text" required id="description" ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add</button>
                </div>
            </form>
        </Card>
    )
}
export default NewMeetUpForm;