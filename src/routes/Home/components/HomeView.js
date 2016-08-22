import React from 'react'
import SignupBar from '../../../components/SignupBar';
import splashImage from '../assets/city.png'
import classes from './HomeView.scss';
import moment from 'moment';
import {Link} from 'react-router';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../../actions/posts';
import {connect} 							from 'react-redux';
import utils from '../../utils';
import * as data from './data';



class HomeView extends React.Component {
  constructor(props) {
		super(props);

    this.state = {
      categories: {
        306:  'All Posts',
        307:  'Career Transition',
        44:   'CEO',
        825:  'Consulting',
        862:  'Diversity',
        27:   'Interview Tips',
        446:  'Offers',
        264:  'Startups',
        1:    'Uncategorized'
      }
    }
	}

  componentWillMount() {
    if (!this.props.wordpress.posts.length) {
      this.props.actions.fetchPosts(4, 0, 1);
    }

    if (!this.props.wordpress.profiles.length) {
      this.props.actions.fetchProfiles()
        .then(() => { console.log('fetched profiles') });
    }
  }

  render() {
    const posts = this.props.wordpress.posts;
    let featuredPost;
    let imgSrc;
    let mostRecentPosts;
    if (posts.length) {
      const mainPost = posts[0];
      const contentStr = mainPost.content.rendered;
      const el = $('<div></div>');
      el.html(contentStr);
      const featuredImg = $('img', el)[0];
      imgSrc = featuredImg
        ? $('img', el)[0].src
        : "https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80";

      featuredPost = posts[0]; // this may change
      mostRecentPosts = posts.slice(0, 3);
    }


    let profiles = this.props.wordpress.profiles;
    let firstThree = profiles && profiles.slice(0, 3);
    let firstFour = profiles && profiles.slice(0, 4);


    return (
      <div className={classes.home}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <hr className={classes.hr}/>
            <img
              className={classes.splashImage}
              src={splashImage}/>
          </div>
          <div className={`${classes.banner} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <hr/>
            <div className={classes.center}>
              <h3>Well-Established. Well-Connected. Well-Informed.</h3>
            </div>
          </div>
          <SignupBar/>
          <div className={`${classes.featured} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.featuredArticles} col-lg-9 col-md-9 col-sm-9 col-xs-12`}>
              <h4 className={classes.subtitle}>Featured Insights</h4>
              <hr />
              {
                posts.length ?
                <div>
                  <div className={`${classes.imageContainer} col-lg-8 col-md-8 col-sm-8 col-xs-12`}>
                    <img className={classes.featuredImage} src={imgSrc}/>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <Link to={`/article/${featuredPost.id}-${utils.formatTitle(featuredPost.title.rendered)}`}>
                      <h4 className={classes.articleTitle}>{utils.decodeEntities(featuredPost.title.rendered)}</h4>
                    </Link>
                    <p className={classes.date}>{moment(featuredPost.date).format('MMMM YYYY')}</p>
                    <p className={classes.excerpt}>{utils.decodeEntities(featuredPost.excerpt.rendered)}</p>
                  </div>
                </div>
                : ""
              }
            </div>
            <div className={`${classes.mostRecent} col-lg-3 col-md-3 col-sm-3 col-xs-12`}>
              <h4 className={classes.subtitle}>Most Recent</h4>
              <hr/>
              {
                posts.length ?
                mostRecentPosts.map((post, i) => {
                  console.log(post)
                  return (
                    <div className={classes.article} key={i}>
                      <p className={classes.topicPreview}>{this.state.categories[post.categories[0]]}</p>
                      <Link to={`/article/${post.id}-${utils.formatTitle(post.title.rendered)}`}>
                        <h4 className={classes.articleTitle}>{utils.decodeEntities(post.title.rendered)}</h4>
                      </Link>
                    </div>
                  )
                }) : ""
              }
            </div>
            {
              // <div className={`${classes.end} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              //   <hr/>
              // </div>
            }
          </div>
          <div className={`${classes.featuredProfiles} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h4 className={classes.subtitle}>Featured Profiles</h4>
              <hr />
            </div>
            {
              firstFour.length ?
              firstFour.map((profile, i) => {
                return (
                  <div className={`${classes.profile} col-lg-3 col-md-3 col-sm-6 col-xs-12`} key={i}>
                    <img src={profile.imageURL || "http://static.giantbomb.com/uploads/square_small/13/135472/1891872-134vaporeon.png" }/>
                    <h5 className={classes.name}>{profile.title.rendered}</h5>
                    <h5 className={classes.position}>{data.titles[profile.titles[0]]}</h5>
                    <h5 className={classes.company}>{data.firms[profile.firms[0]]}</h5>
                  </div>
                )
              }) : ""
            }
          </div>
          <div className={`${classes.perspectives} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
            <div className={`${classes.perspectivesHeader} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h4 className={classes.subtitle}>New Perspectives</h4>
              <hr/>
            </div>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
            <div className={`${classes.article} col-lg-4 col-md-4 col-sm-4 col-xs-12`}>
              <img className={classes.perspectiveImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
              <h6>Responding to the global refuge crisis</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);