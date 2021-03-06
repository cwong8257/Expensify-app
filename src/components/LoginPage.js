import React from 'react';
import { GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import { connect } from 'react-redux';
import { startGoogleLogin, startGithubLogin } from '../actions/auth';

export class LoginPage extends React.Component {
  render() {
    const { startGoogleLogin, startGithubLogin } = this.props;
    const style = {
      fontSize: '15px'
    };
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <p>It's time to get your expenses under control.</p>
          <GoogleLoginButton onClick={startGoogleLogin} style={style} />
          <GithubLoginButton onClick={startGithubLogin} style={style} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
