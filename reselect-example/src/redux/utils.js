export function onLoading() {
  return (state, action) => state.merge({ [`${action.target}Loading`]: true });
}

export function onLoaded() {
  return (state, action) => state.merge({ [`${action.target}Loading`]: false });
}

export function onSuccess() {
  return (state, action) =>
    state.merge({
      [`${action.target}Loading`]: false,
      [`${action.target}`]: action.payload,
      [`${action.target}Error`]: null
    });
}

export function onFailure() {
  return (state, action) =>
    state.merge({
      [`${action.target}Error`]: action.payload,
      [`${action.target}Loading`]: false
    });
}

export function onDelete(list) {
  return (state, action) =>
    state.merge({
      [`${action.target}`]: list.filter(item => action.payload.id !== item.id)
    });
}

// TODO: Show a warning or throw an exception if target = undefined
export function createAction(type, target, payload = []) {
  if (!target || target === '') {
    console.warn('You should use a target for the action');
  }
  return {
    type,
    target,
    payload
  };
}

export function createThunkAction(type, serviceMethod, target) {
  return async dispatch => {
    dispatch(createAction(type, target, null));
    const response = await serviceMethod();
    if (response.ok) {
      dispatch(createAction(`${type}_SUCCESS`, target, response.data));
    } else {
      dispatch(createAction(`${type}_ERROR`, target, response.problem));
    }
  };
}
