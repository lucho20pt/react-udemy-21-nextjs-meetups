// our-domain.com/meetupId
// import { useRouter } from 'next/router'
import MeetupDetail from '@/components/meetups/MeetupDetail'

const MeetupDetailPage = ({ meetup }) => {
  //
  // const router = useRouter()
  // const meetupId = router.query.meetupId

  return (
    <MeetupDetail
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  )
}

// ngspa
export const getStaticPaths = async () => {
  // fetch ids from db and generate dynamically
  return {
    paths: [
      {
        params: {
          meetupId: '123'
        }
      },
      {
        params: {
          meetupId: '456'
        }
      }
    ],
    fallback: false // false contains all supported id values if !true return 404 // true will try to generate page on server
  }
}

// ngspr
export const getStaticProps = async (ctx) => {
  // fetch data for a Single meetup
  const meetupId = ctx.params.meetupId // can't use router here but can access with params

  console.log(meetupId)

  return {
    props: {
      meetup: {
        id: meetupId,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D0%97%D0%B8%D0%BC%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D0%B0%D0%B9.jpg/1920px-%D0%97%D0%B8%D0%BC%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D0%B0%D0%B9.jpg',
        title: 'The First Meetup',
        address: 'Street address, xxx',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }
    }
  }
}

export default MeetupDetailPage
