var myapp = angular.module("SignIn",[]);
myapp.directive('optIn', function(){
     
    return  {
        restrict: 'E',
        transclude: true,
        template: '<div class="opt-in"><span ng-transclude></span><input type="text" name ="firstName" value="firstName" > <input type="text" name ="lastName" value="lastName" ><br/> <br/> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<input type="text" name ="Email" value="Email" > <br/> <br/>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<input type="button" name ="Info" value="Give us your Infoz" >   </div>',
        replace: true
       
    }
})
