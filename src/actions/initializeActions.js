"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');
var FintracApi = require('../api/fintracApi');

var InitializeActions = {
	initApp: function() {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				authors: AuthorApi.getAllAuthors(),
				fintracimports: FintracApi.getAllImports()
			}
		});
	}
};

module.exports = InitializeActions;