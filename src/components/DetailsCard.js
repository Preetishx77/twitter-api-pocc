export const DetailsCard = ({ data }) => {
  
  const hastags = {};

  const mentions = {};

  console.log(data.tweets);
//   const conversationId = "conversationId";
// const authToken = "AUTH_TOKEN";
// const url = `https://api.symbl.ai/v1/conversations/${conversationId}/topics`;

// // Set headers
// let headers = new Headers();
// headers.append("Authorization", `Bearer ${authToken}`);

// function getAnalysis(text){
//   const data1 = {
//     method: "GET",
//     headers: headers,
//     body: JSON.stringify(text)
//   };
  
  
//   const request = new Request(url, data1);
  
//   fetch(request)
//     .then((response) => {
//       console.log("response", response);
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Something went wrong on api server!");
//       }
//     })
//     .then((response) => {
//       console.log("Success");
     
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

  
  

  data?.tweets?.map(tweet => {
    tweet.entities?.hashtags?.map(hashtag => {
      if(hastags[hashtag.tag]) {
        hastags[hashtag.tag] += 1;
      } else {
        hastags[hashtag.tag] = 1;
      }
    });

    tweet.entities?.mentions?.map(mention => {
      if(mentions[mentions.username]) {
        mentions[mention.username] += 1;
      } else {
        mentions[mention.username] = 1;
      }
    });

  });

  if(!data) {
    return null
  }

  console.log('hastags', hastags);
  let regex = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/;

  return (
    <>
      <div className="bg-white rounded-xl p-4 shadow-2xl m-2">
        # Total hashtags:  {Object.keys(hastags).length}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-2xl m-2">
        @ Total Mentions:  {Object.keys(mentions).length}
      </div>

      {/* hashtags details */}
      <div className="bg-white rounded-xl p-4 shadow-2xl m-2">
        <span className="ml-2 text-lg">#️ Top HashTags</span>
        <div className="flex flex-wrap">
          {Object.entries(hastags).map(([key, value]) => (
            <span key={key} className="p-3 bg-indigo-300 rounded-2xl shadow-2xl m-2">
              {key}  {value} 
            </span>
          ))}
        </div>
      </div>
      {/* mentions details */}
      <div className="bg-white rounded-xl p-4 shadow-2xl m-2">
        <span className="ml-2 text-lg">@ All Mentions</span>
        <div className="flex flex-wrap">
          {Object.entries(mentions).map(([key, value]) => (
            <span key={key} className="p-3 bg-indigo-300 rounded-2xl shadow-2xl m-2">
              {key}  {value} 
            </span>
          ))}
        </div>
      </div>
      <div>
        <div style={{display:'inline-flex',flexWrap:'wrap'}}>
        {
          data.tweets.map(tweet => {
            return (
              <>
             { !tweet.entities && <>
           
<div className="tweet-wrap">
  <div className="tweet-header">
    <img src={data.userData.profile_image_url} alt="" className="avator" />
    <div className="tweet-header-info">
      {data.userData.name} <span>{data.userData.username}</span><span>.
</span>
      <p>{tweet.text}</p>
      
    </div>
    <div className="tweet-img-wrap">
    {/* <img src={regex.test(tweet.text) ? tweet.text : ''} alt="" className="tweet-img" /> */}
  </div>
  </div>
 
  <div className="tweet-info-counts">
    
    <div className="comments">
      
      <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      <div className="comment-count"></div>
    </div>
    
    <div className="retweets">
      <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
      <div className="retweet-count"></div>
    </div>
    
    <div className="likes">
      <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      <div className="likes-count">
      
      </div>
    </div>
    
    <div className="message">
      <svg className="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    </div>
    
  </div>

  <div>
 
  
    {/* <h5>{getAnalysis(tweet.text).aggregate_sentiment ? (<>
    Positivity: {getAnalysis(tweet.text).aggregate_sentiment.pos}
    Negativity: {getAnalysis(tweet.text).aggregate_sentiment.neg}
    Neutral : {getAnalysis(tweet.text).aggregate_sentiment.neu}
    </>) : (<></>) }</h5> */}
  </div>
</div>
              
              
              </>
              
              }
           
              </>
            )
          })
        }
        </div>
       
      </div>
    </>
  )

}