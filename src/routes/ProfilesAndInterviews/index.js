import React from 'react'
import {ViewMore} from './ViewMore';
import classes from './ProfilesAndInterviews.scss'

export default class ProfilesAndInterviews extends React.Component {
  constructor(props) {
    super(props);
    this.displayMoreProfiles = () => {
      console.log('fetching more profiles')
    }
  }

  render() {
    return (
      <div className={classes.profilesAndInterviews}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.featuredProfile} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <h4 className={classes.subtitle}>Featured Profile</h4>
            <hr/>
            <div className={`${classes.featuredImageDiv} col-lg-4 col-md-4 col-sm-12 col-xs-12`}>
              <img className={classes.featuredImage} src="http://previews.123rf.com/images/pictrough/pictrough1002/pictrough100200049/6393797-Business-man-jumping-in-the-air-and-clicking-heels-Square-format--Stock-Photo.jpg"/>
            </div>
            <div className={`${classes.featuredContent} col-lg-8 col-md-8 col-sm-12 col-xs-12`}>
              <h4 className={classes.name}>Delaney</h4>
              <h4 className={classes.company}>Ross Stores, Inc.</h4>
              <h5 className={classes.position}>Senior Vice President, Strategy & Marketing</h5>
              <p><span className={classes.date}>June 2016</span> - Tilde wolf health goth, cred plaid before they sold out chillwave portland DIY single-origin coffee yuccie synth crucifix knausgaard. Green juice polaroid four loko, tofu tilde messenger bag raw denim before they sold out. Truffaut viral meditation ramps ugh direct trade.</p>
              
              <p>Ugh blog swag pork belly blue bottle. Meggings keffiyeh etsy, brunch ramps shoreditch 3 wolf moon kale chips raw denim. Roof party church-key mumblecore portland hashtag, cred craft beer organic echo park.</p>
            </div>
            <div className={`${classes.hrDiv} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <hr/>
            </div>
          </div>
          <div className={`${classes.filterBar} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            FILTER DROPDOWN DROPDOWN RESET
          </div>
          <div className={`${classes.profiles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <ViewMore viewMore={this.displayMoreProfiles}/>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
            <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`}>
              <img src="http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png"/>
              <h5 className={classes.name}>Jorge</h5>
              <h5 className={classes.position}>SVP, Head of Operations, North America</h5>
              <h5 className={classes.company}>Digitalsbi</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}