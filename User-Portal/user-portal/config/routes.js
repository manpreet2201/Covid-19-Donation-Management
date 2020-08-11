/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 '/': { view: 'pages/launchpage', locals: { layout: false } },
 '/login': { view: 'pages/login', locals: { layout: false } },
 'POST /jobs/homepage': 'MasterController.homepage',
 'GET /jobs/homepage': 'MasterController.homepage',
 'GET /jobs/logout': 'MasterController.logout',
 'POST /jobs/login': 'MasterController.login',
 'GET /jobs/list': 'MasterController.list',
 'GET /jobs/job/:jobName': 'MasterController.parts',
 'POST /jobs/validate': 'MasterController.validate',
 'POST /jobs/search': 'SearchController.search',
 'POST /jobs/validateOrder': 'MasterController.validateOrder',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
