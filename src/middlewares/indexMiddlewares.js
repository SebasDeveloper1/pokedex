export const feturing = (store) => (next) => (actionInfo) => {
  const prefixed = actionInfo.action.payload.map((pokemon) => ({
    ...pokemon,
    name: `Poke: ${pokemon.name}`,
  }));

  const updatedAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: prefixed },
  };
  next(updatedAction);
};
