import { createAction, handleActions } from 'redux-actions';
import { requestSuccess, requestFail } from 'utils/request';

// ------------------------------------
// Constants
// ------------------------------------
export const GET_DOCUMENTS = 'GET_DOCUMENTS';
export const CREATE_DOCUMENT = 'CREATE_DOCUMENT';
export const UPDATE_DOCUMENT = 'UPDATE_DOCUMENT';
export const DELETE_DOCUMENT = 'DELETE_DOCUMENT';
export const SEARCH_DOCUMENT = 'SEARCH_DOCUMENT';
export const GET_DOCUMENT = 'GET_DOCUMENT';
export const LEFT_UPDATE_DOCUMENT = 'LEFT_UPDATE_DOCUMENT';
export const RIGHT_UPDATE_DOCUMENT = 'RIGHT_UPDATE_DOCUMENT';
export const UP_UPDATE_DOCUMENT = 'UP_UPDATE_DOCUMENT';
export const DOWN_UPDATE_DOCUMENT = 'DOWN_UPDATE_DOCUMENT';
export const UPDATE_SELECTION = 'UPDATE_SELECTION';
export const DELETE_SELECTION = 'DELETE_SELECTION';
export const CREATE_SELECTION = 'CREATE_SELECTION';

// ------------------------------------
// Actions
// ------------------------------------

export const getDocuments = createAction(GET_DOCUMENTS);
export const createDocument = createAction(CREATE_DOCUMENT);
export const updateDocument = createAction(UPDATE_DOCUMENT);
export const deleteDocument = createAction(DELETE_DOCUMENT);
export const searchDocument = createAction(SEARCH_DOCUMENT);
export const getDocument = createAction(GET_DOCUMENT);
export const leftUpdateDocument = createAction(LEFT_UPDATE_DOCUMENT);
export const rightUpdateDocument = createAction(RIGHT_UPDATE_DOCUMENT);
export const upUpdateDocument = createAction(UP_UPDATE_DOCUMENT);
export const downUpdateDocument = createAction(DOWN_UPDATE_DOCUMENT);
export const updateSelection = createAction(UPDATE_SELECTION);
export const deleteSelection = createAction(DELETE_SELECTION);
export const createSelection = createAction(CREATE_SELECTION);

const initialState = {
  documents: [],
  status: 'INIT',
  error: null,
  currentDocument: {},
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(
  {
    [requestSuccess(CREATE_SELECTION)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(CREATE_SELECTION),
    }),

    [requestFail(CREATE_SELECTION)]: (state, { payload }) => ({
      ...state,
      status: requestFail(CREATE_SELECTION),
      error: payload,
    }),

    [requestSuccess(DELETE_SELECTION)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DELETE_SELECTION),
    }),

    [requestFail(DELETE_SELECTION)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DELETE_SELECTION),
      error: payload,
    }),

    [requestSuccess(UPDATE_SELECTION)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(UPDATE_SELECTION),
    }),

    [requestFail(UPDATE_SELECTION)]: (state, { payload }) => ({
      ...state,
      status: requestFail(UPDATE_SELECTION),
      error: payload,
    }),

    [requestSuccess(UP_UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(UP_UPDATE_DOCUMENT),
    }),

    [requestFail(UP_UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(UP_UPDATE_DOCUMENT),
      error: payload,
    }),

    [requestSuccess(DOWN_UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DOWN_UPDATE_DOCUMENT),
    }),

    [requestFail(DOWN_UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DOWN_UPDATE_DOCUMENT),
      error: payload,
    }),

    [requestSuccess(RIGHT_UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(RIGHT_UPDATE_DOCUMENT),
    }),

    [requestFail(RIGHT_UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(RIGHT_UPDATE_DOCUMENT),
      error: payload,
    }),

    [requestSuccess(LEFT_UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(LEFT_UPDATE_DOCUMENT),
    }),

    [requestFail(LEFT_UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(LEFT_UPDATE_DOCUMENT),
      error: payload,
    }),

    [requestSuccess(GET_DOCUMENTS)]: (state, { payload }) => ({
      ...state,
      documents: payload,
      status: requestSuccess(GET_DOCUMENTS),
    }),

    [requestFail(GET_DOCUMENTS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(GET_DOCUMENTS),
      error: payload,
    }),

    [requestSuccess(GET_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      currentDocument: payload,
      status: requestSuccess(GET_DOCUMENT),
    }),

    [requestFail(GET_DOCUMENTS)]: (state, { payload }) => ({
      ...state,
      status: requestFail(GET_DOCUMENT),
      error: payload,
    }),

    [requestSuccess(SEARCH_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      documents: payload,
      status: requestSuccess(SEARCH_DOCUMENT),
    }),

    [requestFail(SEARCH_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(SEARCH_DOCUMENT),
      error: payload,
    }),

    [requestSuccess(CREATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(CREATE_DOCUMENT),
    }),

    [requestFail(CREATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(CREATE_DOCUMENT),
      error: payload,
    }),

    [requestSuccess(UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(UPDATE_DOCUMENT),
    }),

    [requestFail(UPDATE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(UPDATE_DOCUMENT),
      error: payload,
    }),

    [requestSuccess(DELETE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestSuccess(DELETE_DOCUMENT),
    }),

    [requestFail(DELETE_DOCUMENT)]: (state, { payload }) => ({
      ...state,
      status: requestFail(DELETE_DOCUMENT),
      error: payload,
    }),
  },
  initialState
);
