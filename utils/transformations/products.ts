export const productsUpsertTrasnformations = ({
  name,
  balance,
  creator
}: {
  name: any;
  balance: any;
  creator: any;
}) => {
  const dataCreate = {
    title: name,
    balance: balance,
    creator: {
      connect: {
        email: creator,
      }
    },

  };
  const dataUpdate = {
    balance: {
      set: balance,
    },
  };
  
  return {
    dataCreate,
    dataUpdate,
  };
};
