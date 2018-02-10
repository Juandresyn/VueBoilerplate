import Menu from '../../components/Menu';
import { API_URL, API_ERROR } from '../../constants';

class AboutService {
  base = () => API_URL;
  defaultVMessage = () => API_ERROR;
  headers = () => ({});
  routes = () => ({
    users: {
      methods: 'get',
      path: '/users',
    },
  });
  methods = () => ({
    getUsers: {
      method: 'get',
      route: 'users',
    },
  });
}

export default {
  name: 'About',
  data: () => (
    {
      msg: 'About',
      users: [],
    }
  ),
  mounted() {
    this.service = this.$serviceFactory(new AboutService(), this);
    this.load();
  },
  methods: {
    async load() {
      this.users = await this.service.call('getUsers');
    },
    validationError: (message) => {
      console.log(message);
    },
  },
  components: {
    Menu,
  },
  head: {
    title: {
      inner: 'Vue.js Boilerplate',
      complement: 'About',
    },
    link: [
      { rel: 'canonical', href: 'http://example.com/#/about/', id: 'canonical' },
    ],
  },
};
