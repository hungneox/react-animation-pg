var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.controller("ProjectsController", function($scope, $timeout, $document, $location, $q) {
    var fuckProject = function(selector) {
        selector.find(".description").toggleClass("max-height");
        selector.find(".row-1").toggleClass("max-height");
        var width = selector.find(".main").width();
        var height = selector.find(".row-1").height();
        selector.find(".description").toggleClass("max-height");
        selector.find(".row-1").toggleClass("max-height");

        selector.find(".members").toggleClass("max-width");
        selector.find(".task").toggleClass("max-height");
        var members = selector.find(".members").width();
        var task = selector.find(".task").height();
        selector.find(".members").toggleClass("max-width");
        selector.find(".task").toggleClass("max-height");

        var expanded = selector.hasClass("active");
        if (expanded) {
            selector.find(".task").animate({
                maxHeight: "0",
                opacity: 0
            }, 300);

            setTimeout(function() {
                selector.find(".members").animate({
                    maxWidth: "0",
                    opacity: 0
                }, 300);
            }, 50);

            setTimeout(function() {
                selector.find(".row-1").animate({
                    maxHeight: "32px"
                }, 300);
                selector.find(".description").animate({
                    maxHeight: "0"
                }, 300);

                selector.toggleClass("active");
            }, 375);
        } else {
            selector.toggleClass("active");
            setTimeout(function() {
                selector.find(".row-1").animate({
                    maxHeight: height + "px"
                }, 300);
                selector.find(".description").animate({
                    maxHeight: height + "px"
                }, 300);
            }, 50);

            setTimeout(function() {
                selector.find(".members").animate({
                    maxWidth: members + "px",
                    opacity: 1
                }, 300);
            }, 500);

            setTimeout(function() {
                selector.find(".task").animate({
                    maxHeight: task + "px",
                    opacity: 1
                }, 300);
            }, 400);
        }
    };

    $scope.isChange = false;
    $document.ready(function() {
        $(".projects-block").css("width", $(window).width() - 324 - 48 - 48);

        $(window).resize(function() {
            $(".projects-block").css("width", $(window).width() - 324 - 48 - 48);
            $(".project-block").each(function() {
                var width = $(this).find(".main").width();
                var height = $(this).find(".main").height();

                $(this).find(".members").css("height", height - 60);
                $(this).find(".task").css("width", width - 64);
                $(this).find(".task").css("left", 32);
            });
        });

        $(".project-block").each(function() {
            $(this).find(".description").toggleClass("max-height");
            $(this).find(".row-1").toggleClass("max-height");
            var width = $(this).find(".main").width();
            var height = $(this).find(".row-1").height();
            $(this).find(".description").toggleClass("max-height");
            $(this).find(".row-1").toggleClass("max-height");

            $(this).find(".members").css("height", height - 60);
            $(this).find(".task").css("width", width - 64);
            $(this).find(".task").css("left", 32);
        });

        setTimeout(function() {
            fuckProject($("#project1"));
            $scope.fullyLoad = true;
        }, 1550);

        $(".project-block .main .header").click(function() {
            fuckProject($(this).parent().parent().parent().parent());
        });
    });

    // $scope.$on("$locationChangeStart", function (event, newUrl, oldUrl) {
    //     var baseLen = $location.absUrl().length - $location.url().length;
    //     var canceler = $q.defer();
    //     $(".project-block").each(function() {
    //         if ($(this).hasClass("active")) {
    //             fuckProject($(this));
    //         }
    //     });

    //     setTimeout(function() {
    //         $(".project-block").each(function() {
    //             $(this).addClass("fadeOutRight");
    //         });
    //     }, 675);

    //     setTimeout(function() {
    //         $("#profile").addClass("fadeOutLeft");
    //     }, 675);

    //     $timeout(function() {
    //         $scope.isChange = true;
    //         // $location.path(newUrl.substring(baseLen));
    //         return;
    //     }, 1800);

    //     if ($scope.isChange == false) {
    //         // event.preventDefault();
    //     } else {
    //         $scope.isChange = false
    //     }
    // });
});

