// common directives

angular.module('commonModule',[]).directive('appFooter', function() { // footer directive

    return {
      templateUrl: 'modules/footer/view/footer.html'
    };

  }).directive('appMenu', function() { // menu directive
    
    return {
    
        templateUrl: 'modules/navigation/view/menu.html'
    };

  });