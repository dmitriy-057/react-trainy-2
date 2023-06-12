import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt,FaClock } from "react-icons/fa";
import { formatEventStart,formatEventDuration } from "../utils/index";
import PropTypes from 'prop-types';

import { EventContainer,EventTitle,EventInfo, Chip } from "./Event.styled";

export const Event = ({name,location,speaker,type,start,end}) => {
    const formattedStartTime = formatEventStart(start);
    const duration = formatEventDuration(start,end)
   return (
   <EventContainer>
    <EventTitle>{name}</EventTitle>
    <EventInfo>
        <FaMapMarkerAlt size={16} /> 
    {location}
    </EventInfo>

    <EventInfo>
    <FaUserAlt size={16} /> 
        {speaker}
    </EventInfo>

    <EventInfo>
    <FaCalendarAlt size={16} /> 
        {formattedStartTime}
    </EventInfo>

    <EventInfo>
    <FaClock size={16} /> 
        {duration}
    </EventInfo>
    <Chip eventType={type}>{type}</Chip>
   </EventContainer>)
   ;
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}