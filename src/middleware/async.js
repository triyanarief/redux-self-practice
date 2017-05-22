export default function( {dispatch} ){
  return next => action => {
    //if no payload
    //and no .then property
    //we don't care, send it on
    if(!action.payload || !action.payload.then){
      // next goes to the next middleware
      // dispatch goes to the top
      // and runs action through whole cycle again
      return next(action); 
    }

    action.payload.then(function(response){
      // create new action w old type
      // use response as new payload
       const newAction = { ...action, payload: response};  
       // dispatch sends action through everything all over again
       // starting at the very top
       dispatch(newAction); 
    });
  }
}
