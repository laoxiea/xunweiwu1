/**
 * Created by zhang on 2017/9/6.
 */

var app = angular.module('meishijieApp', ['ionic']);
app.controller('bodyCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.jump = function (state, args) {
        $state.go(state, args);
    };
    $scope.rememberId = true;
    if (localStorage.length > 0) {
        $scope.rememberId = false;
    } else {
        $scope.rememberId = true;
    }
}]);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        //首页
        .state('mIndex', {url: '/index', templateUrl: 'tpl/index.html', controller: 'indexCtrl'})
        .state('mIndexSearch', {
            url: '/indexSearch',
            templateUrl: 'tpl/include/index/indexSearch.html',
            controller: 'mIndexSearch'
        })//search
        .state('mFind', {url: '/find', templateUrl: 'tpl/find.html'})
        .state('mToDiscuss', {
            url: '/toDiscuss/:tid',
            templateUrl: 'tpl/include/index/toDiscuss.html',
            controller: 'mToDiscuss'
        })
        //饭范
        .state('mDiscuss', {url: '/discuss', templateUrl: 'tpl/discuss.html', controller: 'discussCtrl'})
        //个人中心
        .state('mUserCenter', {url: '/userCenter', templateUrl: 'tpl/userCenter.html', controller: 'setCtrl'})
        .state('mUserCenter1', {
            url: '/userCenter1',
            templateUrl: 'tpl/include/usercenter/userCenter1.html',
            parent: 'mUserCenter',
            controller: 'user1Ctrl'
        })
        .state('mUserCenterreg', {
            url: '/userCenterreg',
            templateUrl: 'tpl/include/usercenter/register.html',
            parent: 'mUserCenter',
            controller: 'userRegCtrl'
        })
        .state('mUserCenterlog', {
            url: '/userCenterlog',
            templateUrl: 'tpl/include/usercenter/login.html',
            parent: 'mUserCenter',
            controller: 'userloginCtrl'
        })
        .state('mUserDetail', {
            url: '/userDetail',
            templateUrl: 'tpl/include/usercenter/userDetail.html',
            parent: 'mUserCenter',
            controller: 'uDetailCtrl'
        })
        //集市
        .state('mStore', {url: '/store', templateUrl: 'tpl/store.html', controller: 'productCtrl'})
        .state('mStoreDetail', {
            url: '/storeDetail/:pid',
            templateUrl: 'tpl/include/store/store_detail.html',
            controller: 'storeDetailCtrl'
        })
        .state('mCart', {url: '/cart', templateUrl: 'tpl/include/cart.html', controller: 'cartCtrl'})
        .state('mOrder', {url: '/order', templateUrl: 'tpl/include/usercenter/myOrder.html', controller: 'orderCtrl'})
        //菜谱
        .state('mList', {url: '/list', templateUrl: 'tpl/list.html', controller: 'listCtrl'})//默认
        .state('mList1', {
            url: '/list1',
            templateUrl: 'tpl/include/list/listNormal.html',
            parent: 'mList',
            controller: 'listCtrl1'
        })
        .state('mList2', {
            url: '/list2',
            templateUrl: 'tpl/include/list/listChuan.html',
            parent: 'mList',
            controller: 'listCtrl2'
        })
        .state('mList3', {
            url: '/list3',
            templateUrl: 'tpl/include/list/listYue.html',
            parent: 'mList',
            controller: 'listCtrl3'
        })
        .state('mList4', {
            url: '/list4',
            templateUrl: 'tpl/include/list/listFor.html',
            parent: 'mList',
            controller: 'listCtrl4'
        })
        .state('mListDetail', {
            url: '/listDetail/:did',
            templateUrl: 'tpl/include/list/listDetail.html',
            controller: 'listDetailCtrl'
        });
    //$urlRouterProvider.otherwise('/list4');
});


//首页饭范
//首页强势围观==storeDetail
//首页菜谱==listDetail

