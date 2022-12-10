import React from "react";
import { Link } from "react-router-dom";
import { PageWrapper } from "../components/Shared/Shared";

import DATA from "../DATA";
import classes from './Events.module.css'

export default function Events(props) {
  const { eventsData } = DATA;

  return (
    <PageWrapper
      title={"Events"}
      description={
        "Here you can find the most common questions we've been asked so far. Still have questions?Contact us at."
      }
    >
      <div className={ classes.wrapper }>
        {eventsData
          .sort((a, b) => new Date(a.date[0]) - new Date(b.date[0]))
          .reverse()
          .map((item, index) => (
            <EventsItem key={index} data={item} />
          ))}
      </div>
    </PageWrapper>
  );
}

export function EventsItem(props) {
  const start = new Date(props.data.date[0]);
  const end = new Date(props.data.date[1]);
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December",
  ];

  return (
    <div className={ classes.events }>
      <div className={ classes.dateInfo }>
        <div className={ classes.month }>{monthNames[start.getMonth()].slice(0, 3)}</div>
        <div className={ classes.year }> {end.getFullYear()} </div>
      </div>

      <div
        className={ classes.thumb }
        style={{ backgroundImage: `url(${props.data.imgPath})` }}
      >
        {start > Date.now() && (
          <div className={ classes.upcomingIcon }>
            <svg
              height="512pt"
              viewBox="-91 0 512 512"
              width="512pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m0 0v512l165-132 165 132v-512zm0 0"
                fill="#ff641a"
              ></path>
              <path d="m330 0v512l-165-132v-380zm0 0" fill="#f03800"></path>
              <path
                d="m282.898438 157.597656-81.597657-11.699218-36.300781-73.796876-36.300781 73.796876-81.597657 11.699218 59.097657 57.601563-14.097657 81 72.898438-38.398438 72.898438 38.398438-14.097657-81zm0 0"
                fill="#ffda2d"
              ></path>
              <path
                d="m223.800781 215.199219 14.097657 81-72.898438-38.398438v-185.699219l36.300781 73.796876 81.597657 11.699218zm0 0"
                fill="#fdbf00"
              ></path>
            </svg>
          </div>
        )}
      </div>

      {start > Date.now() && (
        <UpcomingEvent data={props.data} start={start} end={end} />
      )}
      {end < Date.now() && (
        <PastEvent data={props.data} start={start} end={end} />
      )}
    </div>
  );
}

export function UpcomingEvent(props) {
  const textSum =
    props.data.description
      .replace(/\s{1,}/g, " ") // remove any large spaces and Linebreaks In the text
      .substring(0, 321) + " ...";

  const getNumberOfDays = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  };

  return (
    <div className={ classes.data }>
      <h2>
        <a
          href="https://tickets.tuvens.com/e/15/forro-sailing-week-2023"
          className={ classes.eventTitle }
        >
          { props.data.id + " – " + props.data.region }
        </a>
        {getNumberOfDays(Date.now(), props.start) >= 0 && (
          <div className={ classes.daysLeft }>
            {getNumberOfDays(Date.now(), props.start) + " days left"}
          </div>
        )}
      </h2>
      <div className={ classes.subtitle }>
        {textSum +
          (325 - textSum.length < 0 ? "" : " ".repeat(325 - textSum.length))}
      </div>
      <div className={ classes.date }>
        {" "}
        {props.start.toLocaleDateString() +
          " - " +
          props.end.toLocaleDateString()}
      </div>
      <div className={ classes.cost }>{props.cost}</div>
      <div className={ classes.buttons }>
        <a href="https://www.instagram.com/forrosailing/">Discover</a>
        <a href="https://tickets.tuvens.com/e/15/forro-sailing-week-2023">
          Reserve a spot
        </a>
      </div>
    </div>
  );
}

export function PastEvent(props) {
  const textSum =
    props.data.description
      .replace(/\s{1,}/g, " ") // remove any large spaces and Linebreaks In the text
      .substring(0, 150) + " ...";

  return (
    <div className={ classes.data }>
      <h3>
        <a 
          href="#" 
          className={ classes.eventTitle }
        >
          { props.data.id + " – " + props.data.region }
        </a>
      </h3>
      <div className={ classes.subtitle }>
        {textSum +
          (325 - textSum.length < 0 ? "" : " ".repeat(325 - textSum.length))}
      </div>
      <div className={ classes.date }>
        {" "}
        {props.start.toLocaleDateString() +
          " - " +
          props.end.toLocaleDateString()}{" "}
      </div>
      <div className={ classes.date }><strong>Teachers:</strong> { props.data.teachers[0]} </div>
      <div className={ classes.date }><strong>Musicians:</strong> { props.data.musicians[0]} </div>
      <div className={ classes.cost }>{props.cost}</div>
      <div className={ classes.buttons }>
        {/* <a href="#">Discover</a> */}
        <Link to={ `/event-details/${ props.data.id }` }>Discover</Link>
      </div>
    </div>
  );
}
