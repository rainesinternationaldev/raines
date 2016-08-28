import mailchimp from 'mailchimp-v3';

mailchimp.setApiKey('8d2106efc02c51a18e15e17f49a65dc7-us13');

const mcLists = {
  rainesMonthlyHighlights: {
    id: '4f39671b06'
  },
  rainesMonthlyHighlightsForConsultants: {
    id: '9badf36bb4'
  },
  rainesClassics: {
    id: '32f27373da'
  },
  rainesTopTen: {
    id: '18e2831ae2'
  }
}

export const subscribeUserToMailchimp = (lists, data) => {

  console.log('parsed n', lists)
  console.log('parsed d', data)

  return Promise.all(lists.map((listName) => {
    const listId = mcLists[listName].id;
    const mcData = {
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.firstName,
        LNAME: data.lastName,
        company: data.company,
        title: data.title
      }
    };

    console.log('data!!!', mcData);

    return mailchimp.post(`/lists/${listId}/members`, {
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME:    data.firstName,
        LNAME:    data.lastName,
        company:  data.company,
        title:    data.developer
      }
    })
    .then(function(result){
      console.log(`....${result}`);
      return result;
    })
    .catch(function(error){
      console.log(error);
      return error;
    });
    
  })).then((results) => {
    console.log('yay result', results)
  })


  // lists.forEach((listName) => {
    
  //   const listId = mcLists[listName].id;
  //   const mcData = {
  //     email_address: data.email,
  //     status: 'subscribed',
  //     merge_fields: {
  //       FNAME: data.firstName,
  //       LNAME: data.lastName,
  //       company: data.company,
  //       title: data.title
  //     }
  //   };

  //   mailchimp.post(`/lists/${listId}/members`, {
  //     email_address: data.email,
  //     status: 'subscribed',
  //     merge_fields: {
  //       FNAME:    data.firstName,
  //       LNAME:    data.lastName,
  //       company:  data.company,
  //       title:    data.developer
  //     }
  //   })
  //   .then(function(result){
  //     console.log(result);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   });
    
  // })
  
}