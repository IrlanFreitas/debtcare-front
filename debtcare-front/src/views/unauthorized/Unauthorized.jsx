import React from 'react';
import './Unauthorized.scss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import Constants from '~/helpers/enums/Constants';

const Unauthorized = () => {
  return (
    <div className="Unauthorized">
      <h1 className="noselect">{Constants.OOPS}</h1>
      <h2 className="noselect">{Constants.UNAUTHORIZED_PAGE}</h2>
      <div className="buttonTo">
        <Link to="/login">
          <Button type="primary" to="/login" size="small">
            {' '}
            {Constants.SIGN_IN}{' '}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Unauthorized);
