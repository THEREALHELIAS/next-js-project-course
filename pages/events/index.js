import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-seach';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath)
  } 

  return (
    <div>
      <EventsSearch onSearch={findEventHandler}/>
      <EventList items={events}/>
    </div>
  )
}

export default AllEventsPage;