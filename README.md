#File Structure

##src/api
``
Here you can find all the api address. If you need proxy function in developemnt enviroment plz add ${CONSTS.API} before your api address.
``
##src/assets
``
Here you can put static sources need to be compiled like CSS,  small images or icons,  please be aware for the resources don't need to be compiled like big size images, audios and videos, you should put them in the /public to improve compiling speed.
``
##src/components 
``
Here you can put basic functional components(means they should not contain business logic) such like dialog, carousel etc.  We will use some third party UI libraries so only develop our own functional component unless you can not find it feed your requirement in UI librararies.
``

##src/i18n
``
Here you can find the translation files for different languages.
``

##src/libs
``
Here you can put some global constants or methods, sometimes you will need some business functions through the whole application like global loading, warning and error alert,  this will be a good place to put them.
``
##src/router
``
Here you can find all the routers.
``
##src/store
``
Here will be used by VUEX which can easily manage global states, but usually you can use simple store mode by save a global variable in the libs, like VUEX doc said, you will know you have to use it when you really need to use it. 
``
##src/views
``
Here you should put most of the pages, business components,
``

