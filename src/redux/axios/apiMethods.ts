import APIKit from './apikit';

const StatusCodes = {
  Success: 1,
  Failure: 0,
  Unauthenticate: 2,
};

export const Method = {
  GET(url: string, header: any) {        
    return APIKit.get(url, {
      headers: header,
    })
      .then(async data => {
        if (data) {
          if (data.status >= 200 && data.status < 400) {
            return {
              status: StatusCodes.Success,
              result: data.data,
            };
          } else {
            return {
              result: {message: data.data.message},
              status: StatusCodes.Failure,
            };
          }
        } else {
          return {
            result: {message: 'Something went wrong.'},
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async error => {
        if (error.response.status == 403 || error.response.status == 401) {
          return {
            result: {message: error.response.data.message},
            status: StatusCodes.Unauthenticate,
          };
        } else if (!error.response) {
          return {
            result: {message: 'Timeout : server issue'},
            status: StatusCodes.Failure,
          };
        } else {
          return {
            result: {message: error.response.data.message},
            status: StatusCodes.Failure,
          };
        }
      });
  },
  POST(url: string, body: any, header: any) {
    return APIKit.post(url, body, {
        headers: header
    }).then(async (data) => {
        if (data) {
            if (data.status >= 200 && data.status < 400) {
                return {
                    status: StatusCodes.Success,
                    result: data.data,
                };
            }
            else {
                return {
                    result: { msg: data.data.message },
                    status: StatusCodes.Failure,
                }
            }
        } else {
            return {
                result: { msg: "Something went wrong." },
                status: StatusCodes.Failure
            }
        }
    }).catch(async (error) => {
        if (error.response.status == 403 || error.response.status == 401) {
            return {
                result: { msg: error.response.data.message },
                status: StatusCodes.Unauthenticate,
            }
        }
        else if (!error.response) {
            return {
                result: { msg: "Timeout : server issue" },
                status: StatusCodes.Failure,
            }
        }
        else if (error.response.data && error.response.data.error && error.response.data.error.message) {
            return {
                result: { msg: error.response.data.error.message },
                status: StatusCodes.Failure,
            }
        } else {
            return {
                result: { msg: error.response.data.message },
                status: StatusCodes.Failure,
            }
        }
    });
},
};
