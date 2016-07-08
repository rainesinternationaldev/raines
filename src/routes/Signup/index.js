import React from 'react';
import classes from './Signup.scss';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.registerSubscriber = (e) => {
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
        },
        'company': {
          error: false
        },
        'title': {
          error: false
        }
      }
    }
  }

  render() {
    return (
      <div className={classes.signup}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <h5 className={classes.intro}>We believe that candidates are clients too, and we treat you as such. Registering with Raines Perspectives shortens the time to get your qualifications in front of our network executive consultants.</h5>
          <form >
            <div className={`${classes.accountInfo} col-lg-7 col-md-7 col-sm-12 col-xs-12`}>
              <h3>Step 1: Create your account information</h3>
              <p className={classes.description}>Get full access to articles and reports, and receive email newsletters and alerts that keep you in touch with our latest thinking.</p>
              <p className={classes.subtitle}>First Name</p>
              <input className="firstName"/>
              {
                this.state.fields.firstName.error ? <p className={classes.error}>Required</p> : ""
              }
              <p className={classes.subtitle}>Last Name</p>
              <input className="lastName"/>
              {
                this.state.fields.lastName.error ? <p className={classes.error}>Required</p> : ""
              }
              <p className={classes.subtitle}>Email</p>
              <input className="email"/>
              {
                this.state.fields.email.error ? <p className={classes.error}>Required</p> : ""
              }
              <p className={classes.subtitle}>Current Company</p>
              <input className="company"/>
              {
                this.state.fields.company.error ? <p className={classes.error}>Required</p> : ""
              }
              <p className={classes.subtitle}>Current Title</p>
              <input className="title"/>
              {
                this.state.fields.title.error ? <p className={classes.error}>Required</p> : ""
              }
            </div>
            <div className={`${classes.subscribe} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h3>Step 2: Subscribe to our newsletters and alerts</h3>
              <div className={classes.newsletters}>
                <p className={classes.subtitle}>Newsletters</p>
                <hr/>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <input
                    type="checkbox"
                    className={classes.checkbox}/><span className={classes.title}>Monthly Highlights</span>
                  <p className={classes.desc}>Our monthly selection of the newest and most distinctive articles, reports, multimedia and special features</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <input
                    type="checkbox"
                    className={classes.checkbox}/><span className={classes.title}>Top Ten Most Popular</span>
                  <p className={classes.desc}>A roundup of our most popular content each quarter</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <input
                    type="checkbox"
                    className={classes.checkbox}/><span className={classes.title}>Raines Classics</span>
                  <p className={classes.desc}>Every two months, we spotlight an archival article whose insights are as relevant today as ever</p>
                </div>
              </div>
              <p className={classes.subtitle}>Alerts ? Interests</p>
              <hr/>
              <div className="g-recaptcha" data-sitekey="6LdljSQTAAAAAINIAU365Vt1r0Kvm17oMrCPfYvM"></div>
              <button
                type="submit"
                onClick={this.registerSubscriber}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}