import '../styles/tourdates.css';

export default function TourDates() {
  const dates = [
    { city: 'Vienna', date: 'May 18, 2025', venue: 'Wiener Musikverein', link: 'https://www.ticketlink.com' },
    { city: 'Prague', date: 'May 24, 2025', venue: 'Rudolfinum', link: 'https://www.ticketlink.com' },
    { city: 'Paris', date: 'June 2, 2025', venue: 'Philharmonie de Paris', link: 'https://www.ticketlink.com' },
    { city: 'Metaverse', date: 'June 15, 2025', venue: 'VRStage.io', link: 'https://www.ticketlink.com' },
  ];

  return (
    <div className="container tour-container">
      <h2 className="tour-title text-center mb-4">Upcoming Performances</h2>
      <div className="table-responsive">
        <table className="table table-borderless tour-table">
          <thead>
            <tr>
              <th scope="col">City</th>
              <th scope="col">Date</th>
              <th scope="col">Venue</th>
              <th scope="col">Tickets</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((date, index) => (
              <tr key={index}>
                <td>{date.city}</td>
                <td>{date.date}</td>
                <td>{date.venue}</td>
                <td>
                  <a href={date.link} target="_blank" rel="noopener noreferrer">
                    <button>Buy Tickets</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
