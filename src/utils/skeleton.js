import Vue from 'vue';
import Skeleton from '@/components/skeleton/index.vue';

export default new Vue({
  components: {
    Skeleton,
  },
  render: h => h(Skeleton),
});
