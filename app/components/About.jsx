var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a simple weather application, which one can search for weather temperature of cities around the globe.</p>
      <p>Here are some of the tools I've used:</p>
      <ul>
        <li>
          <a href="https://reactjs.org/">React</a> - This was the JavaScript library used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - API used to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
