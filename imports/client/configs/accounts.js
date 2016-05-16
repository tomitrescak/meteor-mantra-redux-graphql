import { Accounts } from 'meteor/accounts-base';
Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY',
});
