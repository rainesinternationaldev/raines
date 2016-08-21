import React from 'react';
import classes from './Signup.scss';
import Dropzone from 'react-dropzone';

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
      //////////
      if (erroredFields.length) {
        let newFields = Object.assign({}, this.state.fields);
        erroredFields.forEach((field) => {
          newFields[field].error = true;
        })
        this.setState({ fields: newFields })
      } else if (this.state.resume && !$('.cvAgreement')[0].checked) {
        this.setState({
          cvAgreementError: true
        })
      } else {
        console.log('THOU SHALL PASS')

        let newsletters = {
          rainesMonthlyHighlights: true,
          rainesMonthlyHighlightsForConsultants: false,
          rainesClassics: $('.rainesClassics')[0].checked,
          rainesTopTen: $('.rainesTopTen')[0].checked
        }
        if ($('.rainesMonthlyHighlightsForConsultants')[0].checked) {
          newsletters.rainesMonthlyHighlights = false;
          newsletters.rainesMonthlyHighlightsForConsultants = true;
        }

        const formData = {
          personal: {
            firstName:  $('.firstName').val(),
            lastName:   $('.lastName').val(),
            email:      $('.email').val(),
            company:    $('.company').val(),
            title:      $('.title').val()
          },
          newsletters,
          resume: this.state.resume
        }
        // send form data to server
        console.log(formData)
        this.context.router.push('/thank-you');
      }
    }

    this.onOpenClick = () => {
      this.refs.dropzone.open();
    }

    this.onDrop = (file) => {
      // Make sure file size isn't too big
      // Make sure not to accept invalid file types
      console.log('the file', file)
      this.setState({
        resume: file[0]
      });
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
      },
      cvAgreementError: false,
      resume: null
    }
  }

  render() {
    return (
      <div className={classes.signup}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.intro} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h2>Welcome.</h2>
            <h3>We believe that candidates are clients too, and we treat you as such. By registering with Raines Perspectives, you can shorten the time it takes to get your qualifications in front of our network for experienced recruiters.</h3>
            <h5>Please Note: We carefully review every resume submitted and add your data to our candidate database. A search consultant will contact you directly if your profile matches the requirements of a specific role or should suitable opportunities arise.</h5>
          </div>
          <form >
            <div className={`${classes.accountInfo} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h3>Step 1: Create your account information</h3>
              <hr/>
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
              <div className={classes.consultantCheck}>
                <input
                  type="checkbox"
                  className={`${classes.checkbox} rainesMonthlyHighlightsForConsultants`}/><span className={classes.title}>I am a current or former management consultant</span>
              </div>
            </div>
            <div className={`${classes.subscribe} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h3>Step 2: Subscribe to our newsletters and alerts</h3>
              <hr/>
              <div className={classes.newsletters}>
                <h4>Newsletters</h4>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <input
                    type="checkbox"
                    className={`${classes.checkbox} rainesMonthlyHighlights`}/><span className={classes.title}>Monthly Highlights</span>
                  <p className={classes.desc}>Our monthly selection of the newest and most distinctive articles, reports, multimedia and special features</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <input
                    type="checkbox"
                    className={`${classes.checkbox} rainesTopTen`}/><span className={classes.title}>Top Ten Most Popular</span>
                  <p className={classes.desc}>A roundup of our most popular content each quarter</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <input
                    type="checkbox"
                    className={`${classes.checkbox} rainesClassics`}/><span className={classes.title}>Raines Classics</span>
                  <p className={classes.desc}>Every two months, we spotlight an archival article whose insights are as relevant today as ever</p>
                </div>
              </div>
              <div className={classes.experience}>
                <h4>Experience</h4>
                <div className={classes.consultantCheck}>
                  <input
                    type="checkbox"
                    className={`${classes.checkbox} rainesMonthlyHighlightsForConsultants`}/><span className={classes.checkboxDesc}>I am a current or former management consultant</span>
                </div>
              </div>
              <div className={classes.resume}>
                <h4>Resume / CV</h4>
                <Dropzone
                  className="dropzone"
                  ref="dropzone"
                  onDrop={this.onDrop}
                  multiple={false}>
                </Dropzone>
                <button
                  type="button"
                  className={classes.rainesButton} onClick={this.onOpenClick}>
                    Upload Resume
                </button>
                <div className={classes.droppedFile}>
                  {
                    this.state.resume ?
                    <div>
                      <span className={`glyphicon glyphicon-paperclip ${classes.icon}`} aria-hidden="true"></span>
                      { this.state.resume.name }
                    </div> : ""
                  }
                </div>
                <p className={classes.disclaimer}>By submitting your personal information to us, you acknowledge and agree that the information will be processed and retained in our databases and may be transferred worldwide within our Firm (unless otherwise instructed by you), including to jurisdictions that may not provide the same level of privacy protection as your home country. This data may be used to match you with appropriate career opportunities, to signal you to clients as a potential candidate for specific career opportunities, in the context of a management appraisal, and for the other purposes described in our Privacy Policy. </p>
                <input
                  type="checkbox"
                  className={`${classes.checkbox} cvAgreement`}/><span className={classes.checkboxDesc}>By submitting my CV, I agree to these terms</span>
                {
                  this.state.cvAgreementError ? <p className={classes.error}>Required</p> : ""
                }
              </div>
              <div className="g-recaptcha" data-sitekey="6LdljSQTAAAAAINIAU365Vt1r0Kvm17oMrCPfYvM"></div>
              <button
                className={classes.submitButton}
                type="submit"
                onClick={this.registerSubscriber}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Signup.contextTypes = {
  router: React.PropTypes.object.isRequired
};