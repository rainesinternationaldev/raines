
import React from 'react';
import classes from './Placements.scss';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/placements';
import {connect} from 'react-redux';
import moment from 'moment';
import utils from '../utils';
import { ViewMore } from './ViewMore';
import placementsImg from './assets/placements.jpg'
import Helmet from 'react-helmet';

class Placements extends React.Component {
  constructor(props) {
    super(props);

    this.displayMorePlacements = () => {
      console.log('displaying more placements')

      let currentlyDisplayed = this.state.numDisplayed;
      let newlyDisplayed = currentlyDisplayed + 6;

      this.setState({
        numDisplayed: newlyDisplayed
      });
      
      setTimeout(() => {
        this.props.placements.forEach((placement, i) => {
          if (i >= currentlyDisplayed) this.assignAnimation(placement, i);
        })
      }, 100);
    }

    this.state = {
      numDisplayed: 6
    }
  }

  assignAnimation = (placement, i) => {
    $(`.placement-${i}`).click(() => {
      $(`.description-${i}`).slideToggle('fast');
    })
  }

  componentDidMount() {
    if (this.props.placements.length < 12) {
      this.props.actions.fetchPlacements(12)
        .then(() => this.props.placements.forEach(this.assignAnimation))
        .then(() => this.props.actions.fetchPlacements(100, 12));
    } else {
      this.props.placements.forEach(this.assignAnimation)
    }
  }
  render() {
    const placements = this.props.placements;
    if (placements.length) {
      placements.forEach((placement, i) => {
        let split = placement.title.split(',');
        placement.head = utils.decodeEntities(split.slice(0, split.length - 1).join(','));
        placement.tail = utils.decodeEntities(split[split.length - 1]);
      })
    }
    let displayedPlacements = placements.slice(0, this.state.numDisplayed);
    const header = {
      title: 'Raines International Placements',
      meta: [{
        name: 'description',
        content: 'Read about Raines International’s latest placements, across industries, across functions.'
      }, {
        property: 'og:title',
        content: 'Raines International Placements'
      }, {
        property: 'og:description',
        content: 'Read about Raines International’s latest placements, across industries, across functions.'
      }, {
        property: 'og:image',
        content: `https://perspectives.rainesinternational.com${placementsImg}`
      }, {
        property: 'og:url',
        content: 'https://perspectives.rainesinternational.com/placements'
      }]
    }

    return (
      <div className={classes.placements}>
        <Helmet {...header} />
        <div className={`${classes.inner} col-lg-10 col-md-12 col-sm-12 col-xs-12`}>
          {
            displayedPlacements.length ?
            displayedPlacements.map((placement, i) => {
              return (
                <div className={`${classes.placement} col-lg-12 col-md-12 col-sm-12 col-xs-12 placement-${i}`} key={i}>
                  <h1>{placement.head}</h1><h4>{placement.tail}</h4>
                  <div className={`${classes.description} description-${i} col-lg-8 col-lg-offset-2`}>
                    <div dangerouslySetInnerHTML={{__html: placement.content}}></div>
                  </div>
                  {
                    i === displayedPlacements.length - 1 ?
                      "" : <hr/>
                  }
                </div>
              )
            }) : ""
          }
          <ViewMore viewMore={this.displayMorePlacements}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  placements: state.wordpress.placements
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Placements);