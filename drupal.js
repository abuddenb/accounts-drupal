/**
 * Created by abuddenberg on 3/28/16.
 */

Accounts.oauth.registerService('drupal');

if (Meteor.isClient) {
    Meteor.loginWithDrupal = function(options, callback) {
        // support a callback without options
        if (! callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Drupal.requestCredential(options, credentialRequestCompleteCallback);
    };
} else {
    Accounts.addAutopublishFields({
        // publish all fields including access token, which can legitimately
        // be used from the client (if transmitted over ssl or on
        // "Sharing of Access Tokens"
        forLoggedInUser: ['services.drupal'],
        forOtherUsers: ['services.drupal.uid', 'services.drupal.name']
    });
}