//首页轮播
app.controller('indexCtrl', function ($scope, $kflHttp) {
    $kflHttp.sendRequest('/slider', function (data) {
        $scope.slider = data;
    })
    $kflHttp.sendRequest('/discussList', function (data) {
        $scope.discussList = data;
    })
    $kflHttp.sendRequest('/storeList', function (data) {
        $scope.storeList = data;
    })
    $kflHttp.sendRequest('/indexList', function (data) {
        $scope.indexList = data;
    })
})

//购物车--菜篮子
app.controller('cartCtrl', function ($scope, $kflHttp) {
    var pid = 0, hash2 = 0;
    $scope.ordersucc=true
    $scope.isEdit = true;
    $scope.content = '编辑';
    $scope.edit = function () {
        $scope.isEdit = !$scope.isEdit;
        if ($scope.content == '编辑') {
            $scope.content = '完成';
        } else {
            $scope.content = '编辑';
        }
    };
    var uacc = localStorage.getItem('useracc')
    $scope.haspro = true
    $kflHttp.sendRequest('/cart?uaccount=' + uacc, function (data) {
        console.log(data)
        $scope.aa = []
        for (var key in data) {
            $scope.aa.push(data[key].dishcount)
        }
        //console.log($scope.aa)
        if (data[0].code == -1) {
            $scope.haspro = false
        }
        $scope.cartlist = data

        var hash = {}
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            if (data[i] == pid) {
                data.splice(i, 1)
            }
        }
        var sum = 0;
        for (var key in data) {
            sum += data[key].dishcount * data[key].pprice
            $scope.total = sum.toFixed(2)
            $scope.plus = function (idx) {
                data[idx].dishcount++
                sum += data[idx].pprice
                //console.log(sum.toFixed(2))
                $scope.total = sum.toFixed(2)
                $scope.aa[idx] = data[idx].dishcount
                hash[data[idx].pid] = $scope.aa[idx]
                console.log(hash)
            }
            $scope.jian = function (idx) {
                if (data[idx].dishcount >= 2) {
                    data[idx].dishcount--
                    sum -= data[idx].pprice
                    $scope.aa[idx] = data[idx].dishcount
                    hash[data[idx].pid] = $scope.aa[idx]
                    console.log(hash)
                } else {
                    data[idx].dishcount = 1
                }
                $scope.total = sum.toFixed(2)
            }
            hash2 = hash
        }

        $scope.list = [];
        for (var i = 0; i < data.length; i++) {
            $scope.list.push(true)
        }
        console.log($scope.list)
        $scope.delet = function (idx) {
            pid = data[idx].pid
            console.log(pid)
            $kflHttp.sendRequest('/cartdel?pid=' + pid+"&uaccount=" + uacc, function (data) {
                console.log(data)
            })
            sum -= data[idx].pprice * data[idx].dishcount
            $scope.total = sum.toFixed(2)
            $scope.list[idx] = false;
        }
    })
    $scope.addorder = function () {
        var cc = JSON.stringify(hash2)
        console.log(hash2)
        console.log(cc)
        var uacc = localStorage.getItem('useracc')
        $kflHttp.sendRequest('/order?uaccount=' + uacc + "&hash=" + cc, function (data) {
            console.log(data);
            if(data.code==1){
                $scope.ordersucc=false
            }
        })
    }
})

//我的订单
app.controller('orderCtrl', function ($scope, $kflHttp, $state) {
    var acc = localStorage.getItem('useracc')
    $kflHttp.sendRequest('/myorder?uaccount=' + acc, function (data) {
        console.log(data);
        $scope.orderList = data
    })

})


//关于的弹窗

