import React from 'react';
import { connect } from 'react-redux'
import { IState } from './types';
import PrivateComponent from './components/private/privateComponent';
import PublicComponent from './components/public/publicComponent';

interface Props {
  isLoggedIn: boolean
}

class AppContainer extends React.Component<Props> {



  render() {
    const {
      isLoggedIn
    } = this.props;
    return <App
      isLoggedIn={isLoggedIn}
    />
  }
}

interface PresenterProps {
  isLoggedIn: boolean
}

const App: React.FC<PresenterProps> = ({
  isLoggedIn
}) => {
  return (
    <div>
      {isLoggedIn ? <PrivateComponent /> : <PublicComponent />}
    </div>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  {})(AppContainer);
