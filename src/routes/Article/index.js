import React from 'react'
import classes from './Article.scss'
import moment from 'moment';
import {Link} from 'react-router';
import {bindActionCreators} 	from 'redux';
import * as actionCreators  	from '../../actions/posts';
import {connect} 							from 'react-redux';
import utils from '../utils';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
import printerIcon from './assets/printer-icon.png';

export class Article extends React.Component {
  constructor(props) {
    super(props);

    this.displayPrintPreview = window.print;
  }

  componentWillMount() {
    const articleId     = this.props.location.pathname.slice(9).split('-')[0];
    const currentPost   = this.props.wordpress.currentPost;
    const cachedArticle = currentPost && currentPost.id == articleId;
    this.setState({ location: this.props.location.pathname });

    // Prevent re-fetching already fetched articles
    if (!cachedArticle) this.props.actions.fetchPost(articleId);
    if (this.props.wordpress && !this.props.wordpress.posts.length) {
      this.props.actions.fetchPosts();
    }
  }

  componentDidUpdate() {
    if (this.state.location !== this.props.location.pathname) {
      this.setState({ location: this.props.location.pathname });

      const articleId     = this.props.location.pathname.slice(9).split('-')[0];
      const currentPost   = this.props.wordpress.currentPost;
      const cachedArticle = currentPost && currentPost.id == articleId;
      if (!cachedArticle) this.props.actions.fetchPost(articleId);

      this.forceUpdate();
    }
  }

  componentDidMount() {
    setTimeout(() => {
      $(".social-icon, .printer-icon").hover(function(e) { 
        $(this).css("opacity",e.type === "mouseenter"?"0.7":"1") 
      })
    }, 1000);
  }

  render() {
    
    const {
      FacebookShareButton,
      LinkedinShareButton,
      TwitterShareButton
    } = ShareButtons;

    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const LinkedinIcon = generateShareIcon('linkedin');

    const post = this.props.wordpress.currentPost;

    const posts = this.props.wordpress.posts;
    let mostRecentPosts;
    if (posts.length) {
      mostRecentPosts = posts.slice(0, 5);
    }

    let currentLocation = window.location.href;
    currentLocation = 'https://mysterious-brook-13530.herokuapp.com/'

    return (
      <div className={classes.article}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          {
            post && post.ID ?
            <div className={`${classes.splashArticle} col-lg-9 col-md-9 col-sm-9 col-xs-12`}>
              <div className={`${classes.imageContainer} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                <img className={classes.featuredImage} src={post.post_thumbnail.URL}/>
              </div>
              <div className={`${classes.socialMediaShare} socialMediaShare col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                <div className={classes.socialMediaShareButton}>
                  <FacebookShareButton
                    title={utils.decodeEntities(post.title)}
                    url={currentLocation}
                    media={post.post_thumbnail.URL}
                    description={utils.decodeEntities(post.excerpt)}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <TwitterShareButton
                    title={utils.decodeEntities(post.title)}
                    url={currentLocation}
                    media={post.post_thumbnail.URL}
                    description={utils.decodeEntities(post.excerpt)}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <LinkedinShareButton
                    title={utils.decodeEntities(post.title)}
                    url={currentLocation}
                    media={post.post_thumbnail.URL}
                    description={utils.decodeEntities(post.excerpt)}>
                    <LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <img
                    className={`${classes.printerIcon} printer-icon`}
                    src={printerIcon}
                    onClick={this.displayPrintPreview}/>
                </div>
              </div>
              <div className={`${classes.textBody} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                <h4>{utils.decodeEntities(post.title)}</h4>
                <p className={classes.datePreview}>{moment(post.date).format('MMMM YYYY')}</p>
                <div dangerouslySetInnerHTML={{__html: post.content}}></div>
              </div>
              <div className={`${classes.socialMediaShare} socialMediaShare col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                <div className={classes.socialMediaShareButton}>
                  <FacebookShareButton
                    title={utils.decodeEntities(post.title)}
                    url={currentLocation}
                    media={post.post_thumbnail.URL}
                    description={utils.decodeEntities(post.excerpt)}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <TwitterShareButton
                    title={utils.decodeEntities(post.title)}
                    url={currentLocation}
                    media={post.post_thumbnail.URL}
                    description={utils.decodeEntities(post.excerpt)}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <LinkedinShareButton
                    title={utils.decodeEntities(post.title)}
                    url={currentLocation}
                    media={post.post_thumbnail.URL}
                    description={utils.decodeEntities(post.excerpt)}>
                    <LinkedinIcon size={32} round={true} />
                  </LinkedinShareButton>
                </div>
                <div className={classes.socialMediaShareButton}>
                  <img
                    className={`${classes.printerIcon} printer-icon`}
                    src={printerIcon}
                    onClick={this.displayPrintPreview}/>
                </div>
              </div>
            </div> : ""
          }
          <div className={`${classes.mostRecent} mostRecent col-lg-3 col-md-3 col-sm-3 col-xs-12`}>
            <h5>Recent Articles</h5>
            <hr/>
            {
              mostRecentPosts ?
              mostRecentPosts.map((post, i) => {
                return (
                  <div className={classes.article} key={i}>
                    <p className={classes.topicPreview}>{utils.decodeEntities(post.mainCategory)}</p>
                    <Link to={`/article/${post.ID}`}>
                      <h4>{utils.decodeEntities(post.title)}</h4>
                    </Link>
                  </div>
                )
              }) : ""
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  wordpress: state.wordpress
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);