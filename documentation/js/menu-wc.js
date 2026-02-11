'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mini-ecommerce-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-b5b4367fcc838d8310096ec33822e50d7d3b96810bc4d9fa21448def43fbbbca7d5f810bafc6d9c6f399ca64bd1becc55bdaa4b340290413d29693915a85e69b"' : 'data-bs-target="#xs-controllers-links-module-AppModule-b5b4367fcc838d8310096ec33822e50d7d3b96810bc4d9fa21448def43fbbbca7d5f810bafc6d9c6f399ca64bd1becc55bdaa4b340290413d29693915a85e69b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b5b4367fcc838d8310096ec33822e50d7d3b96810bc4d9fa21448def43fbbbca7d5f810bafc6d9c6f399ca64bd1becc55bdaa4b340290413d29693915a85e69b"' :
                                            'id="xs-controllers-links-module-AppModule-b5b4367fcc838d8310096ec33822e50d7d3b96810bc4d9fa21448def43fbbbca7d5f810bafc6d9c6f399ca64bd1becc55bdaa4b340290413d29693915a85e69b"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-b5b4367fcc838d8310096ec33822e50d7d3b96810bc4d9fa21448def43fbbbca7d5f810bafc6d9c6f399ca64bd1becc55bdaa4b340290413d29693915a85e69b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-b5b4367fcc838d8310096ec33822e50d7d3b96810bc4d9fa21448def43fbbbca7d5f810bafc6d9c6f399ca64bd1becc55bdaa4b340290413d29693915a85e69b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b5b4367fcc838d8310096ec33822e50d7d3b96810bc4d9fa21448def43fbbbca7d5f810bafc6d9c6f399ca64bd1becc55bdaa4b340290413d29693915a85e69b"' :
                                        'id="xs-injectables-links-module-AppModule-b5b4367fcc838d8310096ec33822e50d7d3b96810bc4d9fa21448def43fbbbca7d5f810bafc6d9c6f399ca64bd1becc55bdaa4b340290413d29693915a85e69b"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationsModule-05766f27538ff9664b75f3cf8a7b58124e2e0d3dd29c7d078e4556481946c606fdb6c6a4989c0620f5e6cefb227a689bb422742f9f2e9bc5c1cf0aab9fa3b124"' : 'data-bs-target="#xs-controllers-links-module-NotificationsModule-05766f27538ff9664b75f3cf8a7b58124e2e0d3dd29c7d078e4556481946c606fdb6c6a4989c0620f5e6cefb227a689bb422742f9f2e9bc5c1cf0aab9fa3b124"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-05766f27538ff9664b75f3cf8a7b58124e2e0d3dd29c7d078e4556481946c606fdb6c6a4989c0620f5e6cefb227a689bb422742f9f2e9bc5c1cf0aab9fa3b124"' :
                                            'id="xs-controllers-links-module-NotificationsModule-05766f27538ff9664b75f3cf8a7b58124e2e0d3dd29c7d078e4556481946c606fdb6c6a4989c0620f5e6cefb227a689bb422742f9f2e9bc5c1cf0aab9fa3b124"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationsModule-05766f27538ff9664b75f3cf8a7b58124e2e0d3dd29c7d078e4556481946c606fdb6c6a4989c0620f5e6cefb227a689bb422742f9f2e9bc5c1cf0aab9fa3b124"' : 'data-bs-target="#xs-injectables-links-module-NotificationsModule-05766f27538ff9664b75f3cf8a7b58124e2e0d3dd29c7d078e4556481946c606fdb6c6a4989c0620f5e6cefb227a689bb422742f9f2e9bc5c1cf0aab9fa3b124"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-05766f27538ff9664b75f3cf8a7b58124e2e0d3dd29c7d078e4556481946c606fdb6c6a4989c0620f5e6cefb227a689bb422742f9f2e9bc5c1cf0aab9fa3b124"' :
                                        'id="xs-injectables-links-module-NotificationsModule-05766f27538ff9664b75f3cf8a7b58124e2e0d3dd29c7d078e4556481946c606fdb6c6a4989c0620f5e6cefb227a689bb422742f9f2e9bc5c1cf0aab9fa3b124"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrdersModule-01505c52b629eed840c157ad05f0cb6eeb1bb04a126ef73a0227b6db362168e1387679b6b1344c785c833826bf80c05f1bfb0fbe57dafee7e936b07de521324e"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-01505c52b629eed840c157ad05f0cb6eeb1bb04a126ef73a0227b6db362168e1387679b6b1344c785c833826bf80c05f1bfb0fbe57dafee7e936b07de521324e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-01505c52b629eed840c157ad05f0cb6eeb1bb04a126ef73a0227b6db362168e1387679b6b1344c785c833826bf80c05f1bfb0fbe57dafee7e936b07de521324e"' :
                                            'id="xs-controllers-links-module-OrdersModule-01505c52b629eed840c157ad05f0cb6eeb1bb04a126ef73a0227b6db362168e1387679b6b1344c785c833826bf80c05f1bfb0fbe57dafee7e936b07de521324e"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-01505c52b629eed840c157ad05f0cb6eeb1bb04a126ef73a0227b6db362168e1387679b6b1344c785c833826bf80c05f1bfb0fbe57dafee7e936b07de521324e"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-01505c52b629eed840c157ad05f0cb6eeb1bb04a126ef73a0227b6db362168e1387679b6b1344c785c833826bf80c05f1bfb0fbe57dafee7e936b07de521324e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-01505c52b629eed840c157ad05f0cb6eeb1bb04a126ef73a0227b6db362168e1387679b6b1344c785c833826bf80c05f1bfb0fbe57dafee7e936b07de521324e"' :
                                        'id="xs-injectables-links-module-OrdersModule-01505c52b629eed840c157ad05f0cb6eeb1bb04a126ef73a0227b6db362168e1387679b6b1344c785c833826bf80c05f1bfb0fbe57dafee7e936b07de521324e"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-c03276c2ff4dfe5764abcfcd9e346a9db48fd68e3d55bc21849ca0909ae4ab25e1340f90c49fe3bf1caac514bdc0613b42ccecbf9680f81a4d045a674219f146"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-c03276c2ff4dfe5764abcfcd9e346a9db48fd68e3d55bc21849ca0909ae4ab25e1340f90c49fe3bf1caac514bdc0613b42ccecbf9680f81a4d045a674219f146"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-c03276c2ff4dfe5764abcfcd9e346a9db48fd68e3d55bc21849ca0909ae4ab25e1340f90c49fe3bf1caac514bdc0613b42ccecbf9680f81a4d045a674219f146"' :
                                            'id="xs-controllers-links-module-ProductsModule-c03276c2ff4dfe5764abcfcd9e346a9db48fd68e3d55bc21849ca0909ae4ab25e1340f90c49fe3bf1caac514bdc0613b42ccecbf9680f81a4d045a674219f146"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-c03276c2ff4dfe5764abcfcd9e346a9db48fd68e3d55bc21849ca0909ae4ab25e1340f90c49fe3bf1caac514bdc0613b42ccecbf9680f81a4d045a674219f146"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-c03276c2ff4dfe5764abcfcd9e346a9db48fd68e3d55bc21849ca0909ae4ab25e1340f90c49fe3bf1caac514bdc0613b42ccecbf9680f81a4d045a674219f146"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-c03276c2ff4dfe5764abcfcd9e346a9db48fd68e3d55bc21849ca0909ae4ab25e1340f90c49fe3bf1caac514bdc0613b42ccecbf9680f81a4d045a674219f146"' :
                                        'id="xs-injectables-links-module-ProductsModule-c03276c2ff4dfe5764abcfcd9e346a9db48fd68e3d55bc21849ca0909ae4ab25e1340f90c49fe3bf1caac514bdc0613b42ccecbf9680f81a4d045a674219f146"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-36648428585e6c79dc0617c1bdba61857747523f055a1e23ef73119b34cf407fcf2091b8a87e5d98255f8ce854af527caa3ba18e29864f2186fcf8bf8db768c5"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-36648428585e6c79dc0617c1bdba61857747523f055a1e23ef73119b34cf407fcf2091b8a87e5d98255f8ce854af527caa3ba18e29864f2186fcf8bf8db768c5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-36648428585e6c79dc0617c1bdba61857747523f055a1e23ef73119b34cf407fcf2091b8a87e5d98255f8ce854af527caa3ba18e29864f2186fcf8bf8db768c5"' :
                                            'id="xs-controllers-links-module-UsersModule-36648428585e6c79dc0617c1bdba61857747523f055a1e23ef73119b34cf407fcf2091b8a87e5d98255f8ce854af527caa3ba18e29864f2186fcf8bf8db768c5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-36648428585e6c79dc0617c1bdba61857747523f055a1e23ef73119b34cf407fcf2091b8a87e5d98255f8ce854af527caa3ba18e29864f2186fcf8bf8db768c5"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-36648428585e6c79dc0617c1bdba61857747523f055a1e23ef73119b34cf407fcf2091b8a87e5d98255f8ce854af527caa3ba18e29864f2186fcf8bf8db768c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-36648428585e6c79dc0617c1bdba61857747523f055a1e23ef73119b34cf407fcf2091b8a87e5d98255f8ce854af527caa3ba18e29864f2186fcf8bf8db768c5"' :
                                        'id="xs-injectables-links-module-UsersModule-36648428585e6c79dc0617c1bdba61857747523f055a1e23ef73119b34cf407fcf2091b8a87e5d98255f8ce854af527caa3ba18e29864f2186fcf8bf8db768c5"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/NotificationsController.html" data-type="entity-link" >NotificationsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrdersController.html" data-type="entity-link" >OrdersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationsService.html" data-type="entity-link" >NotificationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductsService.html" data-type="entity-link" >ProductsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});