app.controller("CreateController", function($scope, $timeout, $document, $location) {
    $scope.phasesNumber = 1;
    $scope.getNumber = function(num) {
        if (!num) { num = 1; }
        return new Array(parseInt(num));
    }
    $scope.members = [];
    $scope.accounts = [
        {name: 'nguyen tuan cuong', email: 'cuongnguyen@yami.moe', pic: 'profile_picture.jpg'},
        {name: 'pham hong an', email: 't3phho00@students.oamk.fi', pic: 'an_pham.png'},
        {name: 'hoang long', email: 't3holo00@students.oamk.fi', pic: 'hoang_long.jpg'},
        {name: 'cocomi naruse', email: 'random@gmail.com', pic: 'mypictr_300x300.jpg'},
        {name: 'risa tachibana', email: 'random_too@gmail.com', pic: 'risa.jpg'},
        {name: 'pikachu', email: 'pikachu@gmail.com', pic: 'pikachu.png'},
        {name: 'kanade tachibana', email: 'random_triple@gmail.com', pic: 'kanade.jpg'}
    ];
    $scope.addMember = function(index) {
        if ($scope.accounts[index]) {
            $scope.members.unshift($scope.accounts[index]);
            $scope.accounts.splice(index, 1);
        }
    };

    $("#create-1 .next").click(function() {
        $("#create-1").removeClass("fadeInLeft");
        $("#create-1").removeClass("fadeInRight");
        $("#create-1").addClass("fadeOutLeft");
        $timeout(function() {
            $("#create-2").removeClass("fadeInRight");
            $("#create-2").removeClass("fadeOutRight");
            $("#create-2").css("display", "block");
            $("#create-2").addClass("fadeInRight");
            $("#create-1").css("display", "none");
        }, 750);
    });

    $("#create-2 .next").click(function() {
        $("#create-2").removeClass("fadeInLeft");
        $("#create-2").removeClass("fadeInRight");
        $("#create-2").addClass("fadeOutLeft");
        $timeout(function() {
            $("#create-3").removeClass("fadeInRight");
            $("#create-3").removeClass("fadeOutRight");
            $("#create-3").css("display", "block");
            $("#create-3").addClass("fadeInRight");
            $("#create-2").css("display", "none");
        }, 750);
    });

    $("#create-2 .back").click(function() {
        $("#create-2").removeClass("fadeInRight");
        $("#create-2").addClass("fadeOutRight");
        $timeout(function() {
            $("#create-2").css("display", "none");
            $("#create-1").css("display", "block");
            $("#create-1").removeClass("fadeOutLeft");
            $("#create-1").addClass("fadeInLeft");
        }, 750);
    });

    $("#create-3 .done").click(function() {
        $("#create-3").removeClass("fadeInLeft");
        $("#create-3").removeClass("fadeInRight");
        $("#create-3").addClass("fadeOutLeft");
        $timeout(function() {
            $("#create-4").removeClass("fadeInRight");
            $("#create-4").removeClass("fadeOutRight");
            $("#create-4").css("display", "block");
            $("#create-4").addClass("fadeInRight");
            $("#create-3").css("display", "none");
        }, 750);
    });

    $("#create-3 .back").click(function() {
        $("#create-3").removeClass("fadeInRight");
        $("#create-3").addClass("fadeOutRight");
        $timeout(function() {
            $("#create-3").css("display", "none");
            $("#create-2").css("display", "block");
            $("#create-2").removeClass("fadeOutLeft");
            $("#create-2").addClass("fadeInLeft");
        }, 750);
    });
});

