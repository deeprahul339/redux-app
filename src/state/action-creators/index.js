export const depositMoney = (amount) => {
  // return(dispatch)=>{
  //     dispatch({
  //         type:'deposit',
  //         payload:amount
  //     })
  // }
  return { type: "deposit", payload: amount };
};

export const withdrawtMoney = (amount) => {
  //   return (dispatch) => {
  //     dispatch({
  //       type: "withdraw",
  //       payload: amount,
  //     });
  //   };
  return { type: "withdraw", payload: amount };
};
export const incCount = (count) => {
  //   return (dispatch) => {
  //     dispatch({
  //       type: "inc",
  //       payload: count,
  //     });
  //   };
  return { type: "inc", payload: count };
};

export const decCount = (count) => {
  //   return (dispatch) => {
  //     dispatch({
  //       type: "dec",
  //       payload: count,
  //     });
  //   };
  return { type: "dec", payload: count };
};
