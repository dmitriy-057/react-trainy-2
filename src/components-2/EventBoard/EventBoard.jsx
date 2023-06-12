import { Event } from "../Event/Event"
import PropTypes from 'prop-types';
import { EventCards } from './EventBoard.styled';

export const EventBoard = ({events}) => {
    console.log(events)
    return <EventCards>
        {events.map(({name,location,speaker,type,time}) => 
        <Event 
        key={name} 
        name={name} 
        location={location} 
        speaker={speaker} 
        type={type} 
        start={time.start} 
        end={time.end} />
        )}
    </EventCards>
}
EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: PropTypes.exact({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
              })
          },)
    )
}