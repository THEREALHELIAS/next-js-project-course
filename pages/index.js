import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return <>
    <EventList items={featuredEvents}/>
  </>
}

export default HomePage;