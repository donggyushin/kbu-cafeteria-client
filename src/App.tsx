import React from 'react';
import { connect } from 'react-redux'
import { IState } from './types';
import PrivateComponent from './components/private/privateComponent';
import PublicComponent from './components/public/publicComponent';
import Loading from './components/global/Loading';

interface Props {
  isLoggedIn: boolean,
  loading: boolean
}

class AppContainer extends React.Component<Props> {

  render() {
    const {
      isLoggedIn,
      loading
    } = this.props;
    return <App
      isLoggedIn={isLoggedIn}
      loading={loading}
    />
  }
}

interface PresenterProps {
  isLoggedIn: boolean
  loading: boolean
}

const App: React.FC<PresenterProps> = ({
  isLoggedIn,
  loading
}) => {
  return (
    <div>
      {isLoggedIn ? <PrivateComponent /> : <PublicComponent />}
      {loading && <Loading />}
    </div>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    loading: state.loading.loading
  }
}

export default connect(
  mapStateToProps,
  {})(AppContainer);
