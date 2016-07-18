import React from 'react'
import classes from './Article.scss'

export default class Article extends React.Component {
  render() {
    return (
      <div className={classes.article}>
        <div className={`${classes.inner} col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12`}>
          <div className={`${classes.splashArticle} col-lg-9 col-md-9 col-sm-9 col-xs-12`}>
            <div className={`${classes.imageContainer} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <img className={classes.featuredImage} src="https://images.unsplash.com/photo-1430609098125-581618d0482f?format=auto&amp;auto=compress&amp;dpr=2&amp;crop=entropy&amp;fit=crop&amp;w=1274&amp;h=849&amp;q=80"/>
            </div>
            <div className={`${classes.textBody} col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
              <h4>Bridging global infrastructure gaps</h4>
              <p className="date-preview">June 2016</p>
              <p>Shoreditch deep v swag portland. Mustache YOLO pickled VHS, hammock meggings portland bushwick letterpress scenester tattooed man braid venmo art party. Craft beer taxidermy tattooed tacos. Cardigan neutra biodiesel occupy pour-over put a bird on it kickstarter gastropub, mlkshk bespoke flexitarian freegan gochujang. Retro keffiyeh readymade cardigan, butcher flexitarian pinterest truffaut. Meggings literally ugh brooklyn everyday carry kitsch tote bag asymmetrical, salvia humblebrag. Distillery yr meggings, vinyl cold-pressed cliche literally poutine keytar.</p>
              
              <p>Gastropub photo booth mixtape fingerstache, kale chips fixie seitan kinfolk echo park. Organic kale chips hella distillery squid, fashion axe wayfarers. Godard iPhone XOXO, tattooed pug truffaut next level ethical trust fund pop-up humblebrag vegan actually blue bottle. Waistcoat chambray forage kinfolk viral, 8-bit banh mi try-hard chillwave raw denim gentrify art party DIY shoreditch disrupt. Man bun post-ironic marfa microdosing gastropub photo booth fap flannel, chicharrones readymade. Chia single-origin coffee schlitz austin pug, iPhone meditation narwhal meh chillwave tofu pop-up shoreditch neutra banh mi. Fanny pack church-key farm-to-table, ennui leggings microdosing keffiyeh raw denim gluten-free four loko pork belly art party umami normcore bitters.</p>
              
              <p>Kickstarter church-key humblebrag farm-to-table man bun, pork belly try-hard gentrify chambray street art sartorial raw denim pitchfork 8-bit offal. Austin roof party chambray, sriracha sartorial pour-over franzen pinterest ugh YOLO. +1 kale chips viral, chillwave chia disrupt messenger bag ramps. Swag cardigan kogi wolf, knausgaard polaroid cronut distillery irony bespoke kale chips before they sold out echo park paleo. Brunch tattooed tumblr +1 bicycle rights. Taxidermy knausgaard craft beer readymade, butcher blue bottle actually echo park banh mi. Direct trade trust fund fanny pack pop-up craft beer.</p>
              
              <p>Quinoa occupy ennui next level tofu fap, meh authentic keffiyeh shoreditch poutine cray. Normcore man bun tofu tumblr, hella mixtape thundercats four loko lo-fi celiac asymmetrical XOXO. Street art health goth salvia lumbersexual pour-over tilde affogato, listicle pinterest sartorial. Synth keytar aesthetic, cliche before they sold out fashion axe chambray beard deep v small batch mixtape distillery. Master cleanse celiac farm-to-table, bitters before they sold out paleo helvetica roof party venmo tacos squid. Fap hoodie chartreuse, brooklyn authentic williamsburg crucifix fanny pack put a bird on it twee neutra small batch migas. Twee yuccie schlitz helvetica literally tofu, authentic bitters scenester umami aesthetic craft beer VHS deep v cold-pressed.</p>
            </div>
          </div>
          <div className={`${classes.mostRecent} col-lg-3 col-md-3 col-sm-3 col-xs-12`}>
            <h5>Recent Articles</h5>
            <hr/>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
            <div className={classes.article}>
              <p className={classes.topicPreview}>Topic</p>
              <h4>An incumbent's guide to digital disruption</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}