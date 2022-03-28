import { useRouter } from 'next/router'
import Image from 'next/image'
import Card from '../ui/Card'
import classes from './MeetupItem.module.scss'

function MeetupItem(props) {
  //
  const router = useRouter()

  const showDetailsHandler = () => {
    router.push(`/${props.id}`)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            width={1020}
            height={720}
            objectFit="fill"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
