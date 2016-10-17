import React from 'react';
import classes from './SignupBar.scss';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/signup';
import {connect} 							from 'react-redux';

class SignupBar extends React.Component {
  constructor(props) {
    super(props);

    this.continueToRegistration = (e) => {
      e.preventDefault();
      let erroredFields = [];
      Object.keys(this.state.fields).forEach((field) => {
        if (!$(`.${field}`).val()) {
          console.log(`no value for ${field}`);
          erroredFields.push(field);
        }
      });
      if (erroredFields.length) {
        let newFields = Object.assign({}, this.state.fields);
        erroredFields.forEach((field) => {
          newFields[field].error = true;
        })
        this.setState({ fields: newFields })
      } else {
        // store these values in redux store
        // then transition to registratio page
        console.log($('.firstName').val());
        console.log($('.lastName').val());
        console.log($('.email').val());

        this.props.actions.cacheSignupData({
          firstName: $('.firstName').val(),
          lastName: $('.lastName').val(),
          email: $('.email').val()
        });
        this.context.router.push('/signup');
      }
    }

    this.state = {
      fields: {
        'firstName': {
          error: false
        },
        'lastName': {
          error: false
        },
        'email': {
          error: false
        }
      }
    }
  }

  render() {
    return (
      <div className={`"col-lg-12 col-md-12 col-sm-12 col-xs-12" ${classes.signupbar}`}>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <input className="firstName" placeholder="First Name"/>
          {
            this.state.fields.firstName.error ? <p className={classes.error}>Required</p> : ""
          }
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <input className="lastName" placeholder="Last Name"/>
          {
            this.state.fields.lastName.error ? <p className={classes.error}>Required</p> : ""
          }
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <input className="email" placeholder="Email Address"/>
          {
            this.state.fields.email.error ? <p className={classes.error}>Required</p> : ""
          }
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <button
            onClick={this.continueToRegistration}>Register</button>
        </div>
      </div>
    )
  }
}

SignupBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  signup: state.signup
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupBar);