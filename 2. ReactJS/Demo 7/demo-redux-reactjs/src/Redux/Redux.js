import { createStore } from "redux";
console.log("Demo Redux Core");

// Bước 3: khai báo ra các state cần quản lý trong store
let initialState = {
  showForm: false,
  listAccount: [],
};

// Bước 2: khai báo 1 reducer luôn luôn dưới dạng function
let reducer = (state = initialState, action) => {
  // xử lý logic
  switch (action.type) {
    case "SHOW_INPUT_FORM":
      return {
        ...state,
        showForm: true,
      };

    case "CLOSE_INPUT_FORM":
      return {
        ...state,
        showForm: false,
      };

    case "ADD_ACCOUNT": {
      return {
        ...state,
        listAccount: [...state.listAccount, action.accountNew],
      };
    }

    case "DELETE_ACCOUNT": {
      let newListAccount = state.listAccount.filter(
        (account) => account.id !== action.id
      );
      return {
        ...state,
        listAccount: newListAccount,
      };
    }
    default:
      return { ...state };
  }
};

// Bước 1: khai báo ra 1 store để lưu trữ
let store = createStore(reducer);

// Bước 4: khai báo ra Action
let actionShowForm = {
  type: "SHOW_INPUT_FORM",
};

let actionCloseForm = {
  type: "CLOSE_INPUT_FORM",
};

let actionAddAccount = {
  type: "ADD_ACCOUNT",
  accountNew: {
    id: 1,
    name: "Hưng",
    gender: true,
  },
};

let actionDeleteAccount = {
  type: "DELETE_ACCOUNT",
  id: 1,
};

// Demo
console.log("Giá trị State ban đầu: ", store.getState());
// Click vào nút createNew ==> Thực hiện đẩy actionShowForm ==> Store ==> Reducer xử lý ==> đẩy giá trị State ShowForm về lại giao diện
store.dispatch(actionShowForm);
console.log("Giá trị State sau khi thay đổi: ", store.getState());

// Click vào nút close ==> Thực hiện đặt actionCloseForm ==> Store ==> Reducer xử lý ==> đặt giá trị State ShowForm về lại giao diện
store.dispatch(actionCloseForm);
console.log("Giá trị State sau khi thay đổi: ", store.getState());

// Click vào nút add ==> Thực hiện đặt actionAddAccount ==> Store ==> Reducer xử lý ==> đặt giá trị State listAccount về này giao diện
store.dispatch(actionAddAccount);
console.log("Giá trị State sau khi thay đổi: ", store.getState());

// Click vào nút delete ==> Thực hiện đặt actionDeleteAccount ==> Store ==> Reducer xử lý ==> đặt giá trị State listAccount về này giao diện
store.dispatch(actionDeleteAccount);
console.log("Giá trị State sau khi thay đổi: ", store.getState());
