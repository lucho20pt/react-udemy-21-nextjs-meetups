// our-domain.com/
import MeetupList from '@/components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: '123',
    title: 'The First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D0%97%D0%B8%D0%BC%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D0%B0%D0%B9.jpg/1920px-%D0%97%D0%B8%D0%BC%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D0%B0%D0%B9.jpg',
    address: 'Street address, 123',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: '456',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D0%97%D0%B8%D0%BC%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D0%B0%D0%B9.jpg/1920px-%D0%97%D0%B8%D0%BC%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D0%B0%D0%B9.jpg',
    address: 'Street address, 456',
    description:
      'More dummy lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const HomePage = ({ meetups }) => {
  //

  return (
    <>
      <h1>Home Page</h1>
      <MeetupList meetups={meetups} />
    </>
  )
}

// ngspr
// export const getStaticProps = async (ctx) => {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 10 // incremental static generation 10sec // generated during build and every defined sec on the server
//   }
// }

export const getServerSideProps = async (ctx) => {
  const req = ctx.req
  const res = ctx.res

  return {
    props:{
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage
