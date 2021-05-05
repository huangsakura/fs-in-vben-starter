import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/crud',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: 'demo',
  },
  children: [
    {
      path: 'crud',
      name: 'CrudDemo',
      component: () => import('/@/views/demo/crud/index.vue'),
      meta: {
        title: 'FastCrud',
        icon: 'simple-icons:about-dot-me',
      },
    },
  ],
};

export default dashboard;
