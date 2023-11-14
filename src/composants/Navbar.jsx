

import PropTypes from 'prop-types';

export default function Navbar({ nombrelike }) {
  return (
    <div className="entete">
      <h3>Les postes liker sont : {nombrelike}</h3>
    </div>
  );
}

Navbar.propTypes = {
  nombrelike: PropTypes.number.isRequired,
};
