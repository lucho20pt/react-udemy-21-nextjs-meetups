// our-domain.com/meetupId
import { useRouter } from 'next/router'
import MeetupDetail from '@/components/meetups/MeetupDetail'

const MeetupDetailPage = () => {
  //
  // const router = useRouter()
  // const meetupId = router.query.meetupId

  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D0%97%D0%B8%D0%BC%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D0%B0%D0%B9.jpg/1920px-%D0%97%D0%B8%D0%BC%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D0%B0%D0%B9.jpg"
      title="The First Meetup"
      address="Street address, xxx"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
    />
  )
}

export default MeetupDetailPage
