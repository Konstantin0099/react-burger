export const baseUrl = 'https://norma.nomoreparties.space/api';
export const URL_USER_AUTH = `${baseUrl}/auth`;
export const URL_USER_PASS = `${baseUrl}/password-reset`;

export const bodyLogin =  {
    "email": "sh-tov@ya.ru", 
    "password": "mas12345678", 
  };
export const bodyPass =  {
    "email": "sh-tov@ya.ru", 
  };
// export const bodyToken =  {
//         "token": localStorage.getItem("refreshToken"),
//   };
export const bodyResPass =  {
    "password": "mas12345678",
    "token": "a2d32c7e-8366-4d7e-a0c0-f58715316c09", // из почты, должен быть актуальный
  };

export const DATA_FETCH = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: ""
}
export const DATA_GET = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
}
export const DATA_SET = {
    method: 'PATCH',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: "Павка",
      email: "sh-tov@yandex.ru",
      "password": "mas12345678",
    }),
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
}


//   GET https://norma.nomoreparties.space/api/auth/user - эндпоинт получения данных о пользователе.
// PATCH https://norma.nomoreparties.space/api/auth/user - эндпоинт обновления данных о пользователе. 






const dataOrder = [
    // {
    //     "_id":"60d3b41abdacab0026a733c6",
    //     "name":"Краторная булка N-200i",
    //     "type":"bun",
    //     "proteins":80,
    //     "fat":24,
    //     "carbohydrates":53,
    //     "calories":420,
    //     "price":1255,
    //     "image":"https://code.s3.yandex.net/react/code/bun-02.png",
    // },
    // {
    //     "_id":"60d3b41abdacab0026a733cb",
    //     "name":"Биокотлета из марсианской Магнолии",
    //     "type":"main",
    //     "proteins":420,
    //     "fat":142,
    //     "carbohydrates":242,
    //     "calories":4242,
    //     "price":424,
    //     "image":"https://code.s3.yandex.net/react/code/meat-01.png",
    // },
    // {
    //     "_id":"60d3b41abdacab0026a733cc",
    //     "name":"Соус Spicy-X",
    //     "type":"sauce",
    //     "proteins":30,
    //     "fat":20,
    //     "carbohydrates":40,
    //     "calories":30,
    //     "price":90,
    //     "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
    // },
    // {
    //     "_id":"60d3b41abdacab0026a733cc",
    //     "name":"Соус Spicy-X",
    //     "type":"sauce",
    //     "proteins":30,
    //     "fat":20,
    //     "carbohydrates":40,
    //     "calories":30,
    //     "price":90,
    //     "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
    // },
    // {
    //     "_id":"60d3b41abdacab0026a733cc",
    //     "name":"Соус Spicy-X",
    //     "type":"sauce",
    //     "proteins":30,
    //     "fat":20,
    //     "carbohydrates":40,
    //     "calories":30,
    //     "price":90,
    //     "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
    // },
   

]


export { dataOrder}

