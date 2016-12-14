// import mailchimp from 'mailchimp-v3';
const mailchimp = require('mailchimp-v3');

mailchimp.setApiKey('8d2106efc02c51a18e15e17f49a65dc7-us13');

const mcLists = {
  rainesMonthlyHighlights: {
    id: '4f39671b06'
  },
  rainesMonthlyHighlightsForConsultants: {
    id: '9badf36bb4'
  },
  latestHeadlines: {
    id: '76c9d90321'
  }
}

exports.subscribeUserToMailchimp = (lists, data) => {

  // console.log('parsed n', lists)
  // console.log('parsed d', data)

  return Promise.all(lists.map((listName) => {
    const listId = mcLists[listName].id;
    const mcData = {
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.firstName,
        LNAME: data.lastName,
        COMPANY: data.company,
        TITLE: data.title
      }
    };

    // console.log('data!!!', mcData);

    return mailchimp.post(`/lists/${listId}/members`, mcData)
    .then(function(result){
      // console.log(`....${result}`);
      return result;
    })
    .catch(function(error){
      // console.log(error);
      return error;
    });
    
  })).then((results) => {
    // console.log('yay result', results)
    return results
  })

}