app.controller("ProjectController", function($scope, $timeout, $document) {
    $scope.accounts = [
        {name: 'nguyen tuan cuong', email: 'cuongnguyen@yami.moe', pic: 'profile_picture.jpg'},
        {name: 'pham hong an', email: 't3phho00@students.oamk.fi', pic: 'an_pham.png'},
        {name: 'hoang long', email: 't3holo00@students.oamk.fi', pic: 'hoang_long.jpg'},
        {name: 'cocomi naruse', email: 'random@gmail.com', pic: 'mypictr_300x300.jpg'},
        {name: 'risa tachibana', email: 'random_too@gmail.com', pic: 'risa.jpg'},
        {name: 'pikachu', email: 'pikachu@gmail.com', pic: 'pikachu.png'},
        {name: 'kanade tachibana', email: 'random_triple@gmail.com', pic: 'kanade.jpg'}
    ];

    $scope.tasks1 = [
        {name: 'nguyen tuan cuong', email: 'cuongnguyen@yami.moe', pic: 'profile_picture.jpg'},
        {name: 'pham hong an', email: 't3phho00@students.oamk.fi', pic: 'an_pham.png'},
        {name: 'hoang long', email: 't3holo00@students.oamk.fi', pic: 'hoang_long.jpg'},
        {name: 'cocomi naruse', email: 'random@gmail.com', pic: 'mypictr_300x300.jpg'},
        {name: 'risa tachibana', email: 'random_too@gmail.com', pic: 'risa.jpg'},
        {name: 'pikachu', email: 'pikachu@gmail.com', pic: 'pikachu.png'},
        {name: 'kanade tachibana', email: 'random_triple@gmail.com', pic: 'kanade.jpg'}
    ];

    $scope.tasks2 = [
        {name: 'cocomi naruse', email: 'random@gmail.com', pic: 'mypictr_300x300.jpg'},
        {name: 'risa tachibana', email: 'random_too@gmail.com', pic: 'risa.jpg'},
        {name: 'pikachu', email: 'pikachu@gmail.com', pic: 'pikachu.png'},
        {name: 'kanade tachibana', email: 'random_triple@gmail.com', pic: 'kanade.jpg'}
    ];

    $scope.tasks3 = [
        {name: 'nguyen tuan cuong', email: 'cuongnguyen@yami.moe', pic: 'profile_picture.jpg'},
        {name: 'risa tachibana', email: 'random_too@gmail.com', pic: 'risa.jpg'},
        {name: 'pikachu', email: 'pikachu@gmail.com', pic: 'pikachu.png'},
        {name: 'kanade tachibana', email: 'random_triple@gmail.com', pic: 'kanade.jpg'}
    ];

    var fixHelper = function(e, ui) {
        ui.children().each(function() {
            $(this).width($(this).width());
        });
        return ui;
    };

    $(".tasks-list > table > tbody").sortable({
        helper: fixHelper,
        placeholder: "ui-state-highlight",
        items: "tr:not(.done)",
        cancel: ".done"
    });
    $(".tasks-list > table > tbody").disableSelection();

    $(document).click(function() {
        $(".ui-block .wrapper-dropdown").removeClass("active");
    });

    $(".ui-block .wrapper-dropdown").on("click", function() {
        $(this).toggleClass("active");
        return false;
    });

    $("tbody td .dropdown li").on("click", function() {
        $(this).parent().parent().find("span").text($(this).text());
        if ($(this).text() == "done") {
            var row = $(this).parent().parent().parent().parent();
            if (row.hasClass("done"))
                return;
            $("tbody").append(row);
            var timer = $timeout(function() {
                row.addClass("animated demo done");
                $timeout.cancel(timer);
            },100);

            var timer2 = $timeout(function() {
                row.removeClass("animated");
                row.removeClass("demo");
                $timeout.cancel(timer2);
            },800);
        } else {
            var row = $(this).parent().parent().parent().parent();
            var timer = $timeout(function() {
                row.removeClass("animated");
                row.removeClass("demo");
                row.removeClass("done");
                $timeout.cancel(timer);
            },100);
        }
    });
});

app.controller("TaskController", function($scope, $timeout, $document) {
    $scope.members = [];
    $scope.accounts = [
        {name: 'nguyen tuan cuong', email: 'cuongnguyen@yami.moe', pic: 'profile_picture.jpg'},
        {name: 'pham hong an', email: 't3phho00@students.oamk.fi', pic: 'an_pham.png'},
        {name: 'hoang long', email: 't3holo00@students.oamk.fi', pic: 'hoang_long.jpg'},
        {name: 'cocomi naruse', email: 'random@gmail.com', pic: 'mypictr_300x300.jpg'},
        {name: 'risa tachibana', email: 'random_too@gmail.com', pic: 'risa.jpg'},
        {name: 'pikachu', email: 'pikachu@gmail.com', pic: 'pikachu.png'},
        {name: 'kanade tachibana', email: 'random_triple@gmail.com', pic: 'kanade.jpg'}
    ];
    $scope.addMember = function(index) {
        if ($scope.accounts[index]) {
            $scope.members.unshift($scope.accounts[index]);
            $scope.accounts.splice(index, 1);
        }
    };
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/template/projects.html',
            controller  : 'ProjectsController'
        })
        .when('/create', {
            templateUrl : '/template/new_project.html',
            controller  : 'CreateController'
        })
        .when('/project', {
            templateUrl : '/template/project.html',
            controller  : 'ProjectController'
        })
        .when('/addtask', {
            templateUrl : '/template/new_task.html',
            controller  : 'TaskController'
        });
});

// events
$(function() {
    $(document).click(function() {
        $(".wrapper-dropdown").removeClass("active");
    });

    $(".wrapper-dropdown").on("click", function() {
        $(this).toggleClass("active");
        return false;
    });
});