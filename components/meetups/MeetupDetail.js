import Image from 'next/image'
import classes from './MeetupDetail.module.scss'

const MeetupDetail = (props) => {
  return (
    <article className={classes.detail}>
      <Image
        src={props.image}
        width={1020}
        height={720}
        objectFit="fill"
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </article>
  )
}

export default MeetupDetail
