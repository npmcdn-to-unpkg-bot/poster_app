<!DOCTYPE html>
<html lang="en" ng-app="adminApp">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="stylesheet" href="css/theme.css">
    <title>Simple Sidebar - Start Bootstrap Template</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
          crossorigin="anonymous">
    <link rel="stylesheet"
          href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.css">
    <!--AngularJS-->

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.12/angular.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-aria.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-messages.min.js"></script>

    <script src="https://npmcdn.com/angular-toastr/dist/angular-toastr.tpls.js"></script>
    <link rel="stylesheet" href="https://npmcdn.com/angular-toastr/dist/angular-toastr.css" />

    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.css' type='text/css' media='all' />
    <script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.9.0/loading-bar.min.js'></script>

    <script src="http://angular.github.io/angular-phonecat/step-7/app/bower_components/angular-route/angular-route.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controllers.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"  rel="stylesheet">
    <!-- Custom CSS -->


</head>

<body>

<div id="wrapper">

    <!-- Sidebar -->
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">

                    PosterApp Menu

            </li>
            <li>
                <a href="#/categories">Categories</a><a class="sub-menu" href="#/category"><i class="material-icons correct_icon">add_box</i></a>
            </li>
            <li>
                <a href="#/users">Users</a><a class="sub-menu" href="#/user"><i class="material-icons correct_icon">add_box</i></a>
            </li>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->

    <div id="page-content-wrapper">

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 ">
                    <div ng-view></div>
                </div>
            </div>
        </div>
    </div>
    <!-- /#page-content-wrapper -->

</div>

</body>

</html>