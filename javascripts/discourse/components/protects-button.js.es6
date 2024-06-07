import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'protects-button',

  initialize() {
    withPluginApi('0.8', api => {
      const siteSettings = api.container.lookup('site-settings:main');
      const isEnabled = siteSettings.get('prevent_protects_enabled');
      const message = siteSettings.get('prevent_protects_message');

      if (isEnabled) {
        $(document).contextmenu(function() {
          alert(message);
        });
      }
    });
  }
};
