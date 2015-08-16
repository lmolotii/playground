var Dessert = Dessert || {};
Dessert.Controllers = angular.module('dessert.controllers',[]);
Dessert.Directives = angular.module('dessert.directives',[]);
Dessert.Filters = angular.module('dessert.filters',[]);
Dessert.Managers = angular.module('dessert.managers',[]);
Dessert.Services = angular.module('dessert.services',[]);
Dessert.Templates = angular.module('dessert.templates',[]);

Dessert.Dependencies = ['dessert.directives','dessert.filters','dessert.managers','dessert.services','dessert.controllers','dessert.templates'];