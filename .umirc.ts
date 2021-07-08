import { defineConfig } from 'umi';

export default defineConfig({
  //layout:{},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/productIntroduce', component: '@/pages/productIntroduce/index' },
  ],
  fastRefresh: {},
});
