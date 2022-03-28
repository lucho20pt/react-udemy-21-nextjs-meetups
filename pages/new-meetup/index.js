// our-domain.com/new-meetup
import NewMeetupForm from '@/components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  //
  const onAddMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
  }

  return (
    <>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}></NewMeetupForm>
    </>
  )
}

export default NewMeetupPage