//个人中心主页
app.controller('setCtrl', function ($scope, $ionicModal, $kflHttp, $state) {

    $ionicModal.fromTemplateUrl('tpl/include/usercenter/modal.html', {scope: $scope}).then(function (modal) {
        $scope.myModal = modal;//保存拿到的自定义弹窗的实例
    })
    $scope.handleClick = function () {
        //console.log($scope.myModal)
        $scope.myModal.show()
    }
    $scope.hideModal = function () {
        $scope.myModal.hide()
    }

    //        完善个人资料
    var acc = localStorage.getItem('useracc')
    if (acc) {
        $kflHttp.sendRequest('/uDetailSle?uaccount=' + acc, function (data) {
            //console.log(data);
            $scope.info = data  //父控制器传值给子子控制器
            console.log($scope.info)
        })
    }
    $scope.getinfo = function () {
        $state.go('mUserDetail')

    }
})
//完善个人信息
app.controller('uDetailCtrl', function ($scope, $kflHttp, $state) {
    //console.log($scope.info[0])
    var getinfo = $scope.info[0]; //子控制器接收父控制器的值
    $scope.uName = {search: getinfo.uname};
    $scope.uAccept = {search: getinfo.uaccept};
    $scope.uPhone = {search: getinfo.uphone};
    $scope.uAddr = {search: getinfo.uaddr};

    $scope.updateInfo = function () {
        if ($scope.uName.search != '' && $scope.uAccept.search != '' && $scope.uPhone.search != '' && $scope.uAddr.search != '') {
            var acc = localStorage.getItem('useracc')
            var content = 'uname=' + $scope.uName.search + '&uaccept=' + $scope.uAccept.search + '&uphone=' +
                $scope.uPhone.search + '&uaddr=' + $scope.uAddr.search + '&uaccount=' + acc
            $kflHttp.sendRequest('/uDetailUpdate?' + content, function (data) {
                window.location.reload()
                $state.go('mUserCenter1')
            })
        }
    }
})

app.controller('userRegCtrl', function ($scope, $kflHttp, $timeout) {
    //注册
    $scope.uaccreg = '';
    $scope.upwdreg = '';
    $scope.reg = function () {
        if ($scope.uaccreg != '' && $scope.upwdreg != '') {
            $kflHttp.sendRequest('/regcheck?uaccount=' + $scope.uaccreg, function (data) {
                console.log(data)
                $timeout(function () {
                    if (data.code == 1) {
                        $kflHttp.sendRequest('/reg?uaccount=' + $scope.uaccreg + '&upwd=' + $scope.upwdreg, function (data) {
                            console.log(data)
                        })
                    }
                }, 0)
            })
        } else {
            console.log('不准注册')
        }
    }
})
//登录
app.controller('userloginCtrl', function ($scope, $kflHttp, $location, $rootScope) {
    $scope.uname = '';
    $scope.upwd = '';
    $scope.isLog = false;
    $scope.login = function () {
        //console.log($scope.uname!=''&&$scope.upwd!='')
        if ($scope.uname != '' && $scope.upwd != '') {
            $kflHttp.sendRequest('/login?uaccount=' + $scope.uname + '&upwd=' + $scope.upwd, function (data) {
                console.log(data)
                if (data.code == -1) {
                    $scope.isLog = true;
                } else {
                    $location.path('/mIndex')
                    $rootScope.user = $scope.uname;
                    localStorage.setItem('useracc', $scope.uname);
                    //localStorage.setItem('uid',data.id);
                    self.location.reload()
                }
            })
        }
    }
})
//个人中心1
app.controller('user1Ctrl', function ($scope, $kflHttp, $state) {
//    console.log($scope.info)//子控制器接收父控制器的值
    $scope.logout = function () {
        localStorage.removeItem('useracc')
        $state.go('mUserCenter');
        self.location.reload()
    }
})

