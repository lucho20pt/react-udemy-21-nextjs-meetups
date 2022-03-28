// our-domain.com/meetupId
import { useRouter } from 'next/router'

const MeetupDetailPage = () => {
  //
  const router = useRouter()
  const meetupId = router.query.meetupId
  return (
    <>
      <h1>
        Meetup Detail Page <code>[{meetupId}]</code>
      </h1>
    </>
  )
}

export default MeetupDetailPage
