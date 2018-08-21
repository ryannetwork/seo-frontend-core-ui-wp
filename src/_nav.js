export default {
  items: [
    {
      name: 'Tổng quan',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Sản phẩm',
      url: '/product',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'Danh mục',
          url: '/product/products',
          icon: 'icon-puzzle',
        },
        {
          name: 'Thiết lập giá',
          url: '/product/price-book',
          icon: 'icon-puzzle',
        },
        {
          name: 'Kiểm kho',
          url: '/product/stock-takes',
          icon: 'icon-puzzle',
        },
      ]
    },
    {
      name: 'Giao dịch',
      url: '/deal',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'Bán hàng',
          url: '/deal/invoices',
          icon: 'icon-puzzle',
        },
        {
          name: 'Khách trả hàng',
          url: '/deal/returns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Nhập hàng',
          url: '/deal/purchase-order',
          icon: 'icon-puzzle',
        },
        {
          name: 'Trả hàng nhập',
          url: '/deal/purchase-returns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Xuất hủy',
          url: '/deal/damage-items',
          icon: 'icon-puzzle',
        },
      ]
    },
    {
      name: 'Đối tác',
      url: '/partner',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'Khách hàng',
          url: '/partner/customer',
          icon: 'icon-puzzle',
        },
        {
          name: 'Nhà cung cấp',
          url: '/partner/supplier',
          icon: 'icon-puzzle',
        }
      ]
    },
    {
      name: 'Sổ quỹ',
      url: '/cash-flow',
      icon: 'icon-speedometer',
    },
    {
      name: 'Báo cáo',
      url: '/report',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'Cuối ngày',
          url: '/report/end-of-day-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Bán hàng',
          url: '/report/sale-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Đặt hàng',
          url: '/report/order-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Hàng hóa',
          url: '/report/product-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Khách hàng',
          url: '/report/customer-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Nhà cung cấp',
          url: '/report/supplier-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Nhân viên',
          url: '/report/user-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Kênh bán hàng',
          url: '/report/sale-chanel-report',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tài chính',
          url: '/report/financial-report',
          icon: 'icon-puzzle',
        },
      ]
    },




    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
    },
  ],
};
