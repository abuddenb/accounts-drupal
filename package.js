/**
 * Created by abuddenberg on 3/28/16.
 */
Package.describe({
    name: "abuddenberg:accounts-drupal",
    summary: "Login service for Drupal 7 accounts",
    version: "0.0.1"
});

Package.onUse(function(api) {
    api.use('accounts-base@1.2.2', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth@1.1.8', ['client', 'server']);
    api.use('abuddenberg:drupal@0.0.1', ['client', 'server']);

    // api.addFiles('drupal_login_button.css', 'client');

    api.addFiles("drupal.js");
});