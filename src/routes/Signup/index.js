import React from 'react';
import classes from './Signup.scss';
import Dropzone from 'react-dropzone';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/signup';
import {connect} 							from 'react-redux';

class Signup extends React.Component {
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
      ////////// make sure it is errorFields.length
      if (erroredFields.length) {
        let newFields = Object.assign({}, this.state.fields);
        erroredFields.forEach((field) => {
          newFields[field].error = true;
        })
        this.setState({ fields: newFields })

        if (this.state.resume && !$('.cvAgreement')[0].checked) {
          this.setState({
            cvAgreementError: true
          })
        }

        ////////// make sure it is this.state.resume
      } else if (this.state.resume && !$('.cvAgreement')[0].checked) {
        this.setState({
          cvAgreementError: true
        })
      } else {
        let newsletters = {
          rainesMonthlyHighlights: true,
          rainesMonthlyHighlightsForConsultants: false,
          latestHeadlines: $('.latestHeadlines')[0].checked
        }
        if ($('.rainesMonthlyHighlightsForConsultants')[0].checked) {
          newsletters.rainesMonthlyHighlights = false;
          newsletters.rainesMonthlyHighlightsForConsultants = true;
        }

        let personal = {
          firstName:  $('.firstName').val(),
          lastName:   $('.lastName').val(),
          email:      $('.email').val(),
          company:    $('.company').val(),
          title:      $('.title').val()
        };

        const formData = {
          personal: JSON.stringify(personal),
          newsletters: JSON.stringify(newsletters),
          candidateName: `${$('.firstName').val()} ${$('.lastName').val()}`,
          attachment: this.state.resume
        }
        this.props.actions.signupUser(formData);
        // this.context.router.push('/thank-you');
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

  componentDidMount() {
    $(".subscribeToAll").change(function() {
      if(this.checked) {
        $('.rainesMonthlyHighlights').prop('checked', true);
        $('.latestHeadlines').prop('checked', true);
      }
      if (!this.checked) {
        $('.rainesMonthlyHighlights').prop('checked', false);
        $('.latestHeadlines').prop('checked', false);
      }
    });
  }

  render() {
    const data = this.props.signup.data;

    return (
      <div className={classes.signup}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.intro} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h2>Welcome.</h2>
            <h4>The best opportunities aren’t always in front of you. We want to know more about you and include you in our network of executives. Raines International will carefully review your resume and background to consider you for any future recruiting opportunities.</h4>
            <h5>Please Note: We carefully review every resume submitted and add your data to our candidate database. A search consultant will contact you directly if your profile matches the requirements of a specific role or should suitable opportunities arise.</h5>
          </div>
          <form >
            <div className={`${classes.accountInfo} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h3>Step 1: Create your account</h3>
              <hr/>
              <p className={classes.description}>* required field</p>
              <div className={`${classes.inputs} col-lg-5 col-md-6 col-sm-12 col-xs-12`}>
                <p className={classes.subtitle}>First Name*</p>
                <input className="firstName" defaultValue={data.firstName}/>
                {
                  this.state.fields.firstName.error ? <p className={classes.error}>Required</p> : ""
                }
                <p className={classes.subtitle}>Last Name*</p>
                <input className="lastName" defaultValue={data.lastName}/>
                {
                  this.state.fields.lastName.error ? <p className={classes.error}>Required</p> : ""
                }
                <p className={classes.subtitle}>Email*</p>
                <input className="email" defaultValue={data.email}/>
                {
                  this.state.fields.email.error ? <p className={classes.error}>Required</p> : ""
                }
                <p className={classes.subtitle}>Current Company*</p>
                <input className="company"/>
                {
                  this.state.fields.company.error ? <p className={classes.error}>Required</p> : ""
                }
                <p className={classes.subtitle}>Current Title*</p>
                <input className="title"/>
                {
                  this.state.fields.title.error ? <p className={classes.error}>Required</p> : ""
                }
              </div>
              <div className={`${classes.consultantCheck} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                <input
                  type="checkbox"
                  className={`${classes.checkbox} rainesMonthlyHighlightsForConsultants`}/><span className={classes.title}>I am a current or former management consultant</span>
              </div>
            </div>
            <div className={`${classes.subscribe} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h3>Step 2: Subscribe to our newsletters and alerts</h3>
              <hr/>
              <div className={classes.newsletters}>
                <div className={`${classes.newsletter} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                  <input
                    type="checkbox"
                    className={`${classes.checkbox} rainesMonthlyHighlights`}/><span className={classes.title}>Monthly Spotlight</span>
                  <p className={classes.desc}>Sign up to read Raines International’s monthly newsletter featuring new content, insights and analysis each month. </p>
                </div>
                <div className={`${classes.newsletter} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                  <input
                    type="checkbox"
                    className={`${classes.checkbox} latestHeadlines`}/><span className={classes.title}>Latest Headlines</span>
                  <p className={classes.desc}>Sign up to receive e-mail updates of the newest Raines Perspectives content just after publication.</p>
                </div>
                <div className={`${classes.newsletter} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                  <input
                    type="checkbox"
                    className={`${classes.checkbox} subscribeToAll`}/><span className={classes.title}>Subscribe to all</span>
                </div>
              </div>
              <h3>Step 3: Upload Resume / CV <span className={classes.optional}>(optional)</span></h3>
              <hr/>
              <div className={classes.resume}>
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
              <div className={`g-recaptcha ${classes.gRecaptcha}`} data-sitekey="6LdljSQTAAAAAINIAU365Vt1r0Kvm17oMrCPfYvM"></div>
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

const mapStateToProps = (state) => ({
  signup: state.signup
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);