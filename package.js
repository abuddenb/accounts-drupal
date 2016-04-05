/**
 * Created by abuddenberg on 3/28/16.
 */
Package.describe({
    name: "abuddenb:accounts-drupal",
    summary: "Login service for Drupal 7 accounts",
    version: "0.0.1"
});

Package.onUse(function(api) {
    api.use('accounts-base', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('abuddenb:drupal', ['client', 'server']);

    // api.addFiles('drupal_login_button.css', 'client');

    api.addFiles("drupal.js");
});