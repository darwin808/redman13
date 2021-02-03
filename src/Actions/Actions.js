export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const addpeople = (data) => {
  return {
    type: "ADDPEOPLE",
    payload: data,
  };
};

export const deletepeople = (id) => {
  return {
    type: "DELETEPEOPLE",
    payload: id,
  };
};

export const updatepeople = ({ idholder, edit }) => {
  return {
    type: "UPDATEPEOPLE",
    payload: { idholder, edit },
  };
};