//数据加载完成之前的弹窗以及get请求，自定义服务
app.service('$kflHttp', function ($http, $ionicLoading) {
    this.sendRequest = function (url, func) {
        $ionicLoading.show({
            template: "正在加载数据"
        })
        $http.get(url)
            .success(function (data) {
                $ionicLoading.hide()
                //console.log(data)
                func(data);
            })
            .error(function () {
                $ionicLoading.hide()
            })
    }
})
//菜谱
app.controller('listCtrl', function ($scope, $kflHttp, $debounce) {
    $scope.listall = [];
    $kflHttp.sendRequest('/list', function (data) {
        console.log(data)
        $scope.listall = data;
        listallago = data
    })


    //菜谱搜索
    $scope.listInput = {search: ''};
    $scope.isExist = true;
    $scope.$watch('listInput.search', function () {
        $debounce($scope.handleSearch, 500);
    })
    $scope.handleSearch = function () {
        if ($scope.listInput.search != '') {
            $kflHttp.sendRequest('/indexSearch?kwd=' + $scope.listInput.search, function (data) {
                if (data.length == 1) {
                    if (data[0].code == -1) {
                        $scope.isExist = false;
                    } else {
                        $scope.isExist = true;
                        $scope.listall = data;
                    }
                } else {
                    $scope.isExist = true;
                    $scope.listall = data;
                }
            })
        } else {
            $scope.isExist = true;
            $scope.listall = listallago
        }
    }

})

app.controller('listDetailCtrl', function ($scope, $kflHttp, $stateParams) {
    $kflHttp.sendRequest('/listDetail?did=' + $stateParams.did, function (data) {
        console.log(data)
        $scope.listDetail = data[0]
    })
})

app.controller('listCtrl1', function ($scope, $kflHttp) {

    $kflHttp.sendRequest('/list1', function (data) {
        //console.log(data)
        $scope.list1 = data
    })
})
app.controller('listCtrl2', function ($scope, $kflHttp) {
    $kflHttp.sendRequest('/list2', function (data) {
        //console.log(data)
        $scope.list2 = data
    })
})
app.controller('listCtrl3', function ($scope, $kflHttp) {
    $kflHttp.sendRequest('/list3', function (data) {
        //console.log(data)
        $scope.list3 = data
    })
})
app.controller('listCtrl4', function ($scope, $kflHttp) {
    $kflHttp.sendRequest('/list4', function (data) {
        //console.log(data)
        $scope.list4 = data
    })
})

//集市
app.controller('productCtrl', function ($scope, $kflHttp, $debounce) {
    $kflHttp.sendRequest('/product', function (data) {
        //console.log(data)
        $scope.product1 = [];
        $scope.product2 = [];
        $scope.product3 = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].cid == 1) {
                $scope.product1.push(data[i])

            } else if (data[i].cid == 2) {
                $scope.product2.push(data[i])
            } else if (data[i].cid == 3) {
                $scope.product3.push(data[i])
            }
        }
        productago1 = $scope.product1
        productago2 = $scope.product2
        productago3 = $scope.product3
        //console.log($scope.product1,$scope.product2,$scope.product3)
    })
    //集市搜索
    $scope.storeInput = {search: ''};
    $scope.isExist = true;
    $scope.isExistp = true;
    $scope.isExistdiv = true;
    $scope.$watch('storeInput.search', function () {
        $debounce($scope.handleSearch, 500);
    })
    $scope.handleSearch = function () {
        if ($scope.storeInput.search != '') {
            $kflHttp.sendRequest('/storeSearch?kwd=' + $scope.storeInput.search, function (data) {
                console.log(data)
                if (data.length == 1) {
                    if (data[0].code == -1) {
                        $scope.isExistdiv = false;
                        $scope.isExist = false;
                        $scope.isExistp = false;
                        $scope.storeSearch = data;
                    } else {
                        $scope.isExist = false;
                        $scope.isExistp = true;
                        $scope.isExistdiv = true;
                        $scope.storeSearch = data;
                    }
                } else {
                    console.log(data)
                    $scope.isExist = false;
                    $scope.isExistp = true;
                    $scope.storeSearch = data;
                    $scope.isExistdiv = true;
                }
            })
        } else {
            $scope.product1 = productago1;
            $scope.product2 = productago2;
            $scope.product3 = productago3;
            $scope.isExist = true;
            $scope.isExistp = true;
            $scope.isExistdiv = false;
        }
    }
})
//集市详情
app.controller('storeDetailCtrl', function ($scope, $kflHttp, $stateParams) {
    console.log($stateParams)
    var pid = $stateParams.pid;
    $kflHttp.sendRequest('/storeDetail?pid=' + pid, function (data) {
        console.log(data)
        $scope.storeDetail = data[0];
    })
    var uacc = localStorage.getItem('useracc')
    $scope.add = function () {
        $kflHttp.sendRequest('/addcart?pid=' + pid + "&uaccount=" + uacc, function (data) {
            console.log(data)
            //if(data.msg=='插入成功=1'){
            //    $ionicPopup.confirm({
            //        title:'确认',
            //        template:'成功添加到购物车'
            //
            //    })
            //}

        })
    }
})
//饭范
app.controller('discussCtrl', function ($scope, $kflHttp) {
    $kflHttp.sendRequest('/discuss', function (data) {
        $scope.talk = data;
    })
})
//toDisscuss
app.controller('mToDiscuss', function ($scope, $kflHttp, $stateParams) {
    $kflHttp.sendRequest('/toDiscuss?tid=' + $stateParams.tid, function (data) {
        console.log(data)
        $scope.toDisscuss = data;

    })
})

