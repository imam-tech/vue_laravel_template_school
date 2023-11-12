import Cookies from "js-cookie"
import vuex from '../store/store'

export default function hasLoggedIn({ next, router, to }) {
    console.log("access")
    if (!Cookies.get('access_token')) {
        return router.push('/auth/login');
    }

    // let toPath = to.path
    // toPath = toPath.slice(5)
    // let permissions = vuex.state.permissions
    // permissions = permissions.map(element => {
    //     return element.toLowerCase();
    // });
    // let mainMenu = toPath.split("/")[0]+ ".*"
    //
    // // Check if access the dashboard.
    // if (toPath != '') {
    //     if (!permissions.includes('administrator.*')) {
    //         let subMenu = permissions.includes(mainMenu)
    //         if(subMenu){
    //             return next();
    //         }
    //         let slicePath = toPath.split('/')
    //         let firstUrl = slicePath[0]
    //         let secondUrl = slicePath[1]
    //
    //         let upperToPathFirst = firstUrl.toLowerCase()
    //         let upperToPathSecond = secondUrl != undefined ? secondUrl.toLowerCase() : ''
    //
    //         let finalUpper = upperToPathFirst + '.' + (upperToPathSecond == '' ? '*' : upperToPathSecond)
    //
    //         if (!permissions.includes(finalUpper)) {
    //             router.push('/app')
    //         }
    //     }
    // }
    return next();
}
