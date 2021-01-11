import {
    // Pagination,
    // Dialog,
    // Autocomplete,
    // Dropdown,
    // DropdownMenu,
    // DropdownItem,
    // Menu,
    // Submenu,
    // MenuItem,
    // MenuItemGroup,
    // Input,
    // InputNumber,
    // Radio,
    // RadioGroup,
    // RadioButton,
    // Checkbox,
    // CheckboxButton,
    // CheckboxGroup,
    // Switch,
    // Select,
    // Option,
    // OptionGroup,
    Button,
    // ButtonGroup,
    // Table,
    // TableColumn,
    // DatePicker,
    // TimeSelect,
    // TimePicker,
    // Popover,
    // Tooltip,
    // Breadcrumb,
    // BreadcrumbItem,
    // Form,
    // FormItem,
    // Tabs,
    // TabPane,
    // Tag,
    // Tree,
    // Alert,
    // Slider,
    // Icon,
    // Row,
    // Col,
    // Upload,
    // Progress,
    // Spinner,
    // Badge,
    // Card,
    // Rate,
    // Steps,
    // Step,
    // Carousel,
    // CarouselItem,
    // Collapse,
    // CollapseItem,
    // Cascader,
    // ColorPicker,
    // Transfer,
    // Container,
    // Header,
    // Aside,
    // Main,
    // Footer,
    // Timeline,
    // TimelineItem,
    // Link,
    // Divider,
    // Image,
    // Calendar,
    // Backtop,
    // PageHeader,
    // CascaderPanel,
    // Loading,
    // MessageBox,
    // Message,
    // Notification
} from 'element-ui';
import Vue from 'vue';
import axios from 'axios';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';

// Global Variables & Functions
import store from './store';
import consts from './libs/constants';
import methods from './libs/methods';
import apis from './apis/index';

// i18n
import en from './i18n/en';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.timeout = 1000 * 20;
Vue.prototype.$consts = consts;
Vue.prototype.$apis = apis;

const ThirdPartyComponents = [
    // Pagination,
    // Dialog,
    // Autocomplete,
    // Dropdown,
    // DropdownMenu,
    // DropdownItem,
    // Menu,
    // Submenu,
    // MenuItem,
    // MenuItemGroup,
    // Input,
    // InputNumber,
    // Radio,
    // RadioGroup,
    // RadioButton,
    // Checkbox,
    // CheckboxButton,
    // CheckboxGroup,
    // Switch,
    // Select,
    // Option,
    // OptionGroup,
    Button,
    // ButtonGroup,
    // Table,
    // TableColumn,
    // DatePicker,
    // TimeSelect,
    // TimePicker,
    // Popover,
    // Tooltip,
    // Breadcrumb,
    // BreadcrumbItem,
    // Form,
    // FormItem,
    // Tabs,
    // TabPane,
    // Tag,
    // Tree,
    // Alert,
    // Slider,
    // Icon,
    // Row,
    // Col,
    // Upload,
    // Progress,
    // Spinner,
    // Badge,
    // Card,
    // Rate,
    // Steps,
    // Step,
    // Carousel,
    // CarouselItem,
    // Collapse,
    // CollapseItem,
    // Cascader,
    // ColorPicker,
    // Transfer,
    // Container,
    // Header,
    // Aside,
    // Main,
    // Footer,
    // Timeline,
    // TimelineItem,
    // Link,
    // Divider,
    // Image,
    // Calendar,
    // Backtop,
    // PageHeader,
    // CascaderPanel,
    // Loading,
    // MessageBox,
    // Message,
    // Notification
];

ThirdPartyComponents.forEach((item) => {
    Vue.use(item);
});
Vue.use(VueI18n);
Vue.use(methods);

const messages = {
    en,
};

const i18n = new VueI18n({
    locale: 'en',
    messages,
});

new Vue({
    i18n,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