//首页搜索框
app.controller('mIndexSearch', function ($scope, $kflHttp, $debounce) {
    $scope.myInput = {search: ''};
    $scope.isExist = true;
    //$scope.noMsg=false;
    $scope.$watch('myInput.search', function () {
        $debounce($scope.handleSearch, 500);
    })
    $scope.handleSearch = function () {
        if ($scope.myInput.search != '') {
            $kflHttp.sendRequest('/indexSearch?kwd=' + $scope.myInput.search, function (data) {
                console.log(data.length)
                if (data.length == 1) {
                    if (data[0].code == -1) {
                        $scope.isExist = false;
                    } else {
                        $scope.isExist = true;
                        $scope.indexSearch = data;
                    }
                } else {
                    console.log(data)
                    $scope.isExist = true;
                    $scope.indexSearch = data;
                }
            })
        }
    }

})

//function nedws(){
//    navigator.accelerometer.getCurrentPosition()
//}


//防抖动插件
app.factory('$debounce', ['$rootScope', '$browser', '$q', '$exceptionHandler',
    function ($rootScope, $browser, $q, $exceptionHandler) {
        var deferreds = {},
            methods = {},
            uuid = 0;

        function debounce(fn, delay, invokeApply) {
            var deferred = $q.defer(),
                promise = deferred.promise,
                skipApply = (angular.isDefined(invokeApply) && !invokeApply),
                timeoutId, cleanup,
                methodId, bouncing = false;

            // check we dont have this method already registered
            angular.forEach(methods, function (value, key) {
                if (angular.equals(methods[key].fn, fn)) {
                    bouncing = true;
                    methodId = key;
                }
            });

            // not bouncing, then register new instance
            if (!bouncing) {
                methodId = uuid++;
                methods[methodId] = {fn: fn};
            } else {
                // clear the old timeout
                deferreds[methods[methodId].timeoutId].reject('bounced');
                $browser.defer.cancel(methods[methodId].timeoutId);
            }

            var debounced = function () {
                // actually executing? clean method bank
                delete methods[methodId];

                try {
                    deferred.resolve(fn());
                } catch (e) {
                    deferred.reject(e);
                    $exceptionHandler(e);
                }

                if (!skipApply) $rootScope.$apply();
            };

            timeoutId = $browser.defer(debounced, delay);

            // track id with method
            methods[methodId].timeoutId = timeoutId;

            cleanup = function (reason) {
                delete deferreds[promise.$$timeoutId];
            };

            promise.$$timeoutId = timeoutId;
            deferreds[timeoutId] = deferred;
            promise.then(cleanup, cleanup);

            return promise;
        }


        // similar to angular's $timeout cancel
        debounce.cancel = function (promise) {
            if (promise && promise.$$timeoutId in deferreds) {
                deferreds[promise.$$timeoutId].reject('canceled');
                return $browser.defer.cancel(promise.$$timeoutId);
            }
            return false;
        };

        return debounce;
    }
]);